import Link from "next/link";
import { Arrow, LineIcon } from "@/components/icons";
import { Eyebrow, ProgramCard, RecruitmentBanner } from "@/components/ui";
import { ProjectPreview } from "@/components/project-preview";
import { faqs, projects } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>새로운 배움, 새로운 가능성</Eyebrow>
            <h1>
              AI를 배우고,
              <br />
              <span>나의 가능성</span>을<br />
              만들다.
            </h1>
            <p>
              처음이어도 괜찮습니다.
              <br />
              일상에 필요한 작은 도구부터 나만의 프로그램까지,
              <br className="desktop-only" /> 직접 만들며 배우는 24주의 여정.
            </p>
            <div className="hero-buttons">
              <Link href="/programs" className="button">
                교육과정 살펴보기 <Arrow />
              </Link>
              <Link href="/roadmap" className="text-link">
                24주 여정 보기 <Arrow diagonal />
              </Link>
            </div>
            <div className="hero-caption">
              <span className="small-dot" />
              성인·비전공자를 위한 실습 중심 교육
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbital orbital-one" />
            <div className="orbital orbital-two" />
            <span className="art-coordinate top">LEARN. BUILD. GROW.</span>
            <span className="art-coordinate bottom">
              YOUR IDEAS, MADE REAL.
            </span>
            <div className="floating-tag tag-top">
              <LineIcon name="spark" size={17} /> 아이디어가 시작되는 순간
            </div>
            <div className="hero-window">
              <div className="window-bar">
                <div>
                  <i />
                  <i />
                  <i />
                </div>
                <span>my-first-project</span>
                <LineIcon name="code" size={16} />
              </div>
              <div className="window-content">
                <span className="editor-eyebrow">HELLO, NEW POSSIBILITY</span>
                <div className="window-heading">
                  나의 첫 번째
                  <br />
                  <span>가능성</span>을 만드는 중.
                </div>
                <div className="editor-code">
                  <span>const</span> myFuture = {"{"}
                  <br />
                  &nbsp;&nbsp;curiosity: <em>&quot;새롭게 배우기&quot;</em>,
                  <br />
                  &nbsp;&nbsp;idea: <em>&quot;직접 만들어 보기&quot;</em>,<br />
                  &nbsp;&nbsp;possibility: <b>Infinity</b>
                  <br />
                  {"};"}
                </div>
                <div className="window-bottom">
                  <span>
                    <i /> 작은 시작, 더 넓은 일상
                  </span>
                  <span className="play-icon">→</span>
                </div>
              </div>
            </div>
            <div className="floating-tag tag-bottom">
              <span className="tag-check">
                <LineIcon name="check" size={18} />
              </span>
              <div>
                <strong>나도 만들 수 있구나.</strong>
                <small>배움을, 실제 결과물로.</small>
              </div>
            </div>
            <span className="art-cross cross-one">+</span>
            <span className="art-cross cross-two">+</span>
          </div>
        </div>
      </section>
      <section className="facts-strip" aria-label="교육과정 요약">
        <div className="container facts-grid">
          <div>
            <span>처음부터 차근차근</span>
            <strong>
              코딩 경험 <em>없이도</em>
            </strong>
          </div>
          <div>
            <span>기초에서 심화까지</span>
            <strong>
              총 <em>24</em>주 여정
            </strong>
          </div>
          <div>
            <span>직접 만들고 확인하는</span>
            <strong>
              실습 중심 <em>교육</em>
            </strong>
          </div>
          <div>
            <span>나만의 속도로 완성하는</span>
            <strong>
              생활 속 <em>프로젝트</em>
            </strong>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <Eyebrow>LEARNING PROGRAMS</Eyebrow>
            <h2>
              출발점은 달라도,
              <br />
              가능성은 누구에게나.
            </h2>
          </div>
          <p>
            AI를 처음 만나는 분도, 한 걸음 더 나아가고 싶은 분도.
            <br className="desktop-only" /> 지금 나에게 맞는 과정에서
            시작하세요.
          </p>
        </div>
        <div className="program-grid">
          <ProgramCard track="basic" />
          <ProgramCard track="advanced" />
        </div>
        <p className="section-footnote">
          각 과정 12주 · 주 1회 180분(휴식 10분 포함) · 전체 편성 72시간 /
          교육활동 68시간
        </p>
      </section>
      <section className="journey-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>YOUR LEARNING JOURNEY</Eyebrow>
              <h2>
                작은 시작이,
                <br />
                쓸모 있는 변화가 되도록.
              </h2>
            </div>
            <Link href="/roadmap" className="text-link">
              전체 로드맵 보기 <Arrow />
            </Link>
          </div>
          <div className="journey-steps">
            {[
              {
                n: "01",
                range: "기초 1~3주",
                title: "AI와 친해지기",
                desc: "일상에 AI를 활용하며\n새로운 도구와 가까워집니다.",
              },
              {
                n: "02",
                range: "기초 4~12주",
                title: "내 손으로 만들어 보기",
                desc: "생활형 웹도구를 만들고\n나만의 홈페이지를 배포합니다.",
              },
              {
                n: "03",
                range: "심화 1~6주",
                title: "데이터로 확장하기",
                desc: "로그인·데이터·보고서를 연결해\n프로그램의 쓰임을 넓힙니다.",
              },
              {
                n: "04",
                range: "심화 7~12주",
                title: "나의 서비스로 완성하기",
                desc: "AI와 자동화를 더하고\n프로젝트를 점검·발표합니다.",
              },
            ].map((step) => (
              <div className="journey-step" key={step.n}>
                <div className="step-line">
                  <span>{step.n}</span>
                </div>
                <small>{step.range}</small>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <Eyebrow>IDEAS INTO REALITY</Eyebrow>
            <h2>
              배움의 끝에는,
              <br />
              직접 만든 무언가가 있습니다.
            </h2>
          </div>
          <Link href="/projects" className="text-link">
            프로젝트 예시 보기 <Arrow />
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <Link
              className="project-card"
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <ProjectPreview kind={project.kind} />
              <div className="project-card-body">
                <div className="project-meta">
                  <span>{project.week}</span>
                  <span>교육용 예시</span>
                </div>
                <h3>
                  {project.title}
                  <Arrow diagonal />
                </h3>
                <p>{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="section-footnote">
          위 화면은 학습내용을 설명하기 위한 디자인 예시이며, 실제 수강생 성과나
          실행 가능한 도구가 아닙니다.
        </p>
      </section>
      <section className="approach-section">
        <div className="container approach-grid">
          <div>
            <Eyebrow>THE WAY WE LEARN</Eyebrow>
            <h2>
              혼자 막막하지 않게.
              <br />한 단계씩, 함께.
            </h2>
            <p>
              어려운 용어보다 쉬운 설명을,
              <br />
              기능의 개수보다 직접 확인한 완성을 중요하게 생각합니다.
            </p>
            <Link href="/about" className="text-link">
              우리의 교육 방식 <Arrow />
            </Link>
          </div>
          <div className="approach-list">
            {[
              {
                n: "01",
                title: "이해하고",
                desc: "어떤 문제를 해결할지, 쉬운 말로 함께 정리합니다.",
              },
              {
                n: "02",
                title: "직접 만들고",
                desc: "작은 기능부터 구현하며 나만의 결과물을 쌓습니다.",
              },
              {
                n: "03",
                title: "확인하고 나눕니다",
                desc: "실제로 작동하는지 점검하고, 다음 개선을 찾습니다.",
              },
            ].map((item) => (
              <div key={item.n}>
                <span>{item.n}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <Arrow diagonal />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section container home-faq">
        <div>
          <Eyebrow>BEFORE YOU BEGIN</Eyebrow>
          <h2>
            첫걸음 앞의 궁금함,
            <br />
            미리 답해 드릴게요.
          </h2>
          <Link href="/faq" className="text-link">
            모든 질문 보기 <Arrow />
          </Link>
        </div>
        <div className="faq-items">
          {[faqs[0], faqs[1], faqs[2], faqs[6]].map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <span className="accordion-sign" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <RecruitmentBanner />
    </>
  );
}
