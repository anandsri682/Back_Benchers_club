import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import "./EditProduct.css";

function EditProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const { productId } = useParams();

  const existingProduct = location.state?.product;

  const [product, setProduct] = useState({
    productName: "",
    productType: "",
    productPrice: "",
    productImageUrl: "",
  });

  /* =========================
     LOAD FROM NAVIGATION STATE
  ========================= */
  useEffect(() => {
    if (existingProduct) {
      setProduct({
        productName: existingProduct.productName,
        productType: existingProduct.productType,
        productPrice: existingProduct.productPrice,
        productImageUrl: existingProduct.productImage, // mapping here
      });
    } else {
      alert("Please open product from Manage Products page.");
      navigate("/admin/manage-products");
    }
  }, [existingProduct, navigate]);

  /* =========================
     HANDLE INPUT CHANGE
  ========================= */
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  /* =========================
     UPDATE PRODUCT
  ========================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://192.168.1.112:8080/backbenchersclube.com/api/product/update/${productId}`,
        {
          method: "POST", // Swagger shows PUT
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productName: product.productName,
            productType: product.productType,
            productPrice: product.productPrice,
            productImageUrl: product.productImageUrl,
          }),
        }
      );

      if (res.ok) {
        alert("Product Updated Successfully ✅");
        navigate("/admin/manage-products");
      } else {
        alert("Update Failed ❌");
      }
    } catch (error) {
      console.error("UPDATE ERROR 👉", error);
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
          value={product.productName}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />

        <select
          name="productType"
          value={product.productType}
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
          value={product.productPrice}
          onChange={handleChange}
          placeholder="Price"
          required
        />

        {/* Hidden image field (still sends to backend) */}
        <input
          type="hidden"
          name="productImageUrl"
          value={product.productImageUrl}
        />

        <button type="submit" className="update-btn">
          Update Product
        </button>
      </form>
    </section>
  );
}

export default EditProduct;
