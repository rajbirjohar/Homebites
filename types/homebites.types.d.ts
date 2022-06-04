interface Food {
  id: string;
  image: string;
  name: string;
  email: string;
  postCode: string;
  city: string;
  phoneNumber: string;
  description: string;
  price: number;
}

interface Store {
  cart: Food[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}
