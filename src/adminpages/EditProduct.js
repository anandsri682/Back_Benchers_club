import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import "./EditProduct.css";

function EditProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const { productId } = useParams();

  // GET PRODUCT FROM NAVIGATION STATE
  const existingProduct = location.state?.product;

  const [product, setProduct] = useState(
    existingProduct || {
      productName: "",
      productType: "",
      productPrice: "",
      visibilityData: "visible",
    }
  );

  /* HANDLE INPUT CHANGE */
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  /* UPDATE PRODUCT */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://192.168.1.112:8080/backbenchersclube.com/api/products/update/${productId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        }
      );

      if (res.ok) {
        alert("Product Updated Successfully ✅");
        navigate("/admin/manage-products");
      } else {
        alert("Update Failed ❌");
      }
    } catch (error) {
      console.error("ERROR UPDATING PRODUCT 👉", error);
      alert("Server Error ❌");
    }
  };

  return (
    <section className="edit-product-page">
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit} className="edit-product-form">
        <input
          type="text"
          name="productName"
          value={product.productName || ""}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />

        <select
          name="productType"
          value={product.productType || ""}
          onChange={handleChange}
        >
          <option value="veg">Veg</option>
          <option value="nonveg">Non Veg</option>
          <option value="cooldrinks">Cool Drinks</option>
          <option value="icecream">Ice Creams</option>
        </select>

        <input
          type="number"
          name="productPrice"
          value={product.productPrice || ""}
          onChange={handleChange}
          placeholder="Price"
          required
        />

        <select
          name="visibilityData"
          value={product.visibilityData || "visible"}
          onChange={handleChange}
        >
          <option value="visible">Visible</option>
          <option value="notVisible">Not Visible</option>
        </select>

        <button type="submit">Update Product</button>
      </form>
    </section>
  );
}

export default EditProduct;