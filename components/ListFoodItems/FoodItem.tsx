import { IconCircleMinus, IconCirclePlus } from "@tabler/icons";
import { useState } from "react";
import { useStore } from "../../utils/store";

export default function FoodItem(props: Food): JSX.Element {
  const [quantity, setQuantity] = useState(0);

  const addToCart = useStore((state) => state.addToCart);
  const removeFromCart = useStore((state) => state.removeFromCart);

  return (
    <li className="flex items-start justify-between p-4 shadow-lg rounded-lg bg-white">
      <div>
        <h3 className="text-red-500 font-semibold text-xl">{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <p className="font-semibold text-lg">${props.price}</p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
                removeFromCart(props.id);
              }
            }}
            className="cursor-pointer"
          >
            <IconCircleMinus />
          </button>
          {quantity}
          <button
            onClick={() => {
              setQuantity(quantity + 1);
              addToCart(props);
            }}
            className="cursor-pointer"
          >
            <IconCirclePlus />
          </button>
        </div>
      </div>
    </li>
  );
}
