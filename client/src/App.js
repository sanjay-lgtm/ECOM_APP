import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PagenotFound from "./pages/PagenotFound";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Dashboard from "./User/Dashboard";
import PrivateRoute from "./Component/Layout/Routes/PrivateRoute";
import ForgotPassword from "./Auth/ForgotPassword";
import AdminRoute from "./Component/Layout/Routes/AdminRoute";
import AdminDashboard from "./User/AdminDashboard";
import CreateCategory from "./User/CreateCategory";
import CreateOrder from "./User/CreateOrder";
import Users from "./User/Users";
import Order from "./User/Order";
import Profile from "./User/Profile";
import Products from "./User/Products";
import UpdateProducts from "./User/UpdateProducts";
import Search from "./Component/Layout/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryList from "./pages/CategoryList";
import CartPage from "./pages/CartPage";
import AdminOrder from "./User/AdminOrder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/category/:slug" element={<CategoryList />} />

        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Order />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateOrder />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrder />} />

          <Route path="admin/products" element={<Products />} />
          <Route path="admin/product/:slug" element={<UpdateProducts />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Policy />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </>
  );
}

export default App;
