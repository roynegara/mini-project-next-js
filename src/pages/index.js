import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleRedirectToProductPage = () => {
    router.push(`/product/${name}`);
  }

  return (
    <div>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="muhammad/subhan">Subhan</Link>
        </li>
        <li>
          <Link href="muhammad/saifur">Saifur</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <input
          style={{ color: "red" }}
          placeholder="Masukkan Nama"
          onChange={(e) => setName(e.target.value)}
          type="text"></input>

        <Link href={`/product/${name}`}>
          <button>halaman produk</button>
        </Link>
      </div>

      <div>
        
        <button onClick={handleRedirectToProductPage}>halaman produk</button>
      </div>
    </div>
  );
}
