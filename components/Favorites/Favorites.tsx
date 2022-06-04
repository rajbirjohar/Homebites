import { faker } from "@faker-js/faker";
import dynamic from "next/dynamic";
import Link from "next/link";

function Favorites(): JSX.Element {
  const foods: Food[] = [];
  for (let i = 0; i < 6; i++) {
    foods.push({
      id: faker.database.mongodbObjectId(),
      image: faker.image.food(500, 500, true),
      name: faker.name.findName(),
      email: faker.internet.email(),
      postCode: faker.address.zipCode(),
      city: faker.address.cityName(),
      phoneNumber: faker.phone.phoneNumber(),
      description: faker.lorem.sentence(),
      price: 0,
    });
  }

  return (
    <ul className="grid md:grid-cols-3 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3 grid-cols-1 grid-rows-6  gap-10 max-w-screen-xl">
      {foods.map((food) => (
        <li className="flex flex-col" key={food.id}>
          <img src={food.image} className="w-auto h-80 rounded-lg" />
          <Link href={`/${food.id}`} passHref key={food.postCode}>
            <h3 className="my-2 font-semibold text-lg cursor-pointer hover:text-red-400">
              {food.name}
            </h3>
          </Link>
          <p className="text-gray-500">
            Located @{" "}
            <span className="text-black font-medium">{food.postCode}</span>
          </p>
          <Link href={"/checkout"} passHref>
            <button className="rounded-full bg-red-500 text-white py-2 px-4 my-3">
              Add to Cart
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Fixes hydration error and seems to be prevalent with React 18
export default dynamic(() => Promise.resolve(Favorites), { ssr: false });
