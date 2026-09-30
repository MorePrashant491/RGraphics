import { useEffect, useState } from "react";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  Upload,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("rgraphics_cart")) || [];
    setCartItems(savedCart);
  }, []);

  const saveCart = (items) => {
    setCartItems(items);
    localStorage.setItem("rgraphics_cart", JSON.stringify(items));
  };

  const increaseQuantity = (id) => {
    const updated = cartItems.map((item) =>
      item.cartId === id
        ? {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.unitPrice * (item.quantity + 1),
          }
        : item
    );

    saveCart(updated);
  };

  const decreaseQuantity = (id) => {
    const updated = cartItems
      .map((item) =>
        item.cartId === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
              totalPrice:
                item.unitPrice * Math.max(1, item.quantity - 1),
            }
          : item
      );

    saveCart(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter(
      (item) => item.cartId !== id
    );

    saveCart(updated);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.totalPrice || 0),
    0
  );

  const totalQuantity = cartItems.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50/40">

        <div className="mx-auto max-w-5xl px-5 py-20 text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#0B2D5C] to-[#E5007D] text-white shadow-xl">
            <ShoppingCart size={42} />
          </div>

          <h1 className="mt-7 text-4xl font-black text-[#0B2D5C]">
            Your Cart is Empty
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-slate-500">
            You haven't added any printing products yet.
            Explore our products and start creating.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] px-7 py-4 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Explore Products
            <ArrowRight size={19} />
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50/40">

      {/* HEADER */}
      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">

          <p className="text-sm font-black uppercase tracking-widest text-[#E5007D]">
            RGraphics
          </p>

          <h1 className="mt-2 text-4xl font-black text-[#0B2D5C]">
            Shopping Cart
          </h1>

          <p className="mt-2 text-slate-500">
            Review your customized printing products before checkout.
          </p>

        </div>

      </section>


      {/* CART */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">

          {/* ITEMS */}
          <div className="space-y-5">

            {cartItems.map((item) => (
              <article
                key={item.cartId}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >

                <div className="flex flex-col gap-5 sm:flex-row">

                  {/* PREVIEW */}
                  <div className="flex h-40 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-100 sm:w-52">

                    {item.designPreview ? (
                      <img
                        src={item.designPreview}
                        alt={item.productName}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <ShoppingCart
                        size={35}
                        className="text-slate-300"
                      />
                    )}

                  </div>


                  {/* DETAILS */}
                  <div className="flex flex-1 flex-col">

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <p className="text-xs font-black uppercase tracking-wider text-[#E5007D]">
                          {item.productName}
                        </p>

                        <h2 className="mt-1 text-xl font-black text-[#0B2D5C]">
                          Custom Banner
                        </h2>

                      </div>

                      <button
                        onClick={() => removeItem(item.cartId)}
                        className="rounded-xl p-2 text-red-500 hover:bg-red-50"
                        title="Remove item"
                      >
                        <Trash2 size={19} />
                      </button>

                    </div>


                    {/* DETAILS */}
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">

                      <div>
                        <p className="text-slate-400">
                          Size
                        </p>

                        <p className="font-bold text-slate-700">
                          {Number(item.widthInFeet).toFixed(2)} ×{" "}
                          {Number(item.heightInFeet).toFixed(2)} ft
                        </p>
                      </div>


                      <div>
                        <p className="text-slate-400">
                          Area
                        </p>

                        <p className="font-bold text-slate-700">
                          {Number(item.squareFeet).toFixed(2)} sq.ft
                        </p>
                      </div>


                      <div>
                        <p className="text-slate-400">
                          Quality
                        </p>

                        <p className="font-bold text-slate-700">
                          {item.quality}
                        </p>
                      </div>


                      <div>
                        <p className="text-slate-400">
                          Rate
                        </p>

                        <p className="font-bold text-slate-700">
                          ₹{item.rate}/sq.ft
                        </p>
                      </div>

                    </div>


                    {/* DESIGN */}
                    {item.designFileName && (
                      <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">
                        <Upload size={15} />
                        {item.designFileName}
                      </div>
                    )}


                    {/* BOTTOM */}
                    <div className="mt-5 flex flex-col justify-between gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">

                      {/* QUANTITY */}
                      <div className="flex items-center gap-3">

                        <span className="text-sm font-semibold text-slate-500">
                          Quantity
                        </span>

                        <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1">

                          <button
                            onClick={() =>
                              decreaseQuantity(item.cartId)
                            }
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#0B2D5C] shadow-sm hover:bg-slate-100"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="flex min-w-10 justify-center font-black text-[#0B2D5C]">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.cartId)
                            }
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#0B2D5C] shadow-sm hover:bg-slate-100"
                          >
                            <Plus size={16} />
                          </button>

                        </div>

                      </div>


                      {/* PRICE */}
                      <div className="text-left sm:text-right">

                        <p className="text-xs text-slate-400">
                          Item Total
                        </p>

                        <p className="text-2xl font-black text-[#E5007D]">
                          ₹{Number(item.totalPrice).toFixed(2)}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </article>
            ))}

          </div>


          {/* SUMMARY */}
          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">

            <h2 className="text-xl font-black text-[#0B2D5C]">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Products
                </span>

                <span className="font-bold text-slate-700">
                  {totalQuantity}
                </span>
              </div>


              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Subtotal
                </span>

                <span className="font-bold text-slate-700">
                  ₹{subtotal.toFixed(2)}
                </span>
              </div>


              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Delivery
                </span>

                <span className="font-bold text-slate-700">
                  Collect From Shop
                </span>
              </div>


              <div className="border-t border-slate-200 pt-5">

                <div className="flex items-end justify-between">

                  <div>
                    <p className="text-sm text-slate-500">
                      Total
                    </p>

                    <p className="text-xs text-slate-400">
                      Taxes/payment calculated at checkout
                    </p>
                  </div>

                  <p className="text-3xl font-black text-[#E5007D]">
                    ₹{subtotal.toFixed(2)}
                  </p>

                </div>

              </div>

            </div>


            <Link
              to="/checkout"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] px-6 py-4 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Proceed to Checkout
              <ArrowRight size={19} />
            </Link>


            <Link
              to="/products"
              className="mt-3 flex w-full items-center justify-center rounded-xl border border-slate-200 px-6 py-3 font-bold text-[#0B2D5C] hover:bg-slate-50"
            >
              Continue Shopping
            </Link>

          </aside>

        </div>

      </section>

    </main>
  );
}