import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Products />} path="/products" />
        <Route element={<Products />} path="/products/:id" />
        <Route element={<SignIn />} path="/sign-in" />
        <Route element={<Register />} path="/register" />
        <Route element={<Cart />} path="/cart" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
