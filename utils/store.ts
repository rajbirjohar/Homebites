import create from "zustand";

interface Store {
  cart: Food[];
  addToCart: (props: Food) => void;
  removeFromCart: (id: string) => void;
  removeAll: () => void;
}

export const useStore = create<Store>((set) => ({
  cart: [],
  addToCart: (props: Food) => {
    set((state) => ({
      cart: [
        ...state.cart,
        {
          id: props.id,
          name: props.name,
          description: props.description,
          price: props.price,
        } as Food,
      ],
    }));
  },
  removeFromCart: (id: string) => {
    set((state) => ({
      // Filter all items that DO NOT match the id of the item to be deleted
      // and replace the cart array.
      cart: state.cart.filter(
        (item, index) =>
          // Find the first index of the id to be deleted
          index !== state.cart.findIndex((item) => item.id === id)
      ),
    }));
  },
  removeAll: () => {
    set((state) => ({
      cart: [],
    }));
  },
}));
