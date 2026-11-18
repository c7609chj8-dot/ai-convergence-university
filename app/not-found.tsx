import Link from "next/link";
import { Arrow } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="container not-found">
      <span className="error-code">404</span>
      <h1>잠시, 다른 길로 오셨네요.</h1>
      <p>
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        홈으로 돌아가 배움의 여정을 이어가세요.
      </p>
      <Link href="/" className="button">
        홈으로 돌아가기 <Arrow />
      </Link>
    </section>
  );
}
