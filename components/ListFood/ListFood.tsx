import { faker } from "@faker-js/faker";
import dynamic from "next/dynamic";
import Link from "next/link";
import { addToCart, cart } from "../../utils/store";
import { useCart } from "../../pages/cart"

function ListFood(): JSX.Element {
  const foods: Food[] = [];
  const increaseCart = useCart(state => state.increaseCart)
  for (let i = 0; i < 10; i++) {
    foods.push({
      id: faker.database.mongodbObjectId(),
      image: faker.image.food(500, 500, true),
      name: faker.name.findName(),
      email: faker.internet.email(),
      postCode: faker.address.zipCode(),
      city: faker.address.cityName(),
      phoneNumber: faker.phone.phoneNumber(),
      favoriteQuote: faker.lorem.sentence(),
    });
  }

  return (
    <ul className="flex min-w-screen overflow-x-scroll gap-3 p-3 hide-scroll">
      {foods.map((food) => (
        <li className="flex flex-col flex-shrink-0 p-6 shadow-lg my-6 rounded-lg">
          <img src={food.image} className="w-80 h-80 rounded-lg" />
          <Link href={`/${food.id}`} passHref key={food.postCode}>
            <h3 className="my-2 font-semibold text-lg cursor-pointer hover:text-red-400">
              {food.name}
            </h3>
          </Link>
          <p className="text-gray-500">
            Located @{" "}
            <span className="text-black font-medium">{food.postCode}</span>
          </p>
          
          <button className="rounded-full bg-red-500 text-white py-2 px-4 my-3" onClick={increaseCart}>
            Add to Cart
          </button>
          
        </li>
      ))}
    </ul>
  );
}

// Fixes hydration error and seems to be prevalent with React 18
export default dynamic(() => Promise.resolve(ListFood), { ssr: false });
