import { faker } from "@faker-js/faker";
import dynamic from "next/dynamic";
import Link from "next/link";

function ListFood(): JSX.Element {
  const foods: Food[] = [];
  for (let i = 0; i < 10; i++) {
    foods.push({
      id: faker.database.mongodbObjectId(),
      image: faker.image.food(500, 500, true),
      name: faker.name.findName(),
      email: faker.internet.email(),
      postCode: faker.address.zipCode(),
      city: faker.address.cityName(),
      phoneNumber: faker.phone.phoneNumber(),
      description: faker.lorem.sentence(),
      count: 0,
      price: faker.commerce.price(10, 40, 2,"$" )
    });
  }

  return (
    <ul className="flex min-w-screen overflow-x-scroll gap-3 p-3 hide-scroll pl-36 my-10">
      {foods.map((food) => (
        <li key={food.id} className="flex flex-col flex-shrink-0 p-6 shadow-lg my-6 rounded-lg bg-white">
          <img src={food.image} className="w-80 h-80 rounded-lg" />
          <Link href={`/${food.id}`} passHref key={food.postCode}>
            <h3 className="my-2 font-semibold text-lg cursor-pointer hover:text-red-400">
              {food.name}
            </h3>
          </Link>
          <p className="text-gray-500">
            Price {" "}
            <span className="text-black font-medium">{food.price}</span>
          </p>
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
export default dynamic(() => Promise.resolve(ListFood), { ssr: false });
