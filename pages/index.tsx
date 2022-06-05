import type { NextPage } from "next";
import Image from "next/image";
import { ListFood, Page, Paragraph } from "../components";
import hero from "/public/assets/hero.jpg";
import { useSession, signIn, signOut } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <Page>
        <Paragraph className="max-w-screen-xl h-screen flex flex-col justify-center mx-auto px-6">
          <h1 className="text-6xl font-bold my-4">
            Welcome to <span className="text-red-500">Homebites</span>
          </h1>
          <h2 className="text-2xl text-gray-900 font-semibold my-2">
            {" "}
            Your home away from home, but on a plate.
          </h2>
          <ul className="flex gap-4 my-4">
            <p className="rounded-full bg-red-500 text-white py-2 px-4">
              Welcome {session.user?.name} <br />
            </p>
          </ul>
        </Paragraph>
        <Paragraph className="max-w-screen-xl flex flex-col justify-center mx-auto px-6">
          <h1 className="text-4xl font-bold my-4">
            Missing <span className="text-red-500">Home?</span> We got you.
          </h1>
          <h3 className="text-xl max-w-2xl text-gray-800">
            Check out our local chefs. We source the best, and most authentic
            foods created from passionate individuals who want to share their
            creations with you. Way better than the fast food down the street.
          </h3>
        </Paragraph>
        <ListFood />
        <Paragraph className="max-w-screen-xl flex flex-col items-end mx-auto px-6">
          <h1 className="text-4xl font-bold my-4">
            Missing <span className="text-red-500">Home?</span> We got you.
          </h1>
          <h3 className="text-xl max-w-2xl text-right text-gray-800">
            Check out our local chefs. We source the best, and most authentic
            foods created from passionate individuals who want to share their
            creations with you. Way better than the fast food down the street.
          </h3>
        </Paragraph>
        <ListFood />
      </Page>
    );
  }
  return (
    <Page>
      <Paragraph className="max-w-screen-xl h-screen flex flex-col justify-center mx-auto px-6">
        <h1 className="text-6xl font-bold my-4">
          Welcome to <span className="text-red-500">Homebites</span>
        </h1>
        <h2 className="text-2xl text-gray-900 font-semibold my-2">
          {" "}
          Your home away from home, but on a plate.
        </h2>
        <ul className="flex gap-4 my-4">
          <button className="text-red-500" onClick={() => signIn("google")}>Sign In</button>
          <button className="rounded-full bg-red-500 text-white py-2 px-4" onClick={() => signIn("google")}>
            Sign Up
          </button>
        </ul>
      </Paragraph>
      <Paragraph className="max-w-screen-xl flex flex-col justify-center mx-auto px-6">
        <h1 className="text-4xl font-bold my-4">
          Missing <span className="text-red-500">Home?</span> We got you.
        </h1>
        <h3 className="text-xl max-w-2xl text-gray-800">
          Check out our local chefs. We source the best, and most authentic
          foods created from passionate individuals who want to share their
          creations with you. Way better than the fast food down the street.
        </h3>
      </Paragraph>
      <ListFood />
      <Paragraph className="max-w-screen-xl flex flex-col items-end mx-auto px-6">
        <h1 className="text-4xl font-bold my-4">
          Missing <span className="text-red-500">Home?</span> We got you.
        </h1>
        <h3 className="text-xl max-w-2xl text-right text-gray-800">
          Check out our local chefs. We source the best, and most authentic
          foods created from passionate individuals who want to share their
          creations with you. Way better than the fast food down the street.
        </h3>
      </Paragraph>
      <ListFood />
    </Page>
  );
};
export default Home;
