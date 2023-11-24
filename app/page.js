import Link from "next/link";

export default function Home() {
  return (
    <ul className="flex gap-10 bg-slate-600 text-white">
      <Link href={"/"}>домой</Link>
      <Link href={"/about"}>sidebar</Link>
      <Link href={"/blog"}>setting</Link>
    </ul>
  );
}
