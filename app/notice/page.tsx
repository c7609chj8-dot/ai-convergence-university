import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { PageIntro, PreparationState } from "@/components/ui";

export const metadata: Metadata = { title: "공지사항" };

export default function NoticePage() {
  return (
    <>
      <PageIntro
        eyebrow="NEWS & NOTICES"
        title="새로운 소식을 전할 공간."
        description="모집과 교육 운영에 관한 확정된 소식을 이곳에서 안내합니다."
      />
      <section className="container page-section">
        <PreparationState
          title="아직 등록된 공지사항이 없습니다."
          description="게시할 소식을 준비하고 있습니다. 현재 교육과정은 미리 살펴보실 수 있습니다."
        >
          <Link href="/programs" className="button">
            교육과정 살펴보기 <Arrow />
          </Link>
        </PreparationState>
      </section>
    </>
  );
}
