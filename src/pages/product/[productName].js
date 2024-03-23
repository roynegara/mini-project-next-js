import { useRouter } from "next/router";

export default function ProductDetailPage() {
  const router = useRouter();
  return (
    <div>
      Setail dari halaman <h1 style={{ color: "red" }}>{router.query.productName}</h1>
    </div>
  );
}
