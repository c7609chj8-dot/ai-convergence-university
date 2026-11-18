import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/site";
import { Arrow } from "@/components/icons";
import { ProjectPreview } from "@/components/project-preview";
import { PageIntro, RecruitmentBanner } from "@/components/ui";

export const metadata: Metadata = { title: "프로젝트" };

export default function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="MADE THROUGH LEARNING"
        title="작은 아이디어가, 쓸모 있는 도구로."
        description="무엇을 만들 수 있을지 궁금한가요? 교육과정에서 다루는 프로젝트의 모습과 예상 기능을 살펴보세요."
      />
      <section className="container page-section">
        <div className="gallery-notice">
          <span className="pill">교육용 예시</span>
          <p>
            아래는 학습내용을 설명하는 디자인 예시입니다. 실제 수강생
            작품·후기나 실행 가능한 도구가 아닙니다.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <Link
              className="project-card"
              href={`/projects/${project.slug}`}
              key={project.slug}
            >
              <ProjectPreview kind={project.kind} />
              <div className="project-card-body">
                <div className="project-meta">
                  <span>{project.week}</span>
                  <span>교육용 예시</span>
                </div>
                <h2>
                  {project.title}
                  <Arrow diagonal />
                </h2>
                <p>{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="subtle-note">
          <h2>실제 수강생 프로젝트는 준비 중입니다.</h2>
          <p>학습자의 공개동의와 권리 확인을 마친 작품만 추후 소개합니다.</p>
        </div>
      </section>
      <RecruitmentBanner />
    </>
  );
}
