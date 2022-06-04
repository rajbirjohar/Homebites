import type { NextPage } from "next";
import Image from "next/image";
import { ListFood, Page, Paragraph } from "../components";
import hero from "/public/assets/hero.jpg";
import { useSession, signIn, signOut } from "next-auth/react";
import Favorites from "../components/Favorites/Favorites";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <Page>
      <section className="bg-gradient-to-br from-red-200 to-rose-500">
        <Paragraph className="max-w-screen-xl flex flex-col justify-center mx-auto px-6">
          <div className="py-36">
            <h1 className="text-6xl font-bold my-4">
              Welcome to <span className="text-red-500">Homebites</span>
            </h1>
            <h2 className="text-2xl text-gray-900 font-semibold my-2">
              {" "}
              Your home away from home, but on a plate.
            </h2>
            <ul className="flex gap-4 my-4">
              {session ? (
                <p className="rounded-full bg-red-500 text-white py-2 px-4">
                  Welcome {session.user?.name}! <br />
                </p>
              ) : (
                <>
                  <button
                    className="text-red-500 font-bold cursor-pointer hover:text-red-600"
                    onClick={() => signIn("google")}
                  >
                    Sign In
                  </button>
                  <button
                    className="rounded-full bg-red-500 text-white py-2 px-4 font-bold cursor-pointer hover:bg-red-600"
                    onClick={() => signIn("google")}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </ul>
          </div>
        </Paragraph>
      </section>
      <section className="py-10">
        <Paragraph className="max-w-screen-xl flex flex-col justify-center mx-auto px-6">
          <h1 className="text-4xl font-bold my-4 mb-8">
            <span className="text-red-500">Favorites</span> Near You
          </h1>
          <Favorites />
        </Paragraph>
      </section>
      <section className="bg-rose-50 py-10">
        <Paragraph className="max-w-screen-xl flex flex-col justify-center mx-auto px-6 my-10">
          <h1 className="text-4xl font-bold mb-4">
            Missing <span className="text-red-500">Home?</span> We got you.
          </h1>
          <h3 className="text-xl max-w-2xl text-gray-800">
            Check out our local chefs. We source the best, and most authentic
            foods created from passionate individuals who want to share their
            creations with you. Way better than the fast food down the street.
          </h3>
        </Paragraph>
        <ListFood />
      </section>
      <section className="py-10">
        <Paragraph className="max-w-screen-xl flex flex-col items-end mx-auto px-6 my-10">
          <h1 className="text-4xl font-bold my-4">
            Craving <span className="text-red-500">Authenticity?</span> We
            deliver.
          </h1>
          <h3 className="text-xl max-w-2xl text-right text-gray-800">
            Check out our local chefs. We source the best, and most authentic
            foods created from passionate individuals who want to share their
            creations with you. Way better than the fast food down the street.
          </h3>
        </Paragraph>
        <ListFood />
      </section>
    </Page>
  );
};
export default Home;
