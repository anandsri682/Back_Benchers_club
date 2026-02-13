export const PRODUCTS = {
  veg: Array.from({ length: 10 }, (_, i) => ({
    id: `veg-${i}`,
    name: `Veg Item ${i + 1}`,
    price: 80 + i * 5,
    image: "https://static.vecteezy.com/system/resources/thumbnails/035/375/567/small_2x/ai-generated-dum-handi-chicken-biryani-is-prepared-in-an-earthen-or-clay-pot-called-haandi-popular-indian-non-vegetarian-food-photo.jpg"
  })),

  nonveg: Array.from({ length: 10 }, (_, i) => ({
    id: `nonveg-${i}`,
    name: `Non-Veg Item ${i + 1}`,
    price: 150 + i * 10,
    image: "https://source.unsplash.com/300x300/?chicken-food"
  })),

  drinks: Array.from({ length: 10 }, (_, i) => ({
    id: `drink-${i}`,
    name: `Cool Drink ${i + 1}`,
    price: 40 + i * 5,
    image: "https://source.unsplash.com/300x300/?soft-drink"
  })),

  icecream: Array.from({ length: 10 }, (_, i) => ({
    id: `ice-${i}`,
    name: `Ice Cream ${i + 1}`,
    price: 60 + i * 5,
    image: "https://source.unsplash.com/300x300/?ice-cream"
  }))
};
