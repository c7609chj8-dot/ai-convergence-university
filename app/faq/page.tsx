import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { Arrow } from "@/components/icons";
import { PageIntro } from "@/components/ui";

export const metadata: Metadata = { title: "자주 묻는 질문" };

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        title="첫걸음이 조금 더 가벼워지도록."
        description="학습 준비부터 교육과정, 모집 안내까지. 궁금한 내용을 먼저 확인해 보세요."
      />
      <section className="container page-section narrow">
        <FaqList />
        <div className="subtle-note">
          <h2>더 알아보고 싶으신가요?</h2>
          <p>공식 문의처와 모집 일정은 준비가 완료되는 대로 안내합니다.</p>
          <Link href="/contact" className="text-link">
            문의안내 확인 <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
