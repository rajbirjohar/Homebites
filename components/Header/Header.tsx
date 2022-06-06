import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { IconShoppingCart } from "@tabler/icons";
import { useStore } from "../../utils/store";

export default function Header(): JSX.Element {
  const { data: session } = useSession();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const cart = useStore((state) => state.cart.length) || 0;

  return (
    <header
      className={`min-w-full fixed transition-all animate-100 px-6 z-10 ${
        scroll ? "bg-gray-50" : "bg-none"
      }`}
    >
      <nav className="max-w-screen-xl flex items-center justify-between mx-auto py-4">
        <Link href="/" passHref>
          <span className="text-red-500 font-bold tracking-wide cursor-pointer">
            HomeBites
          </span>
        </Link>
        <ul className="flex gap-4 items-center">
          {session ? (
            <>
              <span className="font-bold text-red-500">
                {session.user?.name}
              </span>
              <button
                className="font-bold text-black"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                className="font-bold rounded-full text-red-500 cursor-pointer hover:text-red-600"
                onClick={() => signIn("google")}
              >
                Sign In
              </button>
              <button
                className="font-bold flex gap-4 py-2 px-4 text-white bg-red-500 rounded-full cursor-pointer hover:bg-red-600"
                onClick={() => signIn("google")}
              >
                Sign Up
              </button>
            </>
          )}
          <Link href="/checkout" passHref>
            <button className="bg-red-500 py-2 px-4 rounded-full cursor-pointer hover:bg-red-600 text-white flex items-center gap-1 font-bold">
              <>
                <IconShoppingCart className="text-white" /> {cart}
              </>
            </button>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
