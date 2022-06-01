import create from "zustand";

const useStore = create<Food & AddToCart>((set) => ({
  id: "",
  image: "",
  name: "",
  email: "",
  postCode: "",
  city: "",
  phoneNumber: "",
  favoriteQuote: "",
  addFood: () =>
    set((state) => ({
      id: state.id,
      name: state.name,
      email: state.email,
      postCode: state.postCode,
      city: state.city,
      phoneNumber: state.phoneNumber,
      favoriteQuote: state.favoriteQuote,
    })),
}));

function cart() {
  const name = useStore((state) => state.name);
}

function addToCart() {
  console.log("here");
  useStore((state) => state.addFood());
  console.log(cart);
}

export { cart, addToCart };
