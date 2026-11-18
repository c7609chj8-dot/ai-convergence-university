import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui";

export const metadata: Metadata = { title: "개인정보 안내" };

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="PRIVACY INFORMATION"
        title="개인정보 처리 안내 준비 현황"
        description="현재 홈페이지의 공개 범위와 개인정보 접수 준비 상태를 안내합니다."
      />
      <section className="container page-section narrow prose-panel">
        <span className="status-label">
          <span />
          정식 처리방침 확정 전
        </span>
        <h2>현재 신청·문의 양식을 운영하지 않습니다.</h2>
        <p>
          이 홈페이지에는 이름·연락처를 입력하는 신청·문의 양식이 없습니다.
          개인정보 접수, 결제, 신청자 계정을 제공하지 않습니다.
        </p>
        <h2>실제 접수를 시작하기 전</h2>
        <p>
          운영주체·개인정보처리자, 수집 항목과 목적, 보유기간, 파기·권리 행사
          경로, 서비스 위탁 등 실제 운영체계에 맞는 처리방침과 수집·이용
          동의문을 확정하여 게시해야 합니다.
        </p>
        <p>
          호스팅 서비스의 접속 로그 등 기술적 처리 내역도 실제 배포환경을
          확인하여 반영할 예정입니다. 이 안내문은 확정된 개인정보처리방침을
          대신하지 않습니다.
        </p>
        <Link className="text-link" href="/contact">
          공식 문의처 준비 현황 보기
        </Link>
      </section>
    </>
  );
}
