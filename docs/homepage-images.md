# 홈페이지 이미지 배치

- 메인: 검은 배경의 대형 제목 뒤에 강의실·제작·데이터 이미지를 조각 형태로 배치한다. 제공된 강의실 사진의 분위기로 생성한 AI 교육 콘셉트이며 실제 수업 기록을 의미하지 않는다. 화면에 생성 이미지임을 표시한다.
- 기초과정 카드: 생활 아이디어와 디지털 도구를 연결하는 일러스트.
- 심화과정 카드: 개인 데이터·대시보드 관계를 표현한 일러스트.
- 교육 방식: 홈페이지의 마지막 타일을 직접 완성하는 일러스트.
- 업무비서 프로젝트: 일정·날씨·안내문을 사람이 검토하는 일러스트.

| 용도 | 프로젝트 내부 파일 |
|---|---|
| 메인 히어로 | public/images/university/classroom-learning-hero-v2.png |
| 기초과정 | public/images/university/everyday-digital-tools-v3.png |
| 심화과정 | public/images/university/personal-data-insights-v3.png |
| 실습·교육 방식 | public/images/university/website-final-tile-v3.png |
| 업무비서 예시 | public/images/university/05-human-reviewed-automation-v2.png |

- 메인은 제목·CTA를 HTML로 제공하고 검은 배경·밝은 글자·낮은 이미지 밝기로 가독성을 확보한다.
- 태블릿·모바일에서는 제목·이미지·설명을 세로 흐름으로 배치한다. 작은 화면의 본문에 겹치는 장식은 숨긴다.
- Next.js Image와 정적 이미지 가져오기를 사용해 크기를 예약하고, 메인 이미지는 preload, 나머지는 지연 로딩·자동 최적화를 적용한다.
- 홈페이지 변경에 사용하는 생성 이미지 5장만 소스에 포함하며, 사용자 제공 원본 수업 사진과 별도 인물 합성 이미지는 업로드하지 않는다.
