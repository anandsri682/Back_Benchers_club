import Hero from "./Hero";
import Categories from "./Categories";
import Products from "./Products";
import Reviews  from "./pages/Reviews";
import { PRODUCTS } from "./Data";

function Home() {
  const allProducts = [
    ...PRODUCTS.veg,
    ...PRODUCTS.nonveg,
    ...PRODUCTS.drinks,
    ...PRODUCTS.icecream
  ];

  return (
    <>
      <Hero />
      <Categories />
      <Products products={allProducts} />
      <Reviews />
    </>
  );
}

export default Home;
