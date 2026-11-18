import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, ProgramCard, RecruitmentBanner } from "@/components/ui";
import { Arrow, LineIcon } from "@/components/icons";

export const metadata: Metadata = { title: "교육과정" };

export default function ProgramsPage() {
  return (
    <>
      <PageIntro
        eyebrow="LEARNING PROGRAMS"
        title="지금의 나에게 맞는 시작."
        description="처음 배우는 기초부터, 나만의 서비스를 확장하는 심화까지. 직접 만들고 확인하며 한 단계씩 나아갑니다."
      />
      <section className="container page-section">
        <div className="program-grid">
          <ProgramCard track="basic" />
          <ProgramCard track="advanced" />
        </div>
        <div className="info-panel">
          <LineIcon name="clock" />
          <div>
            <h2>하나의 여정, 두 개의 단계</h2>
            <p>
              기초 12주 + 심화 12주 · 주 1회 180분(휴식 10분 포함)
              <br />총 편성 72시간 / 휴식 제외 교육활동 68시간. 실제 개설 일정과
              모집 방식은 확정 후 안내합니다.
            </p>
          </div>
        </div>
        <div className="section-heading compact">
          <h2>어디에서 시작하면 좋을까요?</h2>
        </div>
        <div className="comparison-grid">
          <div>
            <span className="tiny-label">처음이라면</span>
            <h3>기초과정에서 시작하세요.</h3>
            <p>
              AI와 코딩이 낯설어도, 기본 PC 사용이 가능하다면 작은 도구를 함께
              만들며 시작할 수 있습니다.
            </p>
            <Link className="text-link" href="/programs/basic">
              기초과정 자세히 <Arrow />
            </Link>
          </div>
          <div>
            <span className="tiny-label">경험이 있다면</span>
            <h3>심화과정으로 연결하세요.</h3>
            <p>
              실행 가능한 웹프로젝트와 GitHub·배포 기초를 바탕으로
              데이터·인증·자동화 기능을 연결합니다.
            </p>
            <Link className="text-link" href="/programs/advanced">
              심화과정 자세히 <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <RecruitmentBanner />
    </>
  );
}
