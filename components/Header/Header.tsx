import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header(): JSX.Element {
  const { data: session } = useSession();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  if (session) {
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
            <span
              className={`font-bold flex gap-4 py-2 px-4 ${
                scroll ? "text-white" : "text-red-500"
              }`}
            >
              {session.user?.name} <br />
            </span>
            <button
              className={`rounded-full py-2 px-4 ${
                scroll ? "bg-white text-red-500" : "bg-red-500 text-white"
              }`}
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </ul>
        </nav>
      </header>
    );
  }
  return (
    <header
      className={`min-w-full fixed transition-all animate-300 px-6 ${
        scroll ? "bg-red-500" : "bg-gray-50"
      }`}
    >
      <nav className="max-w-screen-xl flex items-center justify-between mx-auto py-4">
        <Link href="/" passHref>
          <span
            className={`font-bold tracking-wide cursor-pointer ${
              scroll ? "text-white" : "text-black"
            }`}
          >
            Homebites
          </span>
        </Link>
        <ul className="flex gap-4">
          <button
            className={scroll ? "text-white" : "text-red-500"}
            onClick={() => signIn("google")}
          >
            Sign In
          </button>
          <button
            className={`rounded-full py-2 px-4 ${
              scroll ? "bg-white text-red-500" : "bg-red-500 text-white"
            }`}
            onClick={() => signIn("google")}
          >
            Sign Up
          </button>
        </ul>
      </nav>
    </header>
  );
}
