import { faker } from "@faker-js/faker";
import dynamic from "next/dynamic";

function ListFood(): JSX.Element {
  const foods = [];
  for (let i = 0; i < 10; i++) {
    foods.push({
      image: faker.image.food(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      postCode: faker.address.zipCode(),
      city: faker.address.cityName(),
      phoneNumber: faker.phone.phoneNumber(),
      favouriteQuote: faker.lorem.sentence(),
    });
  }
  return (
    <div>
      <div className="max-w-2xl">
        <h3 className="text-xl text-gray-800">
          Check out our local chefs. We source the best, and most authentic
          foods created from passionate individuals who want to share their
          creations with you. Way better than the fast food down the street.
        </h3>
      </div>
      <ul className="flex min-w-screen overflow-x-scroll gap-3 px-4">
        {foods.map((food) => (
          <li
            key={food.postCode}
            className="flex flex-col flex-shrink-0 p-6 shadow-lg my-6 rounded-lg"
          >
            <img src={food.image} className="w-80 h-80 rounded-lg" />
            <h3 className="my-2 font-semibold text-lg">{food.name}</h3>
            <p className="text-gray-500">
              Located @{" "}
              <span className="text-black font-medium">{food.postCode}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Fixes hydration error and seems to be prevalent with React 18
export default dynamic(() => Promise.resolve(ListFood), { ssr: false });
