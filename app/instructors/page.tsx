import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { PageIntro, PreparationState } from "@/components/ui";

export const metadata: Metadata = { title: "강사진" };

export default function InstructorsPage() {
  return (
    <>
      <PageIntro
        eyebrow="LEARN TOGETHER"
        title="배움의 과정을 함께할 사람들."
        description="강사진의 이름·약력·사진은 실제 담당과 공개 권한을 확인한 후 소개합니다."
      />
      <section className="container page-section">
        <PreparationState
          title="강사진 소개를 준비하고 있습니다."
          description="담당강사가 확정되면 검증된 경력과 함께 안내합니다. 우선 교육과정과 수업 방식을 확인해 주세요."
        >
          <Link href="/about" className="button">
            교육 방식 알아보기 <Arrow />
          </Link>
        </PreparationState>
      </section>
    </>
  );
}
