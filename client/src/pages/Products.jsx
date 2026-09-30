import { useEffect, useMemo, useState } from "react";
import {
  Search,
  Star,
  SlidersHorizontal,
  X,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5000/api/products";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load products.");
        setLoading(false);
      });
  }, []);

  const categories = useMemo(() => {
    return ["All", ...new Set(products.map((product) => product.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "price-low") {
      result.sort((a, b) => a.startingPrice - b.startingPrice);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.startingPrice - a.startingPrice);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, search, category, sort]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#E5007D]" />
          <p className="mt-4 font-semibold text-[#0B2D5C]">
            Loading products...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-600">
          {error}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50/40">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}
      <section className="border-b border-slate-200 bg-gradient-to-r from-white via-[#FFF8FC] to-[#F5F8FF]">

        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

          <div className="max-w-3xl">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E5007D]/20 bg-[#E5007D]/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#E5007D]" />

              <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5007D]">
                RGraphics Products
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-[#0B2D5C] md:text-5xl">
              Print Products for{" "}
              <span className="bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] bg-clip-text text-transparent">
                Every Idea
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Explore professional printing products for businesses,
              events, promotions and personal projects.
            </p>

          </div>


          {/* Search + Sort */}
          <div className="mt-9 flex flex-col gap-4 lg:flex-row">

            {/* Search */}
            <div className="relative flex-1">

              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm outline-none shadow-sm transition focus:border-[#E5007D] focus:ring-4 focus:ring-[#E5007D]/10"
              />

            </div>


            {/* Sort */}
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 shadow-sm">

              <SlidersHorizontal
                size={18}
                className="text-[#0B2D5C]"
              />

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="min-w-48 bg-transparent py-4 text-sm font-semibold text-slate-700 outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">
                  Price: Low to High
                </option>
                <option value="price-high">
                  Price: High to Low
                </option>
                <option value="rating">
                  Highest Rated
                </option>
              </select>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCTS AREA
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">

        {/* Mobile Filter Button */}
        <button
          onClick={() => setShowFilters(true)}
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#0B2D5C] shadow-sm lg:hidden"
        >
          <SlidersHorizontal size={18} />
          Filters
        </button>


        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">


          {/* =================================================
              DESKTOP SIDEBAR
          ================================================= */}
          <aside className="hidden lg:block">

            <div className="sticky top-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

              <div className="flex items-center justify-between">

                <h2 className="text-lg font-black text-[#0B2D5C]">
                  Popular Products
                </h2>

                {category !== "All" && (
                  <button
                    onClick={() => setCategory("All")}
                    className="text-xs font-bold text-[#E5007D]"
                  >
                    Clear
                  </button>
                )}

              </div>


              <div className="mt-5 space-y-1">

                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${
                      category === item
                        ? "bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] text-white shadow-md"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[#0B2D5C]"
                    }`}
                  >
                    <span>{item}</span>

                    <ChevronDown
                      size={15}
                      className="-rotate-90"
                    />
                  </button>
                ))}

              </div>


              {/* Trust box */}
              <div className="mt-7 rounded-2xl bg-gradient-to-br from-[#0B2D5C] to-[#E5007D] p-4 text-white">

                <p className="text-sm font-black">
                  Need a custom print?
                </p>

                <p className="mt-2 text-xs leading-5 text-white/80">
                  Choose a product and customize it according to
                  your requirements.
                </p>

              </div>

            </div>

          </aside>


          {/* =================================================
              PRODUCT GRID
          ================================================= */}
          <div>

            {/* Result Header */}
            <div className="mb-6 flex items-center justify-between">

              <div>
                <p className="text-sm font-bold text-[#E5007D]">
                  Explore Printing
                </p>

                <h2 className="mt-1 text-2xl font-black text-[#0B2D5C]">
                  {category === "All" ? "All Products" : category}
                </h2>
              </div>

              <p className="text-sm font-medium text-slate-500">
                {filteredProducts.length} products
              </p>

            </div>


            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

              {filteredProducts.map((product) => (
                <article
                  key={product._id}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-[#E5007D]/30 hover:shadow-xl"
                >

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Category badge */}
                    <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#0B2D5C] shadow-sm backdrop-blur">
                      {product.category}
                    </div>

                  </div>


                  {/* Details */}
                  <div className="p-5">

                    <h3 className="text-xl font-black text-[#0B2D5C]">
                      {product.name}
                    </h3>

                    <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                      {product.description}
                    </p>


                    {/* Rating */}
                    <div className="mt-4 flex items-center gap-2">

                      <div className="flex items-center gap-0.5 text-[#FF8A00]">

                        <Star
                          size={16}
                          className="fill-current"
                        />

                        <span className="text-sm font-bold">
                          {product.rating}
                        </span>

                      </div>

                      <span className="text-xs text-slate-400">
                        Customer rating
                      </span>

                    </div>


                    {/* Price + Button */}
                    <div className="mt-5 flex items-end justify-between gap-3 border-t border-slate-100 pt-5">

                      <div>
                        <p className="text-xs text-slate-400">
                          Starting at
                        </p>

                        <p className="text-2xl font-black text-[#0B2D5C]">
                          ₹{product.startingPrice}
                        </p>
                      </div>


                      <Link
                        to={`/products/${product._id}/customize`}
                        className="group/button inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] px-5 py-3 text-sm font-extrabold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        Customize
                      </Link>

                    </div>

                  </div>

                </article>
              ))}

            </div>


            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                  <Search
                    size={28}
                    className="text-slate-400"
                  />
                </div>

                <h2 className="mt-5 text-xl font-black text-[#0B2D5C]">
                  No products found
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Try another search or select a different category.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                  }}
                  className="mt-5 rounded-xl bg-[#0B2D5C] px-5 py-3 text-sm font-bold text-white"
                >
                  Clear Filters
                </button>

              </div>
            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          MOBILE FILTER DRAWER
      ===================================================== */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">

          {/* Overlay */}
          <button
            onClick={() => setShowFilters(false)}
            className="absolute inset-0 bg-slate-950/50"
            aria-label="Close filters"
          />

          {/* Drawer */}
          <aside className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-white p-6 shadow-2xl">

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-black text-[#0B2D5C]">
                Filters
              </h2>

              <button
                onClick={() => setShowFilters(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
              >
                <X size={20} />
              </button>

            </div>


            <div className="mt-6">

              <p className="text-sm font-black uppercase tracking-wider text-slate-400">
                Categories
              </p>

              <div className="mt-3 space-y-1">

                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setCategory(item);
                      setShowFilters(false);
                    }}
                    className={`flex w-full rounded-xl px-4 py-3 text-left text-sm font-semibold ${
                      category === item
                        ? "bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] text-white"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {item}
                  </button>
                ))}

              </div>

            </div>

          </aside>

        </div>
      )}

    </main>
  );
}