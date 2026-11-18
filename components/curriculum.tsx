"use client";

import { useEffect, useState } from "react";
import type { CourseWeek, Track } from "@/content/courses";
import { LineIcon } from "./icons";

export function Curriculum({
  weeks,
  track,
}: {
  weeks: CourseWeek[];
  track: Track;
}) {
  const [expanded, setExpanded] = useState<Set<number>>(() => new Set([1]));
  useEffect(() => {
    function openHash() {
      const match = window.location.hash.match(/^#week-(\d+)$/);
      if (match) {
        const week = Number(match[1]);
        setExpanded((previous) => new Set([...previous, week]));
      }
    }
    openHash();
    window.addEventListener("hashchange", openHash);
    return () => window.removeEventListener("hashchange", openHash);
  }, []);
  return (
    <div className="curriculum">
      <div className="curriculum-toolbar">
        <span>총 12주 · 주 1회 180분</span>
        <div>
          <button
            onClick={() => setExpanded(new Set(weeks.map((week) => week.week)))}
          >
            모두 펼치기
          </button>
          <span>/</span>
          <button onClick={() => setExpanded(new Set())}>모두 닫기</button>
        </div>
      </div>
      {weeks.map((week) => (
        <div
          id={`week-${week.week}`}
          className={`week-item${expanded.has(week.week) ? " expanded" : ""}`}
          key={week.week}
        >
          <h3>
            <button
              aria-expanded={expanded.has(week.week)}
              aria-controls={`week-content-${week.week}`}
              onClick={() =>
                setExpanded((previous) => {
                  const next = new Set(previous);
                  if (next.has(week.week)) next.delete(week.week);
                  else next.add(week.week);
                  return next;
                })
              }
            >
              <span className="week-index">
                {String(week.week).padStart(2, "0")}
                <small>주차</small>
              </span>
              <span>{week.title}</span>
              <span className="accordion-sign" />
            </button>
          </h3>
          <div
            id={`week-content-${week.week}`}
            hidden={!expanded.has(week.week)}
            className="week-content"
          >
            <p>
              {track === "advanced" && week.week === 7
                ? "가상 통계와 모의 응답으로 AI 요약을 연습하고 숫자·근거·비용을 확인합니다. 실제 API 호출의 진행 범위는 확정 후 안내합니다."
                : week.summary}
            </p>
            <div>
              <LineIcon name="check" size={18} />
              <span>
                <strong>예상 산출물</strong>
                {week.deliverable}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
