import Image from "next/image";
import assistantImage from "@/public/images/university/05-human-reviewed-automation-v2.png";

export function ProjectPreview({
  kind,
  large = false,
}: {
  kind: "qr" | "pdf" | "assistant";
  large?: boolean;
}) {
  if (kind === "assistant") {
    return (
      <div
        className={`project-preview assistant image-preview${large ? " large" : ""}`}
        aria-hidden="true"
      >
        <Image
          src={assistantImage}
          alt=""
          fill
          placeholder="blur"
          sizes={
            large
              ? "(max-width: 900px) 100vw, 640px"
              : "(max-width: 600px) 100vw, 420px"
          }
        />
      </div>
    );
  }
  return (
    <div
      className={`project-preview ${kind}${large ? " large" : ""}`}
      aria-hidden="true"
    >
      {kind === "qr" ? (
        <div className="mini-qr-app">
          <div className="mini-label">나만의 QR 만들기</div>
          <div className="mini-input">
            https://example.com <span>↗</span>
          </div>
          <div className="qr-layout">
            <svg viewBox="0 0 90 90" width="90" height="90" fill="currentColor">
              <path d="M4 4h28v28H4V4Zm5 5v18h18V9H9Zm5 5h8v8h-8v-8ZM58 4h28v28H58V4Zm5 5v18h18V9H63Zm5 5h8v8h-8v-8ZM4 58h28v28H4V58Zm5 5v18h18V63H9Zm5 5h8v8h-8v-8ZM40 4h9v13h-9ZM37 23h13v9H37ZM4 40h14v9H4ZM24 37h8v14h-8ZM37 40h13v13H37ZM57 40h9v9h-9ZM72 40h14v9H72ZM40 62h9v24h-9ZM54 55h14v9H54ZM59 72h9v14h-9ZM77 57h9v14h-9ZM73 78h13v8H73Z" />
            </svg>
            <div>
              <span className="mini-success">스캔으로 확인하는</span>
              <strong>
                작은 아이디어,
                <br />
                간편한 연결.
              </strong>
              <span className="mini-download">PNG 다운로드</span>
            </div>
          </div>
        </div>
      ) : null}
      {kind === "pdf" ? (
        <div className="pdf-scene">
          <div className="file-card image-file">
            <span>IMAGE</span>
            <svg viewBox="0 0 64 52" width="64" height="52">
              <rect x="1" y="1" width="62" height="50" rx="5" fill="#edf0e7" />
              <circle cx="44" cy="16" r="6" fill="#c2cdb3" />
              <path d="m1 44 18-21 15 16 9-9 20 22H1Z" fill="#91a581" />
            </svg>
            <small>my-image.png</small>
          </div>
          <span className="conversion-arrow">→</span>
          <div className="file-card pdf-file">
            <span>PDF</span>
            <div className="pdf-lines">
              <i />
              <i />
              <i />
            </div>
            <small>나의 첫 문서.pdf</small>
          </div>
        </div>
      ) : null}
    </div>
  );
}
