export type Testimonial = {
  id: number;
  name: string;
  review: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Santos",
    review:
      "The brown sugar milk tea is hands down the best in the city. I order it twice a week and it never disappoints.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jake Reyes",
    review:
      "Delivery was fast and the drinks arrived perfectly sealed and cold. Will definitely reorder!",
    rating: 5,
  },
  {
    id: 3,
    name: "Anika Cruz",
    review:
      "The matcha latte is not too sweet, not too bitter — exactly how I like it. Finally a milk tea place that gets it.",
    rating: 5,
  },
];
