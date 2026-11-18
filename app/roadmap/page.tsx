import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/content/courses";
import { Arrow } from "@/components/icons";
import { PageIntro, RecruitmentBanner } from "@/components/ui";

export const metadata: Metadata = { title: "24주 로드맵" };

export default function RoadmapPage() {
  return (
    <>
      <PageIntro
        eyebrow="24 WEEKS, ONE JOURNEY"
        title="오늘의 호기심이, 내일의 결과물로."
        description="AI 첫걸음부터 나만의 프로그램까지. 기초 12주와 심화 12주를 하나의 흐름으로 살펴보세요."
      />
      <section className="container page-section roadmap">
        <div className="roadmap-summary">
          <strong>
            기초 12주 <span>+</span> 심화 12주
          </strong>
          <p>총 편성 72시간 · 휴식 제외 교육활동 68시간</p>
        </div>
        {(["basic", "advanced"] as const).map((track) => (
          <section className={`roadmap-track ${track}`} key={track}>
            <div className="roadmap-track-heading">
              <span>{courses[track].number}</span>
              <div>
                <small>{courses[track].english}</small>
                <h2>{courses[track].label}</h2>
                <p>{courses[track].headline}</p>
              </div>
              <Link href={`/programs/${track}`} className="text-link">
                과정 상세 <Arrow />
              </Link>
            </div>
            <div className="roadmap-grid">
              {courses[track].weeks.map((week) => (
                <Link
                  href={`/programs/${track}#week-${week.week}`}
                  className="roadmap-card"
                  key={week.week}
                >
                  <span className="tiny-label">
                    {String(week.globalWeek).padStart(2, "0")} / 24
                  </span>
                  <small>
                    {courses[track].label} {week.week}주차
                  </small>
                  <h3>{week.title}</h3>
                  <p>{week.deliverable}</p>
                  <Arrow diagonal />
                </Link>
              ))}
            </div>
          </section>
        ))}
        <p className="section-footnote">
          연속 24주 개설 또는 별도 모집 여부와 실제 수업 일정은 확정 후
          안내합니다.
        </p>
      </section>
      <RecruitmentBanner />
    </>
  );
}
