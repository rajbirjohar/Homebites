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
      cart: state.cart.filter((item) => item.id !== id),
    }));
  },
  removeAll: () => {
    set((state) => ({
      cart: [],
    }));
  },
}));
