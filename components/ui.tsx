import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow, BrandMark } from "./icons";
import { courses, type Track } from "@/content/courses";

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`eyebrow${light ? " light" : ""}`}>
      <span />
      {children}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-intro container">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export function ProgramCard({ track }: { track: Track }) {
  const course = courses[track];
  return (
    <Link href={`/programs/${track}`} className={`program-card ${track}`}>
      <div className="program-card-top">
        <span className="course-number">{course.number}</span>
        <span className="pill">12주 · 편성 36시간</span>
      </div>
      <div className="program-card-title">
        <div>
          <span className="tiny-label">{course.english}</span>
          <h3>{course.label}</h3>
        </div>
        <span className="round-arrow">
          <Arrow diagonal />
        </span>
      </div>
      <p>
        {track === "basic"
          ? "AI가 낯설어도 괜찮습니다. 작은 도구부터, 나만의 홈페이지까지."
          : "데이터와 AI를 연결합니다. 나의 프로그램을, 더 쓸모 있게."}
      </p>
      <div className="course-tags">
        {(track === "basic"
          ? ["AI 첫걸음", "생활형 웹도구", "홈페이지 배포"]
          : ["데이터·로그인", "보고서·자동화", "AI 업무비서"]
        ).map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="program-card-bottom">
        <span>
          {track === "basic"
            ? "코딩 경험 없는 분부터"
            : "기초 프로젝트 경험이 있는 분"}
        </span>
        <strong>
          과정 살펴보기 <Arrow />
        </strong>
      </div>
    </Link>
  );
}

export function RecruitmentBanner() {
  return (
    <section className="recruitment-banner container">
      <div>
        <Eyebrow light>YOUR NEXT CHAPTER</Eyebrow>
        <h2>
          다음 배움의 시작,
          <br className="mobile-only" /> 함께 준비합니다.
        </h2>
        <p>모집 일정이 확정되면 이곳에서 안내해 드립니다.</p>
      </div>
      <Link href="/schedule" className="button button-mint">
        모집안내 확인하기 <Arrow />
      </Link>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Link className="brand footer-brand" href="/">
              <BrandMark small />
              <span>AI 융합대학</span>
            </Link>
            <p>
              배움이 가능성이 되고,
              <br />
              가능성이 나의 일상이 되는 곳.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <strong>배움의 시작</strong>
              <Link href="/about">대학 소개</Link>
              <Link href="/programs">교육과정</Link>
              <Link href="/roadmap">24주 로드맵</Link>
            </div>
            <div>
              <strong>함께 알아보기</strong>
              <Link href="/schedule">교육일정</Link>
              <Link href="/instructors">강사진</Link>
              <Link href="/notice">공지사항</Link>
            </div>
            <div>
              <strong>도움이 필요할 때</strong>
              <Link href="/faq">자주 묻는 질문</Link>
              <Link href="/contact">문의안내</Link>
              <Link href="/projects">프로젝트</Link>
            </div>
          </div>
        </div>
        <div className="footer-note">
          현재 교육과정 안내를 준비하고 있습니다. 실제 모집
          일정·교육비·운영정보는 확정 후 안내합니다.
          <br />
          ‘AI 융합대학’은 교육 브랜드명이며, 학위·학점 또는 타 대학과의 공식
          제휴를 의미하지 않습니다.
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} AI 융합대학</span>
          <div>
            <Link href="/privacy">개인정보 안내</Link>
            <Link href="/terms">이용 안내</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PreparationState({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="preparation-state">
      <span className="status-label">
        <span />
        안내 준비 중
      </span>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
}
