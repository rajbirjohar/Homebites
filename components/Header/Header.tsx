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

  return (
    <header
      className={`min-w-full fixed transition-all animate-100 px-6 z-10 ${
        scroll ? "bg-gray-50" : "bg-none"
      }`}
    >
      <nav className="max-w-screen-xl flex items-center justify-between mx-auto py-4">
        <Link href="/">
          <span className="text-red-500 font-bold tracking-wide cursor-pointer">
            Homebites
          </span>
        </Link>
        <ul className="flex gap-4">
          {session ? (
            <>
              <span className="font-bold flex gap-4 py-2 px-4 text-red-500">
                {session.user?.name}
              </span>
              <button
                className="font-bold rounded-full text-black"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                className="font-bold rounded-full text-red-500"
                onClick={() => signIn("google")}
              >
                Sign In
              </button>
              <button
                className="font-bold flex gap-4 py-2 px-4 text-white bg-red-500 rounded-full cursor-pointer"
                onClick={() => signIn("google")}
              >
                Sign Up
              </button>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
