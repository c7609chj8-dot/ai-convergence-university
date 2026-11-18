import type { Metadata } from "next";
import { PageIntro } from "@/components/ui";

export const metadata: Metadata = { title: "이용 안내" };

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="SITE INFORMATION"
        title="홈페이지 이용 안내"
        description="교육과정 소개 사이트의 현재 제공 범위와 안내사항입니다."
      />
      <section className="container page-section narrow prose-panel">
        <h2>교육과정 소개 단계입니다.</h2>
        <p>
          현재 제공하는 내용은 교육과정 편성과 학습목표 안내입니다.
          개강일·장소·강사·교육비·모집정원·환불·수료기준은 확정 전이며,
          신청·결제 기능을 제공하지 않습니다.
        </p>
        <h2>교육 브랜드와 성과 안내</h2>
        <p>
          ‘AI 융합대학’은 교육 브랜드명으로, 정규 대학·학위·학점·공식 제휴를
          의미하지 않습니다. 예상 산출물은 학습 목표이며 개인별 성취나 취업을
          보장하지 않습니다.
        </p>
        <h2>프로젝트와 정식 약관</h2>
        <p>
          교육용 프로젝트 이미지는 설명을 위한 디자인 예시입니다. 실제 수강생
          작품과 구분하여 안내합니다. 서비스 이용약관과 신청·환불규정은 실제
          운영방식에 맞춰 확정 후 게시할 예정입니다.
        </p>
      </section>
    </>
  );
}
