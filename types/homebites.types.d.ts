interface Food {
  id: string;
  image: string;
  name: string;
  email: string;
  postCode: string;
  city: string;
  phoneNumber: string;
  favoriteQuote: string;
}

interface AddToCart {
  addFood: () => void;
}
