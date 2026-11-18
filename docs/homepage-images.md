# 홈페이지 이미지 배치

- 메인: 제공된 강의실 참고 사진의 분위기로 생성한 AI 교육 콘셉트 이미지. 실제 수업 기록을 의미하지 않으며 화면에 생성 이미지임을 표시한다.
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

- 메인은 제목·CTA를 HTML로 제공하고 이미지의 여백과 밝은 그라데이션으로 가독성을 확보한다.
- 태블릿·모바일에서는 제목과 이미지를 위아래로 분리하여 작은 화면에서 겹침을 피한다.
- Next.js Image와 정적 이미지 가져오기를 사용해 크기를 예약하고, 메인 이미지는 preload, 나머지는 지연 로딩·자동 최적화를 적용한다.
- 홈페이지 변경에 사용하는 생성 이미지 5장만 소스에 포함하며, 사용자 제공 원본 수업 사진과 별도 인물 합성 이미지는 업로드하지 않는다.
