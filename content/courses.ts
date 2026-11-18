export type CourseWeek = {
  week: number;
  globalWeek: number;
  title: string;
  summary: string;
  deliverable: string;
};

export const basicWeeks: CourseWeek[] = [
  {
    week: 1,
    globalWeek: 1,
    title: "AI·생성형 AI 첫걸음",
    summary: "AI의 역할과 한계, 기본 조작, 안전한 질문과 사실 확인",
    deliverable: "생활 질문 3개, 답변 검증표, AI 사용 체크리스트",
  },
  {
    week: 2,
    globalWeek: 2,
    title: "나만의 AI 생활비서",
    summary: "프롬프트 재사용과 반복 개선",
    deliverable: "생활비서 프롬프트 3종 및 결과 화면",
  },
  {
    week: 3,
    globalWeek: 3,
    title: "문서·이미지·영상 AI 활용",
    summary: "하나의 홍보 주제를 문안·이미지·30초 영상 구성안으로 연결",
    deliverable:
      "홍보 문안 1개, 이미지 또는 이미지 콘셉트 1개, 30초 영상 구성안",
  },
  {
    week: 4,
    globalWeek: 4,
    title: "바이브코딩과 첫 웹 프로그램",
    summary: "자연어 요구사항으로 정적 할 일 체크리스트 제작",
    deliverable: "로컬 실행 체크리스트와 기능 검수표",
  },
  {
    week: 5,
    globalWeek: 5,
    title: "생활형 QR코드 생성기",
    summary: "문자·URL 입력을 QR 이미지로 변환·저장·인식 확인",
    deliverable: "QR 생성기 1개, PNG 샘플, 모바일 스캔 검수표",
  },
  {
    week: 6,
    globalWeek: 6,
    title: "PDF·이미지 변환 웹도구",
    summary: "브라우저에서 JPG·PNG를 A4 PDF로 변환",
    deliverable: "이미지→PDF 도구 1개, 변환 PDF 샘플, 검수표",
  },
  {
    week: 7,
    globalWeek: 7,
    title: "GitHub와 웹 배포 기초",
    summary: "버전관리 중심 + 배포 흐름 시연(원안의 웹 배포 요소 유지)",
    deliverable: "GitHub 저장소 1개, 커밋 2개, 배포 시연 관찰 기록",
  },
  {
    week: 8,
    globalWeek: 8,
    title: "나만의 홈페이지 제작·실제 웹 배포",
    summary: "1페이지 소개 홈페이지 제작 후 GitHub→Vercel 실제 배포",
    deliverable: "개인 홈페이지 URL 1개, GitHub 저장소, 사이트 검수표",
  },
  {
    week: 9,
    globalWeek: 9,
    title: "웹디자인과 사용성 개선",
    summary: "기존 홈페이지의 가독성·모바일·접근성 개선",
    deliverable: "수정 전후 비교화면, 개선된 홈페이지, 검수표",
  },
  {
    week: 10,
    globalWeek: 10,
    title: "Codex 활용과 작은 업무자동화",
    summary: "모임·교육 안내문 자동 작성기와 작업 분할·회귀검수",
    deliverable: "안내문 자동 생성기, 작업분할표, 테스트 기록",
  },
  {
    week: 11,
    globalWeek: 11,
    title: "기초 최종 프로젝트 완성·품질검수",
    summary: "기존 제작물 하나를 선택해 오류 해결·백업·3분 시연 준비",
    deliverable: "최종 프로그램 1개, 검수표, 백업, 3분 시연 대본",
  },
  {
    week: 12,
    globalWeek: 12,
    title: "기초 성과발표와 90일 활용계획",
    summary: "최종 시연·동료 평가·AI 안전·30/60/90일 계획",
    deliverable: "발표 평가표, 최종 프로젝트 시연자료, 90일 실천계획서",
  },
];

