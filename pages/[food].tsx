import { NextPage } from "next";
import { ListFood, Page, Paragraph } from "../components";

const Food: NextPage = () => {
  return (
    <Page>
      <Paragraph className="max-w-screen-xl flex flex-col justify-center mx-auto py-24 px-6">
        <h1 className="text-6xl font-bold my-4">Food</h1>
        <h3 className="text-xl max-w-2xl text-gray-800">
          Check out our local chefs. We source the best, and most authentic
          foods created from passionate individuals who want to share their
          creations with you. Way better than the fast food down the street.
        </h3>
      </Paragraph>
      <ListFood />
      <ListFood />
      <ListFood />
    </Page>
  );
};

export default Food;
