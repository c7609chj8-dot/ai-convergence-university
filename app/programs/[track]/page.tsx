import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { courses, type Track } from "@/content/courses";
import { Curriculum } from "@/components/curriculum";
import { Arrow, LineIcon } from "@/components/icons";
import { Eyebrow, RecruitmentBanner } from "@/components/ui";

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ track: "basic" }, { track: "advanced" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track } = await params;
  return {
    title: track in courses ? courses[track as Track].label : "교육과정",
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track } = await params;
  if (track !== "basic" && track !== "advanced") notFound();
  const course = courses[track];
  return (
    <>
      <section className={`course-hero ${track}`}>
        <div className="container">
          <Link className="breadcrumb" href="/programs">
            교육과정 <span>/</span> {course.label}
          </Link>
          <Eyebrow>{course.english} · 12 WEEKS</Eyebrow>
          <h1>
            {course.label}
            <span>{course.headline}</span>
          </h1>
          <p>{course.description}</p>
          <div className="course-hero-meta">
            <span>
              <LineIcon name="calendar" size={18} />
              12주 · 주 1회
            </span>
            <span>
              <LineIcon name="clock" size={18} />
              매회 180분 · 휴식 포함
            </span>
            <span>
              <LineIcon name="book" size={18} />
              실습 중심 대면 교육
            </span>
          </div>
        </div>
      </section>
      <div className="container course-content-grid">
        <div>
          <section className="course-overview">
            <h2>이런 분과 함께합니다.</h2>
            <p>{course.audience}</p>
            <div className="prerequisite">
              <strong>시작 전 준비</strong>
              <p>
                {course.prerequisite}
                {track === "advanced"
                  ? ". 선행 준비가 부족하면 강사 시작 예제를 활용하는 방식이 계획되어 있습니다."
                  : ". 코딩 경험은 요구하지 않습니다."}
              </p>
            </div>
            <h3>함께 사용할 도구</h3>
            <div className="tool-tags">
              {course.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </section>
          <section className="curriculum-section">
            <Eyebrow>WEEK BY WEEK</Eyebrow>
            <h2>12주, 이렇게 배웁니다.</h2>
            <p className="muted">
              주차를 선택해 주요 실습과 예상 산출물을 확인하세요.
            </p>
            <Curriculum weeks={course.weeks} track={track} />
            <p className="section-footnote">
              산출물은 학습 목표입니다. 개인별 완성 범위는 준비 수준과 선택
              기능에 따라 달라질 수 있습니다.
            </p>
            {track === "advanced" ? (
              <div className="info-panel">
                <LineIcon name="layers" />
                <div>
                  <h3>나에게 맞는 완성 범위</h3>
                  <p>
                    A형: 개인 데이터 앱 · B형: 보고서·자동 집계 확장 · C형:
                    일정·날씨 업무비서. 기능의 개수보다 직접 검증한 완성도를
                    중요하게 생각합니다.
                  </p>
                </div>
              </div>
            ) : null}
          </section>
        </div>
        <aside className="course-aside">
          <span className="status-label">
            <span />
            모집 일정 준비 중
          </span>
          <h2>{course.label}</h2>
          <dl>
            <div>
              <dt>교육기간</dt>
              <dd>12주</dd>
            </div>
            <div>
              <dt>편성시간</dt>
              <dd>36시간</dd>
            </div>
            <div>
              <dt>교육활동</dt>
              <dd>34시간 · 휴식 제외</dd>
            </div>
            <div>
              <dt>교육비·장소</dt>
              <dd>추후 안내</dd>
            </div>
          </dl>
          <Link href="/schedule" className="button">
            모집안내 확인 <Arrow />
          </Link>
          <p>
            현재 신청을 받지 않습니다.
            <br />
            정확한 일정은 확정 후 안내합니다.
          </p>
          <Link
            className="text-link"
            href={track === "basic" ? "/programs/advanced" : "/programs/basic"}
          >
            {track === "basic"
              ? "다음 단계, 심화과정"
              : "기초과정 먼저 살펴보기"}
            <Arrow />
          </Link>
        </aside>
      </div>
      <RecruitmentBanner />
    </>
  );
}
