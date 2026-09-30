import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, ShoppingBag } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [customer, setCustomer] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("rgraphics_cart")) || [];

    setCart(savedCart);
  }, []);

  const subtotal = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + Number(item.totalPrice || 0),
      0
    );
  }, [cart]);

  const totalQuantity = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + Number(item.quantity || 1),
      0
    );
  }, [cart]);

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!customer.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!customer.mobile.trim()) {
      alert("Please enter your mobile number.");
      return;
    }

    if (customer.mobile.length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }

    if (!customer.email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      navigate("/products");
      return;
    }

    alert(
      "Checkout details saved successfully!\n\nPayment integration will be added next."
    );
  };

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50/40">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <ShoppingBag
            size={60}
            className="mx-auto text-[#0B2D5C]"
          />

          <h1 className="mt-6 text-3xl font-black text-[#0B2D5C]">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-slate-500">
            Add a product to your cart before checkout.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] px-6 py-3 font-bold text-white"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50/40">

      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <h1 className="text-2xl font-black text-[#0B2D5C]">
              RGraphics
            </h1>

            <p className="text-sm text-slate-500">
              Print Your Ideas. Create Your Brand.
            </p>
          </div>

          <Link
            to="/cart"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-[#0B2D5C] hover:border-[#E5007D] hover:text-[#E5007D]"
          >
            <ArrowLeft size={17} />
            Back to Cart
          </Link>

        </div>
      </header>

      {/* MAIN */}
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wide text-[#E5007D]">
            Checkout
          </p>

          <h2 className="mt-2 text-4xl font-black text-[#0B2D5C]">
            Complete Your Order
          </h2>

          <p className="mt-2 text-slate-600">
            Enter your details and review your order before payment.
          </p>
        </div>

        <form
          onSubmit={handlePlaceOrder}
          className="grid gap-8 lg:grid-cols-3"
        >

          {/* CUSTOMER DETAILS */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">

            <h3 className="text-xl font-black text-[#0B2D5C]">
              Customer Details
            </h3>

            <div className="mt-6 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={customer.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#E5007D] focus:ring-2 focus:ring-[#E5007D]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={customer.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  maxLength="10"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#E5007D] focus:ring-2 focus:ring-[#E5007D]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={customer.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#E5007D] focus:ring-2 focus:ring-[#E5007D]/10"
                />
              </div>

              {/* COLLECTION */}
              <div className="rounded-2xl bg-gradient-to-r from-[#F5F8FF] to-[#FFF4FA] p-5">

                <p className="text-sm font-bold text-[#E5007D]">
                  Collection Method
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <CheckCircle
                    size={22}
                    className="text-green-600"
                  />

                  <div>
                    <p className="font-bold text-[#0B2D5C]">
                      Collect From RGraphics Shop
                    </p>

                    <p className="text-sm text-slate-500">
                      Your finished prints can be collected
                      from our shop.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </section>

          {/* ORDER SUMMARY */}
          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <h3 className="text-xl font-black text-[#0B2D5C]">
              Order Summary
            </h3>

            <div className="mt-6 space-y-4">

              {cart.map((item) => (
                <div
                  key={item.cartId}
                  className="border-b border-slate-200 pb-4"
                >

                  <div className="flex justify-between gap-4">

                    <div>
                      <p className="font-bold text-slate-900">
                        {item.productName}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {item.quantity} × Banner
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {item.finalPrintWidth?.toFixed(2)} ×{" "}
                        {item.finalPrintHeight?.toFixed(2)} ft
                      </p>
                    </div>

                    <p className="font-bold">
                      ₹{Number(item.totalPrice || 0).toFixed(2)}
                    </p>

                  </div>

                </div>
              ))}

              <div className="flex justify-between pt-2">
                <span className="text-slate-600">
                  Items
                </span>

                <span className="font-semibold">
                  {totalQuantity}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-600">
                  Subtotal
                </span>

                <span className="font-semibold">
                  ₹{subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-600">
                  Collection
                </span>

                <span className="font-semibold text-green-600">
                  Free
                </span>
              </div>

              <div className="border-t pt-5">

                <div className="flex items-center justify-between">

                  <span className="text-lg font-bold">
                    Total
                  </span>

                  <span className="text-3xl font-black text-[#E5007D]">
                    ₹{subtotal.toFixed(2)}
                  </span>

                </div>

              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] px-6 py-4 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Continue to Payment →
              </button>

            </div>

          </aside>

        </form>

      </div>
    </main>
  );
}