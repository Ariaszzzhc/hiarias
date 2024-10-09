import Link from "next/link";

export function HeaderBar() {
  return (
    <div className="w-full sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-10 ">
      <header className="container flex justify-between py-4 min-h-20">
        <div className="flex justify-center items-center">
          <Link href="/" className="text-lg font-semibold">
            Arias&apos; Blog
          </Link>
        </div>
      </header>
    </div>
  );
}
