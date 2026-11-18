import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { PageIntro, PreparationState } from "@/components/ui";

export const metadata: Metadata = { title: "신청 안내" };

export default function ApplyPage() {
  return (
    <>
      <PageIntro
        eyebrow="APPLICATION GUIDE"
        title="신청 전, 모집안내를 확인해 주세요."
        description="실제 신청은 모집회차와 개인정보 처리 안내가 확정된 후 제공할 예정입니다."
      />
      <section className="container page-section">
        <PreparationState
          title="지금은 신청을 받지 않습니다."
          description="이 페이지는 신청 양식이나 접수 기능을 제공하지 않습니다. 이름·연락처 등 개인정보를 입력하실 필요가 없습니다."
        >
          <Link href="/schedule" className="button">
            모집안내 보기 <Arrow />
          </Link>
        </PreparationState>
      </section>
    </>
  );
}
