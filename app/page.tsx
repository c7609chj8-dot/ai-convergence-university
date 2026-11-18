import Image from "next/image";
import Link from "next/link";
import classroomHero from "@/public/images/university/classroom-learning-hero-v2.png";
import websiteImage from "@/public/images/university/website-final-tile-v3.png";
import dataImage from "@/public/images/university/personal-data-insights-v3.png";
import toolsImage from "@/public/images/university/everyday-digital-tools-v3.png";
import { Arrow } from "@/components/icons";
import { Eyebrow, ProgramCard, RecruitmentBanner } from "@/components/ui";
import { ProjectPreview } from "@/components/project-preview";
import { faqs, projects } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="studio-hero image-hero" aria-labelledby="hero-title">
        <div className="studio-field" aria-hidden="true">
          <svg
            className="studio-orbits"
            viewBox="0 0 1440 820"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <ellipse
              cx="725"
              cy="400"
              rx="540"
              ry="206"
              transform="rotate(-17 725 400)"
            />
            <ellipse
              cx="830"
              cy="445"
              rx="375"
              ry="286"
              transform="rotate(24 830 445)"
            />
            <path d="M120 600C450 340 930 740 1300 180M270 80C820 350 400 700 1260 680" />
          </svg>
          <figure className="studio-tile studio-tile-classroom image-hero-art">
            <Image
              src={classroomHero}
              alt=""
              fill
              preload
              placeholder="blur"
              sizes="(max-width: 600px) 72vw, (max-width: 900px) 50vw, 38vw"
            />
            <span>LEARN TOGETHER</span>
          </figure>
          <figure className="studio-tile studio-tile-website">
            <Image
              src={websiteImage}
              alt=""
              fill
              placeholder="blur"
              sizes="(max-width: 600px) 28vw, 15vw"
            />
            <span>BUILD YOUR IDEAS</span>
          </figure>
          <figure className="studio-tile studio-tile-data">
            <Image
              src={dataImage}
              alt=""
              fill
              placeholder="blur"
              sizes="(max-width: 600px) 24vw, 13vw"
            />
          </figure>
          <figure className="studio-tile studio-tile-tools">
            <Image
              src={toolsImage}
              alt=""
              fill
              placeholder="blur"
              sizes="(max-width: 600px) 25vw, 12vw"
            />
          </figure>
          <span className="studio-cross cross-a">+</span>
          <span className="studio-cross cross-b">+</span>
        </div>
        <div className="container studio-hero-inner">
          <div className="studio-hero-meta">
            <span>AI CONVERGENCE UNIVERSITY</span>
            <span>24 WEEKS / YOUR NEXT CHAPTER</span>
          </div>
          <h1 id="hero-title">
            <span>AI를 배우고,</span>
            <span>
              가능성을 만듭니다<span className="studio-period">.</span>
            </span>
          </h1>
          <div className="studio-hero-bottom">
            <div className="studio-hero-intro">
              <p>
                낯선 기술을, 나의 일상으로.
                <br />
                기초 12주부터 심화 12주까지,
                <br />
                직접 만들며 배우는 성인 AI 교육.
              </p>
              <div className="studio-hero-actions">
                <Link href="/programs" className="studio-main-link">
                  교육과정 살펴보기 <Arrow diagonal />
                </Link>
                <Link href="/roadmap" className="studio-secondary-link">
                  24주 로드맵 <Arrow />
                </Link>
              </div>
            </div>
            <div className="studio-scroll">
              <span className="hero-image-label">
                AI 생성 교육 콘셉트 이미지
              </span>
              <a href="#learning-programs">
                아래로 둘러보기 <span>↓</span>
              </a>
            </div>
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
      <section
        className="section container studio-programs"
        id="learning-programs"
      >
        <div className="section-heading">
          <div>
            <Eyebrow>LEARNING PROGRAMS</Eyebrow>
            <h2>
              처음의 호기심을,
              <br />
              매일 쓰는 능력으로.
            </h2>
          </div>
          <p>
            AI를 처음 만나는 분도, 한 걸음 더 나아가고 싶은 분도.
            <br className="desktop-only" /> 지금 나에게 맞는 과정에서
            시작하세요.
          </p>
        </div>
        <div className="studio-section-index">
          <span>(교육과정)</span>
          <span>01 — 02</span>
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
            <figure className="approach-visual">
              <Image
                src={websiteImage}
                alt="홈페이지의 마지막 콘텐츠 타일을 배치하며 직접 완성하는 경험을 표현한 일러스트"
                fill
                placeholder="blur"
                sizes="(max-width: 900px) 100vw, 550px"
              />
            </figure>
            <p className="visual-caption">
              AI 생성 이미지 · 직접 만들며 배우는 경험
            </p>
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
