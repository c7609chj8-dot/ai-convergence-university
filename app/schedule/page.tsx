import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, LineIcon } from "@/components/icons";
import { PageIntro, PreparationState } from "@/components/ui";

export const metadata: Metadata = { title: "교육일정·모집안내" };

export default function SchedulePage() {
  return (
    <>
      <PageIntro
        eyebrow="SCHEDULE & ADMISSION"
        title="다음 배움의 시작을 준비합니다."
        description="교육과정은 먼저 살펴보실 수 있습니다. 실제 개강일과 모집에 필요한 정보는 확정 후 안내합니다."
      />
      <section className="container page-section">
        <PreparationState
          title="모집 일정 준비 중입니다."
          description="현재 확정된 모집회차가 없습니다. 신청·결제·개인정보 접수를 받지 않습니다."
        >
          <Link href="/programs" className="button">
            교육과정 먼저 보기 <Arrow />
          </Link>
        </PreparationState>
        <div className="schedule-info-grid">
          {[
            { label: "교육 구성", value: "기초 12주 + 심화 12주" },
            { label: "수업 편성", value: "주 1회 180분 · 휴식 포함" },
            { label: "개강일·장소", value: "확정 후 안내" },
            { label: "교육비·모집 정원", value: "확정 후 안내" },
          ].map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
        <div className="info-panel">
          <LineIcon name="calendar" />
          <div>
            <h2>모집이 시작되면 확인할 수 있어요.</h2>
            <p>
              접수기간, 실제 교육일정, 장소, 교육비와 포함 항목, 정원, 신청
              자격과 접수 절차를 함께 안내할 예정입니다. 기초·심화 별도 모집
              또는 통합 모집 방식도 함께 확정합니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
