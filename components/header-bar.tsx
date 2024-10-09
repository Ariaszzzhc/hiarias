import Link from "next/link";

export function HeaderBar() {
  return (
    <header className="container mx-auto flex align-middle items-center h-14">
      <Link href="/">Arias&apos; Blog</Link>
    </header>
  );
}
