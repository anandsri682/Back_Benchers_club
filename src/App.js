import './App.css';
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from './Navbar';
import Footer from "./Footer";
import BottomNav from "./BottomNav";
import AccountDashboard from "./accounts/AccountDashboard";
import Home from "./Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Reviews from "./pages/Reviews";
// import AdminDashboard from './AdminDashboard';
import CategoriesPage from "./CategoriesPage";
import CategoryPage from "./CategoryPage";

import Login from "./loginpages/Login";
import Signup from "./loginpages/Signup";
import { AuthProvider } from "./loginpages/AuthContext";
import AdminDashboard from './adminpages/AdminDashboard';
import AdminProducts from './adminpages/AdminProducts';
import ManageProducts from './adminpages/ManageProducts';
import AddProduct from "./adminpages/AddProduct";
import Search from "./pages/Search";
import EditProduct from "./adminpages/EditProduct";


import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <AuthProvider> {/* ✅ OUTSIDE Routes */}
      <div className="App">
        <Navbar />
        <ScrollToTop/>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<AccountDashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/manage-products" element={<ManageProducts />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            {/* <Route path="/admin/update-product/:id" element={<UpdateProduct />} /> */}
            <Route path="/admin/update/product/:productId" element={<EditProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />


          </Routes>

          <BottomNav />
        </main>

        {/* <Reviews /> */}
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
