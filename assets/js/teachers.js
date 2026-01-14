window.TeachersModule = (function(){
  let TEACHERS = [];

  async function load(){
    const url = window.SHEET_CONFIG?.teachers?.csvUrl;
    if(!url) return;

    try{
      const rows = await window.CSVUtils.fetchCSV(url);
      if(!rows.length) return;

      const headers  = rows[0].map(h=>window.CSVUtils.safeText(h).trim());
      const dataRows = rows.slice(1);

      const norm = headers.map(window.CSVUtils.normalizeHeader);

      const colIndex = {
        name: norm.findIndex(h=>h.includes("성명") || h.includes("name")),
        org: norm.findIndex(h=>h.includes("소속") || h.includes("org")),
        field: norm.findIndex(h=>h.includes("강의분야") || h.includes("field")),
        career: norm.findIndex(h=>h.includes("주요경력") || h.includes("주요경력요약") || h.includes("career")),
        email: norm.findIndex(h=>h.includes("이메일") || h.includes("email")),
        category: norm.findIndex(h=>h.includes("카테고리") || h.includes("category") || h.includes("분류")),
        status: norm.findIndex(h=>h.includes("상태") || h.includes("status"))
      };

      TEACHERS = dataRows
        .filter(r => r[colIndex.name] && window.CSVUtils.safeText(r[colIndex.name]).trim() !== "")
        .filter(r => {
          // 상태가 있으면 "활성"만 노출
          if(colIndex.status < 0) return true;
          const st = window.CSVUtils.safeText(r[colIndex.status]).trim();
          return st === "" || st === "활성" || st.toLowerCase() === "active";
        })
        .map(r=>({
          name: window.CSVUtils.safeText(r[colIndex.name]).trim(),
          org: window.CSVUtils.safeText(r[colIndex.org]).trim(),
          field: window.CSVUtils.safeText(r[colIndex.field]).trim(),
          career: window.CSVUtils.safeText(r[colIndex.career]).trim(),
          // ⚠️ 개인정보: email은 화면에 출력하지 않습니다.
          email: window.CSVUtils.safeText(r[colIndex.email]).trim(),
          category: window.CSVUtils.safeText(r[colIndex.category]).trim() || "기타",
        }));

      render("전체");
    }catch(err){
      console.error("강사 시트 로딩 오류:", err);
    }
  }

  function render(filterCategory){
    const listEl = document.getElementById("teacher-list");
    if(!listEl) return;

    const target = (filterCategory && filterCategory !== "전체")
      ? TEACHERS.filter(t=>t.category === filterCategory)
      : TEACHERS;

    listEl.innerHTML = "";
    target.forEach(t=>{
      const careerText  = t.career || "";
      const shortCareer = careerText.length>100 ? careerText.slice(0,100)+"…" : careerText;

      const card = document.createElement("article");
      card.className = "teacher-card";
      card.innerHTML = `
        <div class="teacher-name">${t.name}</div>
        <div class="teacher-org">${t.org || ""}</div>
        <div class="teacher-field">${t.field || ""}</div>
        <p class="teacher-note">${shortCareer}</p>
        <div style="margin-top:6px;font-size:.75rem;color:#5b8a72;">
          #${t.category || "기타"}
        </div>
      `;
      listEl.appendChild(card);
    });
  }

  function bindFilterButtons(){
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn=>{
      btn.addEventListener("click",()=>{
        buttons.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.getAttribute("data-filter");
        render(cat);
      });
    });
  }

  return { load, render, bindFilterButtons };
})();
