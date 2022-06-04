import faker from "@faker-js/faker";
import Link from "next/link";
import FoodItem from "./FoodItem";

export default function ListFoodItems(): JSX.Element {
  const foodItems = [];
  for (let i = 0; i < 10; i++) {
    foodItems.push({
      id: faker.database.mongodbObjectId(),
      name: faker.lorem.word(),
      description: faker.lorem.words(10),
    });
  }
  return (
    <ul className="flex flex-col gap-6 my-6 max-w-2xl">
      {foodItems.map((foodItem) => (
        <FoodItem
          key={foodItem.id}
          id={foodItem.id}
          name={foodItem.name}
          description={foodItem.description}
        />
      ))}
      <div className="flex justify-end">
        <Link href={"/checkout"} passHref>
          <button className="rounded-full bg-red-500 text-white py-2 px-16 my-3">
            Add to Cart
          </button>
        </Link>
      </div>
    </ul>
  );
}
