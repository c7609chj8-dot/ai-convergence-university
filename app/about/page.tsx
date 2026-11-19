import type { Metadata } from "next";
import { LineIcon } from "@/components/icons";
import { Eyebrow, PageIntro, RecruitmentBanner } from "@/components/ui";
import { EducationGallery } from "@/components/education-gallery";

export const metadata: Metadata = { title: "대학 소개" };

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT OUR LEARNING"
        title="배움은, 새로운 일상을 만드는 일."
        description="AI 융합대학은 성인학습자가 AI를 이해하고 생활·취미·업무에 필요한 작은 프로그램을 직접 만들어 보는 교육을 지향합니다."
      />
      <section className="container page-section">
        <div className="about-statement">
          <span className="statement-quote">“</span>
          <h2>
            기술을 아는 것에서,
            <br />
            <span>기술로 무언가를 만드는 것으로.</span>
          </h2>
          <p>
            빠르게 바뀌는 도구를 모두 외울 필요는 없습니다.
            <br className="desktop-only" /> 내게 필요한 문제를 찾고, AI와 함께
            만들고, 실제로 작동하는지 확인하는 경험을 쌓습니다.
          </p>
        </div>
        <div className="values-grid">
          {[
            {
              icon: "spark" as const,
              title: "쉬운 출발",
              desc: "낯선 기술어는 일상의 언어로 풀고, 작은 성공부터 차근차근 연결합니다.",
            },
            {
              icon: "code" as const,
              title: "실제로 만드는 배움",
              desc: "생활형 웹도구와 개인 프로젝트를 만들며 설명과 실습을 연결합니다.",
            },
            {
              icon: "check" as const,
              title: "확인하는 습관",
              desc: "AI의 답을 그대로 믿기보다 사실·기능·개인정보·비용을 직접 확인합니다.",
            },
          ].map((value) => (
            <article key={value.title}>
              <LineIcon name={value.icon} size={28} />
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </article>
          ))}
        </div>
        <div className="about-method">
          <Eyebrow>OUR METHOD</Eyebrow>
          <h2>설명 → 실습 → 검수 → 공유</h2>
          <p>
            주 1회 180분, 휴식 10분을 포함한 대면 실습을 계획하고 있습니다. 강사
            시연과 정상 예제, 필수·선택 기능의 구분으로 학습 속도 차이를
            고려합니다. 결과물의 기능 개수보다 확인한 완성도와 다음 개선을
            중요하게 생각합니다.
          </p>
        </div>
        <div className="info-panel">
          <LineIcon name="book" />
          <div>
            <h3>브랜드와 운영정보 안내</h3>
            <p>
              ‘AI 융합대학’은 이 교육과정의 브랜드명입니다. 정규 대학·학위·학점
              또는 다른 대학과의 공식 제휴를 의미하지 않습니다. 실제 운영주체와
              확정된 학사·모집정보는 공개 전 확인하여 안내합니다.
            </p>
          </div>
        </div>
      </section>
      <EducationGallery />
      <RecruitmentBanner />
    </>
  );
}
