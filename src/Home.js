import Hero from "./Hero";
import Categories from "./Categories";
import Products from "./Products";
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
    </>
  );
}

export default Home;
