"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="container not-found">
      <span className="error-code">잠시만요</span>
      <h1>화면을 불러오지 못했습니다.</h1>
      <p>일시적인 오류일 수 있습니다. 다시 시도해 주세요.</p>
      <button className="button" onClick={reset}>
        다시 불러오기
      </button>
    </section>
  );
}
