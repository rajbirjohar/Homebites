import { IconCircleMinus, IconCirclePlus } from "@tabler/icons";
import { useState } from "react";
export default function FoodItem(props: {
  id: string;
  name: string;
  description: string;
}): JSX.Element {
  const [quantity, setQuantity] = useState(0);
  return (
    <li className="flex items-start justify-between p-4 shadow-lg rounded-lg bg-white">
      <div>
        <h3 className="text-red-500 font-semibold text-xl">{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1);
            }
          }}
          className="cursor-pointer"
        >
          <IconCircleMinus />
        </button>
        {quantity}
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="cursor-pointer"
        >
          <IconCirclePlus />
        </button>
      </div>
    </li>
  );
}
