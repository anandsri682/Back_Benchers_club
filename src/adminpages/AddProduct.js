import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    type: "veg",
    price: "",
    image: null,
  });

  const handleImage = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.title || !product.price || !product.image) {
      alert("All fields required");
      return;
    }

    // ✅ FORM DATA FOR MEDIA FILE
    const formData = new FormData();
    formData.append("productName", product.title);
    formData.append("productType", product.type);
    formData.append("productPrice", Number(product.price));
    formData.append("image", product.image); // REAL IMAGE FILE

    console.log("SENDING FORM DATA TO BACKEND");

    try {
      const response = await fetch(
        "http://192.168.1.105:8080/backbenchersclube.com/api/new/product", // change if needed
        {
          method: "POST",
          body: formData, // ❌ NO Content-Type HEADER
        }
      );

      const data = await response.text();
      console.log("BACKEND RESPONSE 👈", data);

      // alert("Product added successfully ✅");
      alert(data);
      navigate("/admin/manage-products");

    } catch (error) {
      console.error("ERROR 👉", error);
      alert("Server is down. Try again later!");
    }
  };

  return (
    <section className="add-product-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <form className="add-product-card" onSubmit={handleSubmit}>
        <h2>Add New Product</h2>

        {/* IMAGE */}
        <label className="upload-box">
          {product.image ? product.image.name : "Upload Image"}
          <input type="file" accept="image/*" onChange={handleImage} hidden />
        </label>

        {/* TITLE */}
        <input
          type="text"
          placeholder="Product Title"
          value={product.title}
          onChange={(e) =>
            setProduct({ ...product, title: e.target.value })
          }
        />

        {/* CATEGORY */}
        <select
          value={product.type}
          onChange={(e) =>
            setProduct({ ...product, type: e.target.value })
          }
        >
          <option value="veg">Veg</option>
          <option value="nonveg">Non Veg</option>
          <option value="cooldrinks">Cool Drinks</option>
          <option value="icecream">Ice Creams</option>
        </select>

        {/* PRICE */}
        <input
          type="number"
          placeholder="Price ₹"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: e.target.value })
          }
        />

        <button type="submit" className="add-btn">
          Add Product
        </button>
      </form>
    </section>
  );
}

export default AddProduct;
