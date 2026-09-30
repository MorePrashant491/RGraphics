import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductCustomize from "./pages/ProductCustomize";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function Placeholder({ title }) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-3 text-slate-600">
        This page is planned for the next RGraphics phase.
      </p>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route
        path="/products/:id/customize"
        element={<ProductCustomize />}
      />

      <Route
        path="/design"
        element={<Placeholder title="Design Studio" />}
      />

      <Route
        path="/templates"
        element={<Placeholder title="Templates" />}
      />

      <Route 
  path="/cart" 
  element={<Cart />} 
/>

    <Route 
  path="/checkout" 
  element={<Checkout />} 
/>

      <Route
        path="/login"
        element={<Placeholder title="Login" />}
      />

      <Route
        path="/dashboard"
        element={<Placeholder title="Dashboard" />}
      />
    </Routes>
  );
}