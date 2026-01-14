// ====== Sheet CSV URLs (Google Sheets published as CSV) ======
// How to get URL:
// 1) Google Sheet > File > Share > Publish to web > CSV
// 2) Copy the published URL with output=csv
// 3) Paste below

window.SHEET_CONFIG = {
  teachers: {
    // existing
    csvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTO3geLtt5vZ-bOZiY4vb_Rd48xcQGJyZbmjXcHA1ZDnDmFQWAysgxvD-EumgkalVDlmRgdHfzqIVwf/pub?gid=0&single=true&output=csv",
  },
  notices: {
    csvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTO3geLtt5vZ-bOZiY4vb_Rd48xcQGJyZbmjXcHA1ZDnDmFQWAysgxvD-EumgkalVDlmRgdHfzqIVwf/pub?gid=1610639191&single=true&output=csv",
  },
  programs: {
    // ✅ 2025 / 2026 연도별 탭(또는 별도 시트)로 분리해서 운영하세요.
    // 아래 URL만 바꾸면 홈페이지는 자동으로 연도별 데이터로 바뀝니다.
    "2025": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTO3geLtt5vZ-bOZiY4vb_Rd48xcQGJyZbmjXcHA1ZDnDmFQWAysgxvD-EumgkalVDlmRgdHfzqIVwf/pub?gid=10875331&single=true&output=csv",
    "2026": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTO3geLtt5vZ-bOZiY4vb_Rd48xcQGJyZbmjXcHA1ZDnDmFQWAysgxvD-EumgkalVDlmRgdHfzqIVwf/pub?gid=1746803437&single=true&output=csv"
  },
  pd: {
    // ✅ PD도 강사카드처럼 연도별로 관리 추천
    // 컬럼 추천: 성명, 역할, 담당사업, 활동지역, 주요경력요약, 프로필사진(선택), 상태(활성/비활성), 이메일(비공개)...
    "2025": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTO3geLtt5vZ-bOZiY4vb_Rd48xcQGJyZbmjXcHA1ZDnDmFQWAysgxvD-EumgkalVDlmRgdHfzqIVwf/pub?gid=1571351887&single=true&output=csv",
    "2026": "https://docs.google.com/spreadsheets/d/e/2PACX-1vTO3geLtt5vZ-bOZiY4vb_Rd48xcQGJyZbmjXcHA1ZDnDmFQWAysgxvD-EumgkalVDlmRgdHfzqIVwf/pub?gid=1600189727&single=true&output=csv"
  }
};
