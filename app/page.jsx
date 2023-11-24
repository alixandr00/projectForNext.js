import Link from "next/link";

export default function Home() {
  return (
    <ul className="flex gap-10 bg-slate-600 text-white h-20 justify-center items-center">
      <Link href={"/home"}>домой</Link>
      <Link href={"/about"}>about</Link>
      <Link href={"/blog"}>blog</Link>
    </ul>
  );
}
