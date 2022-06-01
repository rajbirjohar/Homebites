import { NextPage } from "next";
import { Page, Paragraph } from "../components";

const Food: NextPage = () => {
  return (
    <Page>
      <Paragraph className="max-w-screen-xl h-screen flex flex-col justify-center mx-auto px-6">
        <h1 className="text-6xl font-bold my-4">Food</h1>
      </Paragraph>
    </Page>
  );
};

export default Food;
