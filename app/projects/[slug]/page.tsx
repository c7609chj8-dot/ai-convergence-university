import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";
import { Arrow, LineIcon } from "@/components/icons";
import { ProjectPreview } from "@/components/project-preview";
import { PageIntro } from "@/components/ui";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title:
      projects.find((project) => project.slug === slug)?.title ?? "프로젝트",
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <>
      <PageIntro
        eyebrow={`EDUCATIONAL EXAMPLE · ${project.week}`}
        title={project.title}
        description={project.summary}
      />
      <section className="container page-section project-detail">
        <ProjectPreview kind={project.kind} large />
        <div>
          <span className="pill">실행 기능 없는 디자인 예시</span>
          <h2>이런 기능을 만들어 봅니다.</h2>
          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>
                <LineIcon name="check" size={18} />
                {feature}
              </li>
            ))}
          </ul>
          <p>{project.note}</p>
          <p className="muted">
            화면 속 URL·버튼·문서는 설명용 예시입니다. 입력이나 다운로드 기능을
            제공하지 않습니다.
          </p>
          <Link
            href={
              project.category === "기초과정"
                ? "/programs/basic"
                : "/programs/advanced"
            }
            className="button"
          >
            관련 교육과정 보기 <Arrow />
          </Link>
          <Link href="/projects" className="text-link">
            프로젝트 목록으로 <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
