"use client";

import { useState } from "react";
import { faqs } from "@/content/site";

const categories = ["전체", ...new Set(faqs.map((faq) => faq.category))];

export function FaqList() {
  const [category, setCategory] = useState("전체");
  const [query, setQuery] = useState("");
  const filtered = faqs.filter(
    (faq) =>
      (category === "전체" || faq.category === category) &&
      `${faq.question} ${faq.answer}`.includes(query.trim()),
  );
  return (
    <div className="faq-browser">
      <label className="search-box">
        <span>질문 검색</span>
        <input
          type="search"
          placeholder="궁금한 내용을 찾아보세요"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="10.5"
            cy="10.5"
            r="6.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="m16 16 5 5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </label>
      <div className="filter-tabs" aria-label="질문 분류">
        {categories.map((item) => (
          <button
            key={item}
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="result-count" aria-live="polite">
        총 {filtered.length}개의 질문
      </p>
      <div className="faq-items">
        {filtered.map((faq) => (
          <details key={faq.question}>
            <summary>
              <span className="faq-q">Q</span>
              <span>{faq.question}</span>
              <span className="accordion-sign" />
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="no-results">
          <h2>검색 결과가 없습니다.</h2>
          <p>다른 단어로 검색하거나 전체 질문을 확인해 주세요.</p>
          <button
            className="button button-outline"
            onClick={() => {
              setQuery("");
              setCategory("전체");
            }}
          >
            전체 질문 보기
          </button>
        </div>
      ) : null}
    </div>
  );
}