export const advancedWeeks: CourseWeek[] = [
  {
    week: 1,
    globalWeek: 13,
    title: "기존 프로그램 고도화·데이터베이스 입문",
    summary:
      "기초과정 웹사이트에 공개 공지사항 조회를 연결하고 RLS로 비공개 공지와 쓰기 요청을 차단한다.",
    deliverable: "조회 전용 공지 기능",
  },
  {
    week: 2,
    globalWeek: 14,
    title: "공지 CRUD·관리자 권한",
    summary:
      "로그인과 관리권한을 구분하고 관리자만 공지를 등록·수정·삭제하도록 데이터베이스에서 강제한다.",
    deliverable: "관리자 공지 화면",
  },
  {
    week: 3,
    globalWeek: 15,
    title: "사용자별 데이터 관리",
    summary:
      "각 사용자의 할 일을 별도 행으로 저장하고 다른 사용자에게 조회·변경되지 않도록 보호한다.",
    deliverable: "개인 일정관리 앱",
  },
  {
    week: 4,
    globalWeek: 16,
    title: "데이터 검색·통계 대시보드",
    summary:
      "본인 할 일에서 검색·필터·정렬을 제공하고 전체/완료/진행 중 건수와 등록월별 그래프를 만든다.",
    deliverable: "통계 대시보드",
  },
  {
    week: 5,
    globalWeek: 17,
    title: "XLSX·PDF 보고서",
    summary:
      "등록일 기간별 개인 할 일을 XLSX와 A4 PDF로 내보내고 파일을 실제 열어 데이터·한글·보안을 검증한다.",
    deliverable: "다운로드 보고서",
  },
  {
    week: 6,
    globalWeek: 18,
    title: "예약 집계·업무자동화",
    summary:
      "매주 월요일 09:00 KST에 지난주 등록 업무를 사용자별로 집계·저장하고 중복실행·실행이력을 확인한다.",
    deliverable: "자동 집계 작업",
  },
  {
    week: 7,
    globalWeek: 19,
    title: "AI API·보고서 자동 요약",
    summary:
      "가상 주간 통계로 모의 요약을 먼저 만든 뒤 서버에서 인증된 AI API 호출을 최소 1회 시연하고 숫자·근거·비용을 검수한다.",
    deliverable: "한국어 AI 요약",
  },
  {
    week: 8,
    globalWeek: 20,
    title: "내 데이터 AI 질문응답",
    summary:
      "지난주 완료율·이번 달 등록 수·주간 비교 3종 질문에 본인 데이터 기반 근거를 보여주는 답변을 생성한다.",
    deliverable: "개인 데이터 AI 비서",
  },
  {
    week: 9,
    globalWeek: 21,
    title: "외부 날씨 API 연동",
    summary:
      "도시·방문 날짜에 맞춰 Open-Meteo 예보를 조회하고 지원기간·누락·오류를 정확하게 표시한다.",
    deliverable: "일정·날씨 화면",
  },
  {
    week: 10,
    globalWeek: 22,
    title: "AI 에이전트 기초·업무비서",
    summary:
      "내 일정 선택→날씨 조회→안내문 초안 작성→사용자 검토·승인의 제한된 업무흐름을 구현한다.",
    deliverable: "통합 AI 업무비서",
  },
  {
    week: 11,
    globalWeek: 23,
    title: "최종 프로그램 완성·품질검수",
    summary:
      "수강생별 A/B/C 범위에 따라 필수 기능을 안정화하고 회귀·권한·비용을 확인한 뒤 교육용 Preview에서 시연한다.",
    deliverable: "최종 앱·검수표",
  },
  {
    week: 12,
    globalWeek: 24,
    title: "캡스톤 발표·실전 활용",
    summary:
      "3분 실제 시연·근거 기반 평가·미해결 오류 공개·90일 시범운영 계획으로 과정을 완수한다.",
    deliverable: "캡스톤 발표·운영계획",
  },
];

export type Track = "basic" | "advanced";
export const courses = {
  basic: {
    label: "기초과정",
    english: "FOUNDATION",
    number: "01",
    headline: "AI와 친해지고, 첫 프로그램을 만듭니다.",
    description:
      "AI를 처음 만나는 순간부터 나만의 웹사이트를 배포하기까지. 일상에 필요한 작은 도구를 하나씩 직접 만들어 봅니다.",
    audience: "코딩 경험이 없는 성인·비전공자",
    prerequisite: "키보드 입력과 파일·폴더 열기 등 기본 PC 사용",
    tools: ["ChatGPT", "Codex", "GitHub", "Vercel"],
    outcome: "생활형 웹도구와 나만의 홈페이지",
    weeks: basicWeeks,
  },
  advanced: {
    label: "심화과정",
    english: "ADVANCED",
    number: "02",
    headline: "나의 데이터로, 더 쓸모 있는 서비스를 만듭니다.",
    description:
      "기초에서 만든 프로젝트에 데이터·로그인·자동화를 연결합니다. 작동하는 기능을 확인하며 나에게 맞는 서비스로 발전시킵니다.",
    audience: "기초과정 수료 수준의 웹프로젝트 경험자",
    prerequisite: "실행 가능한 웹프로젝트, GitHub·배포 흐름에 대한 기초 경험",
    tools: ["Supabase", "AI API", "데이터 시각화", "자동화"],
    outcome: "개인 데이터 앱·보고서·업무비서 중 선택 범위",
    weeks: advancedWeeks,
  },
} satisfies Record<
  Track,
  {
    label: string;
    english: string;
    number: string;
    headline: string;
    description: string;
    audience: string;
    prerequisite: string;
    tools: string[];
    outcome: string;
    weeks: CourseWeek[];
  }
>;
