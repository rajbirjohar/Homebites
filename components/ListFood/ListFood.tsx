import { faker } from "@faker-js/faker";
import dynamic from "next/dynamic";
import Link from "next/link";

function ListFood(): JSX.Element {
  const foods = [];
  for (let i = 0; i < 10; i++) {
    foods.push({
      id: faker.database.mongodbObjectId(),
      image: faker.image.food(500, 500, true),
      name: faker.name.findName(),
      email: faker.internet.email(),
      postCode: faker.address.zipCode(),
      city: faker.address.cityName(),
      phoneNumber: faker.phone.phoneNumber(),
      favouriteQuote: faker.lorem.sentence(),
    });
  }
  return (
    <ul className="flex min-w-screen overflow-x-scroll gap-3 p-3 hide-scroll">
      {foods.map((food) => (
        <Link href={`/${food.id}`} passHref>
          <li
            key={food.postCode}
            className="flex flex-col flex-shrink-0 p-6 shadow-lg my-6 rounded-lg cursor-pointer"
          >
            <img src={food.image} className="w-80 h-80 rounded-lg" />
            <h3 className="my-2 font-semibold text-lg">{food.name}</h3>
            <p className="text-gray-500">
              Located @{" "}
              <span className="text-black font-medium">{food.postCode}</span>
            </p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

// Fixes hydration error and seems to be prevalent with React 18
export default dynamic(() => Promise.resolve(ListFood), { ssr: false });
