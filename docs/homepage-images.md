# 홈페이지 이미지 배치

- 메인: 검은 배경의 대형 제목 뒤에 이번 요청에서 제공된 교육 현장 사진 4장을 조각 형태로 배치한다. ‘제공된 교육 현장 사진’으로 표시한다.
- 홈·대학 소개: 같은 사진 4장을 원래 색감의 갤러리로 배치한다. 안전교육 등 다양한 수업 장면이며 AI 과정의 실제 수업 사진을 의미하지 않는다고 명시한다. 인물 이름·소속·제휴 관계는 추정하지 않는다.
- 기초과정 카드: 생활 아이디어와 디지털 도구를 연결하는 일러스트.
- 심화과정 카드: 개인 데이터·대시보드 관계를 표현한 일러스트.
- 교육 방식: 홈페이지의 마지막 타일을 직접 완성하는 일러스트.
- 업무비서 프로젝트: 일정·날씨·안내문을 사람이 검토하는 일러스트.

| 용도 | 프로젝트 내부 파일 |
|---|---|
| 메인·교육 현장: 교실 강의 (_02.jpg) | public/images/education/classroom-lecture.jpg |
| 메인·교육 현장: 사례 영상 안전교육 (_03.jpg) | public/images/education/safety-learning.jpg |
| 메인·교육 현장: 성인 건설업 기초안전 보건교육 (_01.jpg) | public/images/education/adult-safety-training.jpg |
| 메인·교육 현장: 단체 교육 (.jpg) | public/images/education/group-education.jpg |
| 기초과정 | public/images/university/everyday-digital-tools-v3.png |
| 심화과정 | public/images/university/personal-data-insights-v3.png |
| 실습·교육 방식 | public/images/university/website-final-tile-v3.png |
| 업무비서 예시 | public/images/university/05-human-reviewed-automation-v2.png |

- 메인은 제목·CTA를 HTML로 제공하고 검은 배경·밝은 글자·낮은 이미지 밝기로 가독성을 확보한다.
- 태블릿·모바일에서는 제목·이미지·설명을 세로 흐름으로 배치한다. 작은 화면의 본문에 겹치는 장식은 숨긴다.
- Next.js Image와 정적 이미지 가져오기를 사용해 크기를 예약하고, 메인 이미지는 preload, 나머지는 지연 로딩·자동 최적화를 적용한다.
- 이번 요청에서 지정한 KakaoTalk_20261119_111839110 사진 4장을 추가한다. 원본을 합성 없이 보관하고 Next.js Image로 전송 크기를 최적화한다. 별도 인물 합성 이미지는 포함하지 않는다.
