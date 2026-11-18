# AI 융합대학 홈페이지

성인·비전공자를 위한 기초 12주·심화 12주 교육과정 소개 홈페이지입니다.

## 현재 범위

- Next.js App Router, React, TypeScript, Tailwind CSS 기반 프론트엔드.
- 홈·소개·교육과정·주차 상세·로드맵·프로젝트·FAQ·모집 준비 화면 등 18개 페이지.
- 24주 원문 기반 콘텐츠, 주차 펼치기/닫기, 로드맵 앵커, FAQ 검색·분류, 모바일 메뉴.
- Supabase, 관리자, 신청 접수, 결제, 메일·문자 발송은 구현하지 않았습니다.
- 미확정 모집·운영·강사 정보는 준비 상태로 표시합니다. Sites 스킬은 사용하지 않습니다.

## 실행

검증 환경은 Node.js 24.21.0, npm 11.19.0입니다. 프로젝트 의존성은 `package-lock.json`으로 고정합니다.

```bash
npm ci
npm run dev
```

기본 주소: [http://127.0.0.1:3000](http://127.0.0.1:3000)

프로덕션 빌드 확인:

```bash
npm run build
npm run start
```

현재 범위에는 환경변수·Supabase 계정·API 키가 필요하지 않습니다.

## 검사

```bash
npm run lint
npm run typecheck
npm run build
```

로컬 서버를 실행한 상태에서 브라우저 검수:

```bash
npm run verify:frontend
```

- Windows에서는 설치된 Edge, macOS·Linux에서는 Playwright Chromium을 새 임시 프로필·헤드리스 모드로 실행합니다. 개인 브라우저 프로필에 접근하지 않습니다.
- macOS·Linux에서는 최초 검수 전에 `npx playwright install chromium`을 실행합니다. Linux 시스템 의존성이 필요한 경우 `npx playwright install --with-deps chromium`을 사용합니다. 이번 실제 검수는 Windows Edge에서 수행했습니다.
- 18개 페이지의 응답·제목·H1·내부 링크, 5개 폭의 35개 화면 조합, 주요 조작, 18개 페이지의 axe 접근성을 검사합니다.
- 결과와 캡처는 Git에서 제외한 `artifacts/`에 생성합니다. 자동 검사 통과는 모든 보조공학·실제 기기의 완전한 접근성을 보장하지 않습니다.

## 주요 파일

| 경로 | 용도 |
|---|---|
| `app/` | 공개 페이지·메타데이터·반응형 스타일 |
| `components/` | 헤더·푸터·과정 카드·커리큘럼·FAQ·프로젝트 예시 |
| `content/courses.ts` | 원문 요약표에서 추출한 기초·심화 주제·실습·산출물 |
| `content/site.ts` | FAQ·프로젝트 설명 |
| `scripts/verify-frontend.mjs` | 실제 브라우저 검수 |
| `docs/frontend-status.md` | 구현 범위·확인사항·보류사항 |

## 공개 전 확인

- 현재 `robots.txt`와 페이지 메타데이터는 검색 색인을 제한합니다. 공식 도메인 확정 후 canonical·sitemap·OG URL과 함께 검토하여 변경합니다.
- 개인정보·이용 안내 페이지는 준비 현황이며 확정된 법적 문서를 대신하지 않습니다.
- 강사·운영기관·제휴·개강일·교육비·정원·공식 문의처는 확정 후 게시합니다.
- 프로젝트 썸네일은 코드로 만든 디자인 예시이며 실행 도구·실제 수강생 작품이 아닙니다.
- 심화 7주 실제 API 호출의 필수/선택 여부는 원문에 불일치가 있어 공개 문구를 유보했습니다. 원본 추출 데이터는 유지하고 화면에서는 준비 상태를 안내합니다.
- 패키지 감사: 운영 의존성은 `npm audit --omit=dev`에서 취약점 0건. 전체 감사에는 개발용 lint 체인의 picomatch 관련 high 경고 14건이 남아 있습니다. 실행 서비스 취약점 14건을 의미하지 않으며, 패치 버전 확인 후 도구 체인을 재검토해야 합니다. 강제 다운그레이드는 적용하지 않았습니다.

## 콘텐츠 근거

- 제공된 홈페이지 최종개발기획·단계별작업지시서 Markdown 판본.
- 제공된 기초·심화 12주 최종점검개선 강의계획서 Markdown 판본.
- 각 원문의 제목·순서·예상 산출물을 유지하며, 실수강생 성과·공식 승인 사실을 생성하지 않습니다.
