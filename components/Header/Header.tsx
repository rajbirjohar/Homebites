import { useEffect, useState } from "react";

export default function Header(): JSX.Element {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <header
      className={`min-w-full fixed transition-all animate-300 px-6 ${
        scroll ? "bg-red-500" : "bg-gray-50"
      }`}
    >
      <nav className="max-w-screen-xl flex items-center justify-between mx-auto py-4">
        <span
          className={`font-bold tracking-wide ${
            scroll ? "text-white" : "text-black"
          }`}
        >
          Homebites
        </span>
        <ul className="flex gap-4">
          <button className={scroll ? "text-white" : "text-red-500"}>
            Sign In
          </button>
          <button
            className={`rounded-full py-2 px-4 ${
              scroll ? "bg-white text-red-500" : "bg-red-500 text-white"
            }`}
          >
            Sign Up
          </button>
        </ul>
      </nav>
    </header>
  );
}
