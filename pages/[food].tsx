import faker from "@faker-js/faker";
import { NextPage } from "next";
import { Page, Paragraph } from "../components";
import ListFoodItems from "../components/ListFoodItems/ListFoodItems";
import dynamic from "next/dynamic";

const Food: NextPage = () => {
  return (
    <Page>
      <Paragraph className="max-w-screen-xl flex md:flex-row flex-col justify-start mx-auto py-24 px-6 gap-10">
        <div>
          <h1 className="text-6xl font-bold my-4">Pick Your Food</h1>
          <h3 className="text-xl max-w-2xl text-gray-800">
            Select an item to be hand prepared by a home cook. Or ten! We
            guarantee any selection will taste delicious.
          </h3>
          <ListFoodItems />
        </div>
        <div className="flex-1">
          <div className="sticky top-24">
            <div className="flex flex-col gap-3 mb-6">
              <h2 className="text-2xl font-bold">
                Cooked by {faker.name.findName()}
              </h2>
              <p>
                <strong>Phone:</strong> {faker.phone.phoneNumber()}{" "}
              </p>
              <p>
                <strong>Email:</strong> {faker.internet.email()}
              </p>
              <p>
                <strong>Located:</strong> {faker.address.cityName()},{" "}
                {faker.address.zipCode()}
              </p>
            </div>
            <img
              src={faker.image.food(500, 500, true)}
              className="w-auto h-auto rounded-lg"
            />
          </div>
        </div>
      </Paragraph>
    </Page>
  );
};

// Fixes hydration error and seems to be prevalent with React 18
export default dynamic(() => Promise.resolve(Food), { ssr: false });
