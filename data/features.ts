export type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export const features: Feature[] = [
  {
    id: 1,
    title: "Fresh Ingredients",
    description:
      "We source locally and use only real tea leaves, fresh milk, and natural flavors.",
    icon: "leaf",
  },
  {
    id: 2,
    title: "Ready in 5 Minutes",
    description:
      "Walk in or order ahead. Your drink is ready faster than you can pick a flavor.",
    icon: "clock",
  },
  {
    id: 3,
    title: "Free Delivery",
    description:
      "Free delivery for orders above PHP 300 within 5km of our store.",
    icon: "truck",
  },
  {
    id: 4,
    title: "4.9 Star Rating",
    description:
      "Over 2,000 happy customers and counting. Don't take our word for it.",
    icon: "star",
  },
];
