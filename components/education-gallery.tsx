import Image from "next/image";
import { educationPhotos } from "@/content/education-photos";
import { Eyebrow } from "@/components/ui";

export function EducationGallery() {
  return (
    <section
      className="section container education-gallery"
      aria-labelledby="education-gallery-title"
    >
      <div className="education-gallery-heading">
        <div>
          <Eyebrow>LEARNING SCENES</Eyebrow>
          <h2 id="education-gallery-title">배움이 이루어지는 현장.</h2>
        </div>
        <p>
          설명을 듣고, 사례를 살펴보고,
          <br />
          함께 생각하는 교육의 순간을 담았습니다.
        </p>
      </div>
      <p className="education-gallery-note">
        제공된 교육 현장 사진입니다. 안전교육 등 다양한 수업 장면으로, 안내 중인
        AI 과정의 실제 수업 사진을 의미하지 않습니다.
      </p>
      <div className="education-photo-grid">
        {educationPhotos.map((photo, index) => (
          <figure key={photo.title}>
            <div className="education-photo-frame">
              <Image
                src={photo.image}
                alt={photo.description}
                fill
                placeholder="blur"
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 45vw"
                style={{ objectPosition: photo.position }}
              />
            </div>
            <figcaption>
              <span>0{index + 1}</span>
              <div>
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
