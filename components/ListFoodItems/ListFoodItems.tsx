import faker from "@faker-js/faker";
import Link from "next/link";
import FoodItem from "./FoodItem";

export default function ListFoodItems(): JSX.Element {
  const foodItems: Food[] = [];
  for (let i = 0; i < 10; i++) {
    foodItems.push({
      id: faker.database.mongodbObjectId(),
      name: faker.lorem.word(),
      description: faker.lorem.sentence(),
      image: "",
      email: "",
      postCode: "",
      city: "",
      phoneNumber: "",
      price: faker.finance.amount(1,20) as unknown as number,
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
          image={foodItem.image}
          email={foodItem.email}
          postCode={foodItem.postCode}
          city={foodItem.city}
          phoneNumber={foodItem.phoneNumber}
          price={foodItem.price}
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
