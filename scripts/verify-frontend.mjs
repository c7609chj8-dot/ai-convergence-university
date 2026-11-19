import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const baseURL = "http://127.0.0.1:3000";
const routes = [
  "/",
  "/about",
  "/programs",
  "/programs/basic",
  "/programs/advanced",
  "/roadmap",
  "/projects",
  "/projects/qr-maker",
  "/projects/image-to-pdf",
  "/projects/daily-assistant",
  "/faq",
  "/schedule",
  "/apply",
  "/contact",
  "/instructors",
  "/notice",
  "/privacy",
  "/terms",
];
// Windows uses installed Edge; other systems use Playwright's isolated Chromium.
const browser = await chromium.launch({
  ...(process.platform === "win32" ? { channel: "msedge" } : {}),
  headless: true,
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  locale: "ko-KR",
  reducedMotion: "reduce",
});
const page = await context.newPage();
const errors = [];
const results = {
  routes: [],
  responsive: [],
  interactions: [],
  accessibility: [],
  errors,
};
page.on("pageerror", (error) => errors.push(error.message));
await mkdir("artifacts", { recursive: true });

try {
  for (const route of routes) {
    const response = await page.goto(baseURL + route);
    assert.equal(response.status(), 200, route);
    assert.equal(await page.locator("h1").count(), 1, `${route}: one h1`);
    assert.ok(await page.title(), `${route}: title`);
    const links = await page
      .locator("a")
      .evaluateAll((elements) =>
        elements
          .map((element) => element.getAttribute("href"))
          .filter((href) => href?.startsWith("/")),
      );
    for (const href of links)
      assert.ok(
        routes.includes(href.split("#")[0]),
        `${route}: unknown link ${href}`,
      );
    results.routes.push(route);
  }

  await page.goto(baseURL + "/programs/basic");
  assert.equal(await page.locator(".week-item").count(), 12);
  await page.getByRole("button", { name: "모두 펼치기" }).click();
  assert.equal(await page.locator(".week-content:visible").count(), 12);
  await page.getByRole("button", { name: "모두 닫기" }).click();
  assert.equal(await page.locator(".week-content:visible").count(), 0);
  await page.goto(baseURL + "/roadmap");
  assert.equal(await page.locator(".roadmap-card").count(), 24);
  await page.locator('a[href="/programs/advanced#week-6"]').click();
  await page.locator("#week-content-6").waitFor({ state: "visible" });
  results.interactions.push(
    "12주 펼치기/닫기, 24주 로드맵, 심화 6주 앵커 자동 펼치기",
  );

  await page.goto(baseURL + "/faq");
  await page.getByRole("button", { name: "신청 안내", exact: true }).click();
  assert.equal(await page.locator(".faq-items details").count(), 3);
  await page.getByRole("button", { name: "전체", exact: true }).click();
  await page.getByRole("searchbox").fill("기기대여검색결과없음");
  assert.equal(await page.locator(".faq-items details").count(), 0);
  await page.getByRole("button", { name: "전체 질문 보기" }).click();
  assert.equal(await page.locator(".faq-items details").count(), 9);
  await page.getByRole("searchbox").fill("코딩을 한 번도");
  assert.equal(await page.locator(".faq-items details").count(), 1);
  await page.locator("summary").click();
  assert.equal(await page.locator("details[open]").count(), 1);
  results.interactions.push("FAQ 카테고리·검색·빈 검색 결과 복구·질문 펼치기");

  for (const width of [360, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of [
      "/",
      "/programs",
      "/programs/basic",
      "/roadmap",
      "/projects",
      "/faq",
      "/schedule",
    ]) {
      await page.goto(baseURL + route);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      assert.equal(overflow, false, `${route}: overflow at ${width}px`);
      results.responsive.push(`${width}:${route}`);
    }
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseURL);
  await page.getByRole("button", { name: "메뉴 열기" }).click();
  assert.equal(await page.locator("#mobile-navigation").isVisible(), true);
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("#mobile-navigation").count(), 0);
  await page.getByRole("button", { name: "메뉴 열기" }).click();
  await page
    .locator("#mobile-navigation")
    .getByRole("link", { name: "교육과정" })
    .click();
  await page.waitForURL(baseURL + "/programs");
  assert.equal(new URL(page.url()).pathname, "/programs");
  assert.equal(await page.locator("#mobile-navigation").count(), 0);
  results.interactions.push("모바일 메뉴 열기·Esc 닫기·페이지 이동 후 닫기");

  for (const route of ["/apply", "/contact", "/schedule"]) {
    await page.goto(baseURL + route);
    assert.equal(await page.locator("input, textarea, form").count(), 0);
  }
  const missing = await page.goto(baseURL + "/not-a-page");
  assert.equal(missing.status(), 404);
  results.interactions.push("개인정보 입력·접수 기능 없음, 404 응답");

  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const route of routes) {
    await page.goto(baseURL + route);
    const audit = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    results.accessibility.push({
      route,
      violations: audit.violations.map((item) => ({
        id: item.id,
        impact: item.impact,
        nodes: item.nodes.map((node) => ({
          target: node.target,
          summary: node.failureSummary,
        })),
      })),
    });
  }

  await page.goto(baseURL);
  await page.locator(".image-hero-art img").evaluate((image) => image.decode());
  assert.equal(await page.locator(".hero-image-label").isVisible(), true);
  assert.equal(await page.locator(".program-card-visual img").count(), 2);
  for (const route of ["/", "/about"]) {
    await page.goto(baseURL + route);
    assert.equal(await page.locator(".education-photo-grid img").count(), 4);
    await page
      .locator(".education-photo-grid img")
      .evaluateAll(async (images) => {
        await Promise.all(
          images.map((image) => {
            image.loading = "eager";
            return image.decode();
          }),
        );
      });
    assert.match(
      await page.locator(".education-gallery-note").innerText(),
      /AI 과정의 실제 수업 사진을 의미하지 않습니다/,
    );
  }
  await page.goto(baseURL);
  results.interactions.push(
    "메인 히어로·과정 이미지 연결, 홈·대학 소개 교육 현장 사진 4장 로딩·설명 확인",
  );
  await page.screenshot({
    path: "artifacts/hero-desktop.png",
    fullPage: false,
  });
  await page.screenshot({ path: "artifacts/home-desktop.png", fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: "artifacts/hero-mobile.png", fullPage: false });
  await page.screenshot({ path: "artifacts/home-mobile.png", fullPage: true });
  await page.goto(baseURL + "/programs/basic");
  await page.screenshot({
    path: "artifacts/course-mobile.png",
    fullPage: true,
  });
  assert.deepEqual(errors, [], "browser runtime errors");
} finally {
  await writeFile(
    "artifacts/frontend-verification.json",
    JSON.stringify(results, null, 2),
  );
  await browser.close();
}
const violationCount = results.accessibility.reduce(
  (sum, entry) => sum + entry.violations.length,
  0,
);
console.log(
  JSON.stringify(
    {
      routes: results.routes.length,
      responsiveChecks: results.responsive.length,
      interactions: results.interactions,
      accessibilityViolations: violationCount,
      runtimeErrors: errors.length,
      report: "artifacts/frontend-verification.json",
    },
    null,
    2,
  ),
);
if (violationCount) process.exitCode = 1;
