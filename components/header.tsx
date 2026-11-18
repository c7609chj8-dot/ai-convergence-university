"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Arrow, BrandMark } from "./icons";

const navigation = [
  ["/about", "대학 소개"],
  ["/programs", "교육과정"],
  ["/roadmap", "24주 로드맵"],
  ["/projects", "프로젝트"],
  ["/faq", "자주 묻는 질문"],
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"

          onClick={() => setOpen(false)}
        >
          <BrandMark />
          <span>
            AI 융합대학<small>AI CONVERGENCE UNIVERSITY</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="주 메뉴">
          {navigation.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname.startsWith(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="button button-small header-cta" href="/schedule">
          모집안내 <Arrow />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <span className={open ? "menu-lines is-open" : "menu-lines"} />
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="모바일 주 메뉴"
        >
          {[...navigation, ["/schedule", "모집안내"]].map(([href, label]) => (
            <Link
              href={href}
              key={href}
              aria-current={pathname.startsWith(href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
              <Arrow />
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
