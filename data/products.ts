export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Brown Sugar Milk Tea",
    description: "Classic brown sugar pearls, fresh milk, dark tea.",
    price: 120,
    image: "/images/brown-sugar.png",
  },
  {
    id: 2,
    name: "Matcha Latte",
    description: "Premium Japanese matcha with steamed oat milk.",
    price: 135,
    image: "/images/matcha-latte-with-greentea.png",
  },
  {
    id: 3,
    name: "Taro Milk Tea",
    description: "Creamy taro blended with chewy black pearls.",
    price: 125,
    image: "/images/creamy-taro-milktea.png",
  },
  {
    id: 4,
    name: "Strawberry Yakult",
    description: "Fresh strawberries, Yakult, and bursting pearls.",
    price: 130,
    image: "/images/strawberry-yakult.png",
  },
  {
    id: 5,
    name: "Thai Milk Tea",
    description: "Bold Thai tea with condensed milk and cream top.",
    price: 115,
    image: "/images/thai-milk-tea-with-orange-tea-base.png",
  },
  {
    id: 6,
    name: "Wintermelon Tea",
    description: "Light and earthy wintermelon with honey jelly.",
    price: 110,
    image: "/images/winter-melon-tea.png",
  },
];
