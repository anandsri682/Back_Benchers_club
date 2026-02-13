import { useParams } from "react-router-dom";
import Products from "./Products";
import { PRODUCTS } from "./Data";

function CategoryPage() {
  const { category } = useParams();

  return (
    <Products products={PRODUCTS[category] || []} />
  );
}

export default CategoryPage;
