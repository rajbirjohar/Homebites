import type { NextPage } from "next";
import Image from "next/image";
import { ListFood, Page } from "../components";
import hero from "/public/assets/hero.jpg";

const Home: NextPage = () => {
  return (
    <Page>
      <div className="h-screen flex flex-col justify-center">
        <h1 className="text-6xl font-bold my-4">
          Welcome to <span className="text-red-500">Homebites</span>
        </h1>
        <h2 className="text-2xl text-gray-900 font-semibold my-2">
          {" "}
          Your home away from home, but on a plate.
        </h2>
        <ul className="flex gap-4 my-4">
          <button className="text-red-500">Sign In</button>
          <button className="rounded-full bg-red-500 text-white py-2 px-4">
            Sign Up
          </button>
        </ul>
      </div>
      <div className="h-screen flex flex-col justify-center">
        <h1 className="text-4xl font-bold my-4">
          Missing <span className="text-red-500">Home?</span> We got you.
        </h1>
        <ListFood />
      </div>
    </Page>
  );
};

export default Home;
