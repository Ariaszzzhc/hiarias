import React from "react";

export default function Header() {
  return (
    <header className="block bg-wyellow-50 shadow-md z-2 fixed w-screen">
      <div className="container mx-auto flex py-6 items-center">
        <h1 className="font-bold text-3xl">Arias's Blog</h1>
        <nav className="flex-grow block">
          <ul className="block m0 text-center">
            <li className="inline-block m-0">
              <a className="px-2" href="/">Home</a>
            </li>
            <li className="inline-block m-0">
              <a className="px-2" href="/">Tags</a>
            </li>
            <li className="inline-block m-0">
              <a className="px-2" href="/">Archives</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
