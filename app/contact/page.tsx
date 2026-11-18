import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { PageIntro, PreparationState } from "@/components/ui";

export const metadata: Metadata = { title: "문의안내" };

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="HERE TO HELP"
        title="궁금함에서, 다음 걸음으로."
        description="공식 문의처와 교육장소는 운영정보가 확정된 후 안내합니다."
      />
      <section className="container page-section">
        <PreparationState
          title="공식 문의처를 준비하고 있습니다."
          description="아직 전화·이메일·주소가 확정되지 않았습니다. 현재 문의 접수 양식은 운영하지 않습니다."
        >
          <Link className="button" href="/faq">
            자주 묻는 질문 확인 <Arrow />
          </Link>
        </PreparationState>
        <div className="comparison-grid">
          <div>
            <h2>수업이 궁금하다면</h2>
            <p>
              학습 대상, 선수조건, 24주 주차별 실습과 예상 결과물을 먼저 확인해
              보세요.
            </p>
            <Link className="text-link" href="/programs">
              교육과정 보기 <Arrow />
            </Link>
          </div>
          <div>
            <h2>모집이 궁금하다면</h2>
            <p>
              접수기간과 수강료, 장소 등 확정된 정보는 교육일정 페이지에서
              안내합니다.
            </p>
            <Link className="text-link" href="/schedule">
              모집안내 보기 <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
