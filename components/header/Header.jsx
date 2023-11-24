import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/about">О нас</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
