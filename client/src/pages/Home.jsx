import { Link } from "react-router-dom";
import { useState } from "react";

import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Palette,
  Printer,
  ShieldCheck,
  Star,
  Truck,
  Upload,
} from "lucide-react";

const categories = [
  {
    name: "Banners",
    description: "Large format printing for every occasion.",
    href: "/products",
    icon: "🖼️",
  },
  {
    name: "Business Cards",
    description: "Professional cards for your brand.",
    href: "/products",
    icon: "💳",
  },
  {
    name: "Flyers",
    description: "Promote your business with impact.",
    href: "/products",
    icon: "📄",
  },
  {
    name: "Posters",
    description: "Make your message stand out.",
    href: "/products",
    icon: "📰",
  },
  {
    name: "Stickers & Labels",
    description: "Custom stickers for your products.",
    href: "/products",
    icon: "🏷️",
  },
  {
    name: "Invitations",
    description: "Beautiful prints for special moments.",
    href: "/products",
    icon: "💌",
  },
];

const benefits = [
  {
    icon: Printer,
    title: "Professional Printing",
    text: "Quality-focused printing for personal and business needs.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    text: "Create and print designs that match your exact requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality You Can Trust",
    text: "Carefully prepared print orders with reliable production.",
  },
  {
    icon: Truck,
    title: "Easy Delivery",
    text: "Get your printed products delivered to your doorstep.",
  },
];

const instagramImages = [
  "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?auto=format&fit=crop&w=700&q=85",
];

const reviews = [
  {
    name: "Rahul",
    text: "The print quality was excellent and the ordering process was very easy.",
  },
  {
    name: "Sneha",
    text: "I loved how simple it was to customize the printing requirements.",
  },
  {
    name: "Amit",
    text: "Good quality prints and a professional overall experience.",
  },
];

export default function Home() {
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* =====================================================
          ANNOUNCEMENT BAR
      ====================================================== */}
      <div className="bg-slate-950 px-4 py-2 text-center text-sm font-medium text-white">
        Custom printing made simple — Print Your Ideas. Create Your Brand.
      </div>

      {/* =====================================================
          HEADER
      ====================================================== */}
      <header className="border-b border-slate-200 bg-white">
  <div className="mx-auto flex h-20 max-w-7xl items-center gap-5 px-5 lg:px-8">

    {/* ================= LOGO ================= */}
    <Link
      to="/"
      className="flex shrink-0 items-center"
    >
      <img
        src="/RG-New.png"
        alt="RGraphics"
        className="h-20 w-auto object-contain"
      />
    </Link>

    {/* ================= CONTACT ================= */}
    <div className="hidden shrink-0 border-l border-slate-200 pl-5 md:block">
      <p className="text-base font-extrabold leading-tight text-slate-900">
        80559 55188
      </p>

      <p className="mt-0.5 text-xs font-semibold leading-tight text-slate-500">
        Quality Customer Service
      </p>
    </div>

    {/* ================= SEARCH ================= */}
    <div className="ml-auto w-[260px] shrink-0 lg:w-[320px]">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products"
          className="h-11 w-full rounded-lg border border-slate-300 bg-white pl-11 pr-4 text-sm font-medium text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      </div>
    </div>

    {/* ================= LOGIN ================= */}
    <Link
      to="/login"
      className="hidden shrink-0 items-center gap-2 rounded-lg px-2 py-2 transition hover:bg-slate-50 sm:flex"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5 text-slate-700"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c1.5-4 4.1-6 8-6s6.5 2 8 6" />
        </svg>
      </div>

      <div className="leading-tight">
        <p className="text-[11px] font-medium text-slate-500">
          HI,
        </p>

        <p className="text-sm font-bold text-slate-900">
          Log in
        </p>
      </div>
    </Link>

    {/* ================= CART ================= */}
    <Link
      to="/cart"
      className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-white transition hover:border-blue-500 hover:bg-blue-50"
      aria-label="Cart"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5 text-slate-700"
      >
        <circle cx="9" cy="20" r="1" />
        <circle cx="19" cy="20" r="1" />
        <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" />
      </svg>

      <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
        0
      </span>
    </Link>

  </div>
</header>
{/* =====================================================
    CATEGORY NAVIGATION BAR
===================================================== */}
<section className="border-b border-white/20 bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] text-white">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">

    <div className="grid grid-cols-2 gap-2 py-3 sm:grid-cols-3 lg:grid-cols-6">

      {/* =================================================
          1. MARKETING MATERIAL
      ================================================== */}
      <div className="group relative">

        <Link
          to="/products?category=Marketing%20Material"
          className="flex h-12 w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-center text-sm font-bold text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
        >
          Marketing Material
        </Link>

        {/* HOVER SAMPLE */}
        <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[calc(100vw-2rem)] max-w-[760px] -translate-x-1/2 pt-2 opacity-0 invisible transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Explore
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-900">
                  Marketing Material
                </h3>
              </div>

              <Link
                to="/products?category=Marketing%20Material"
                className="text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                View All →
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">

              {[
                ["Flyers", "📄"],
                ["Brochures", "📑"],
                ["Posters", "📰"],
                ["Business Cards", "💳"],
              ].map(([name, icon]) => (
                <Link
                  key={name}
                  to="/products?category=Marketing%20Material"
                  className="group/card rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md"
                >
                  <div className="flex h-24 items-center justify-center rounded-lg bg-white text-4xl">
                    {icon}
                  </div>

                  <p className="mt-3 truncate text-sm font-bold text-slate-800 group-hover/card:text-blue-600">
                    {name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Explore →
                  </p>
                </Link>
              ))}

            </div>
          </div>
        </div>
      </div>


      {/* =================================================
          2. STICKERS & LABELS
      ================================================== */}
      <div className="group relative">

        <Link
          to="/products?category=Stickers%20%26%20Labels"
          className="flex h-12 w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-center text-sm font-bold text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
        >
          Stickers &amp; Labels
        </Link>

        <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[calc(100vw-2rem)] max-w-[760px] -translate-x-1/2 pt-2 opacity-0 invisible transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Explore
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-900">
                  Stickers &amp; Labels
                </h3>
              </div>

              <Link
                to="/products?category=Stickers%20%26%20Labels"
                className="text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                View All →
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">

              {[
                ["Custom Stickers", "🏷️"],
                ["Product Labels", "🔖"],
                ["Vinyl Stickers", "✨"],
                ["Round Stickers", "⭕"],
              ].map(([name, icon]) => (
                <Link
                  key={name}
                  to="/products?category=Stickers%20%26%20Labels"
                  className="group/card rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md"
                >
                  <div className="flex h-24 items-center justify-center rounded-lg bg-white text-4xl">
                    {icon}
                  </div>

                  <p className="mt-3 truncate text-sm font-bold text-slate-800 group-hover/card:text-blue-600">
                    {name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Explore →
                  </p>
                </Link>
              ))}

            </div>
          </div>
        </div>
      </div>


      {/* =================================================
          3. BOXES & PACKAGING
      ================================================== */}
      <div className="group relative">

        <Link
          to="/products?category=Boxes%20%26%20Packaging"
          className="flex h-12 w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-center text-sm font-bold text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
        >
          Boxes &amp; Packaging
        </Link>

        <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[calc(100vw-2rem)] max-w-[760px] -translate-x-1/2 pt-2 opacity-0 invisible transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Explore
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-900">
                  Boxes &amp; Packaging
                </h3>
              </div>

              <Link
                to="/products?category=Boxes%20%26%20Packaging"
                className="text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                View All →
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">

              {[
                ["Product Boxes", "📦"],
                ["Gift Boxes", "🎁"],
                ["Packaging Sleeves", "📫"],
                ["Shipping Boxes", "🚚"],
              ].map(([name, icon]) => (
                <Link
                  key={name}
                  to="/products?category=Boxes%20%26%20Packaging"
                  className="group/card rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md"
                >
                  <div className="flex h-24 items-center justify-center rounded-lg bg-white text-4xl">
                    {icon}
                  </div>

                  <p className="mt-3 truncate text-sm font-bold text-slate-800 group-hover/card:text-blue-600">
                    {name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Explore →
                  </p>
                </Link>
              ))}

            </div>
          </div>
        </div>
      </div>


      {/* =================================================
          4. SIGNS & BANNER
      ================================================== */}
      <div className="group relative">

        <Link
          to="/products?category=Signs%20%26%20Banner"
          className="flex h-12 w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-center text-sm font-bold text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
        >
          Signs &amp; Banner
        </Link>

        <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[calc(100vw-2rem)] max-w-[760px] -translate-x-1/2 pt-2 opacity-0 invisible transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Explore
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-900">
                  Signs &amp; Banner
                </h3>
              </div>

              <Link
                to="/products?category=Signs%20%26%20Banner"
                className="text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                View All →
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">

              {[
                ["Banners", "🖼️"],
                ["Flex Signs", "📢"],
                ["Display Boards", "🪧"],
                ["Roll-up Banners", "🎞️"],
              ].map(([name, icon]) => (
                <Link
                  key={name}
                  to="/products?category=Signs%20%26%20Banner"
                  className="group/card rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md"
                >
                  <div className="flex h-24 items-center justify-center rounded-lg bg-white text-4xl">
                    {icon}
                  </div>

                  <p className="mt-3 truncate text-sm font-bold text-slate-800 group-hover/card:text-blue-600">
                    {name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Explore →
                  </p>
                </Link>
              ))}

            </div>
          </div>
        </div>
      </div>


      {/* =================================================
          5. APPAREL & PROMO
      ================================================== */}
      <div className="group relative">

        <Link
          to="/products?category=Apparel%20%26%20Promo"
          className="flex h-12 w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-center text-sm font-bold text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
        >
          Apparel &amp; Promo
        </Link>

        <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[calc(100vw-2rem)] max-w-[760px] -translate-x-1/2 pt-2 opacity-0 invisible transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Explore
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-900">
                  Apparel &amp; Promo
                </h3>
              </div>

              <Link
                to="/products?category=Apparel%20%26%20Promo"
                className="text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                View All →
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">

              {[
                ["T-Shirts", "👕"],
                ["Caps", "🧢"],
                ["Mugs", "☕"],
                ["Promo Items", "🎁"],
              ].map(([name, icon]) => (
                <Link
                  key={name}
                  to="/products?category=Apparel%20%26%20Promo"
                  className="group/card rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md"
                >
                  <div className="flex h-24 items-center justify-center rounded-lg bg-white text-4xl">
                    {icon}
                  </div>

                  <p className="mt-3 truncate text-sm font-bold text-slate-800 group-hover/card:text-blue-600">
                    {name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Explore →
                  </p>
                </Link>
              ))}

            </div>
          </div>
        </div>
      </div>


      {/* =================================================
          6. FEATURED COLLECTIONS
      ================================================== */}
      <div className="group relative">

        <Link
          to="/products?category=Featured%20Collections"
          className="flex h-12 w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-center text-sm font-bold text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
        >
          Featured Collections
        </Link>

        <div className="pointer-events-none absolute right-0 top-full z-50 w-[calc(100vw-2rem)] max-w-[760px] pt-2 opacity-0 invisible transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Explore
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-900">
                  Featured Collections
                </h3>
              </div>

              <Link
                to="/products?category=Featured%20Collections"
                className="text-sm font-bold text-blue-600 hover:text-blue-700"
              >
                View All →
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">

              {[
                ["Business Essentials", "💼"],
                ["Event Collection", "🎉"],
                ["Festival Collection", "🎊"],
                ["New Arrivals", "⭐"],
              ].map(([name, icon]) => (
                <Link
                  key={name}
                  to="/products?category=Featured%20Collections"
                  className="group/card rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md"
                >
                  <div className="flex h-24 items-center justify-center rounded-lg bg-white text-4xl">
                    {icon}
                  </div>

                  <p className="mt-3 truncate text-sm font-bold text-slate-800 group-hover/card:text-blue-600">
                    {name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Explore →
                  </p>
                </Link>
              ))}

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
 {/* =====================================================
    RGRAPHICS HERO
===================================================== */}

<section
  className="relative overflow-hidden bg-white"
>

  {/* Main Hero Content */}
  <div className="relative z-10 mx-auto grid min-h-[calc(100vh-150px)] max-w-7xl items-center gap-4 px-5 py-6 sm:py-8 lg:grid-cols-2 lg:px-8 lg:py-8">

    {/* =================================================
        LEFT SIDE
    ================================================== */}

    <div className="max-w-2xl">

      {/* SMALL BRAND LINE */}
      <div className="mb-5 flex items-center gap-3">

        <span className="h-[3px] w-10 rounded-full bg-[#0B2D5C]" />

        <span className="rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0B2D5C] shadow-sm backdrop-blur">
          Premium Printing Solutions
        </span>

      </div>


      {/* MAIN QUOTE */}
      <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-[68px]">

        <span className="block text-[#0B2D5C] drop-shadow-sm">
          Print Your Ideas.
        </span>

        <span className="mt-2 block text-[#E5007D] drop-shadow-sm">
          Create Your Brand.
        </span>

      </h1>


      {/* ACCENT LINE */}
      <div className="mt-5 flex items-center gap-2">

        <span className="h-1.5 w-24 rounded-full bg-[#0B2D5C]" />

        <span className="h-1.5 w-12 rounded-full bg-[#E5007D]" />

        <span className="h-1.5 w-7 rounded-full bg-[#F47B20]" />

      </div>


      {/* DESCRIPTION */}
      <p className="mt-6 max-w-xl rounded-xl bg-white/65 p-3 text-lg leading-8 text-slate-700 shadow-sm backdrop-blur-sm">
        Bring your ideas to life with premium-quality custom printing
        for your business, events, promotions and special moments.
      </p>


      {/* SHOP NOW BUTTON */}
      <div className="mt-8">

        <Link
          to="/products"
          className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] px-8 py-4 text-base font-extrabold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >

          <span>
            Shop Now
          </span>

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />

        </Link>

      </div>


      {/* TRUST POINTS */}
      <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">

        {/* QUALITY */}
        <div className="flex items-center gap-2 rounded-xl bg-white/75 p-3 shadow-sm backdrop-blur-sm">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0B2D5C]">
            <ShieldCheck size={18} />
          </div>

          <span className="text-xs font-bold leading-tight text-slate-700">
            Premium
            <br />
            Quality
          </span>

        </div>


        {/* DELIVERY */}
        <div className="flex items-center gap-2 rounded-xl bg-white/75 p-3 shadow-sm backdrop-blur-sm">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-50 text-[#E5007D]">
            <Truck size={18} />
          </div>

          <span className="text-xs font-bold leading-tight text-slate-700">
            Fast
            <br />
            Delivery
          </span>

        </div>


        {/* CUSTOM */}
        <div className="flex items-center gap-2 rounded-xl bg-white/75 p-3 shadow-sm backdrop-blur-sm">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#F47B20]">
            <Palette size={18} />
          </div>

          <span className="text-xs font-bold leading-tight text-slate-700">
            Custom
            <br />
            Designs
          </span>

        </div>


        {/* TRUST */}
        <div className="flex items-center gap-2 rounded-xl bg-white/75 p-3 shadow-sm backdrop-blur-sm">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0B2D5C]">
            <Check size={18} />
          </div>

          <span className="text-xs font-bold leading-tight text-slate-700">
            Trusted
            <br />
            Service
          </span>

        </div>

      </div>

    </div>


    {/* =================================================
        RIGHT SIDE IMAGE
    ================================================== */}

    <div className="flex items-center justify-center">
  <img
    src="/HERO.png"
    alt="RGraphics Printing Products"
    className="h-auto w-full max-w-2xl scale-110 object-contain"
  />
</div>

  </div>

</section>
           {/* =====================================================
          POPULAR PRODUCTS + TOP SELLERS
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

        {/* SECTION HEADER */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
           <p className="text-sm font-bold uppercase tracking-widest text-[#E5007D]">
  Explore Printing
</p>
            <h2 className="mt-2 text-4xl font-black tracking-tight">
              Popular Products
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600">
              Choose what you need and customize your print requirements.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700"
          >
            View All Products
            <ChevronRight size={18} />
          </Link>

        </div>


        {/* =====================================================
            POPULAR PRODUCTS + SUBMENU
        ====================================================== */}

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">


          {/* LEFT SIDEBAR */}
          <div className="relative z-30">

            <div className="overflow-visible rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div className="border-b border-slate-200 px-5 py-4">
                <h3 className="font-bold text-slate-900">
                  Popular Products
                </h3>
              </div>


              <div className="py-2">

                {[
                  {
                    name: "Apparel",
                    products: [
                      "T-Shirts",
                      "Hoodies",
                      "Polo Shirts",
                      "Caps",
                      "Jackets",
                    ],
                  },

                  {
                    name: "Banners",
                    products: [
                      "Vinyl Banners",
                      "Retractable Banners",
                      "X Banner Stands",
                      "Table Banners",
                      "Step and Repeat Banners",
                      "Mesh Banners",
                      "Pole Banners",
                      "Fabric Banners",
                      "Table Top Banners",
                      "Deluxe Retractable Banners",
                    ],
                  },

                  {
                    name: "Boxes",
                    products: [
                      "Product Boxes",
                      "Shipping Boxes",
                      "Mailer Boxes",
                      "Gift Boxes",
                    ],
                  },

                  {
                    name: "Brochures",
                    products: [
                      "Bi-Fold Brochures",
                      "Tri-Fold Brochures",
                      "Z-Fold Brochures",
                      "Booklets",
                    ],
                  },

                  {
                    name: "Business Cards",
                    products: [
                      "Standard Business Cards",
                      "Premium Business Cards",
                      "Rounded Corner Cards",
                      "Folded Business Cards",
                    ],
                  },

                  {
                    name: "Flyers",
                    products: [
                      "Standard Flyers",
                      "Business Flyers",
                      "Die-Cut Flyers",
                      "Folded Flyers",
                    ],
                  },

                  {
                    name: "Labels",
                    products: [
                      "Product Labels",
                      "Roll Labels",
                      "Bottle Labels",
                      "Packaging Labels",
                    ],
                  },

                  {
                    name: "Packaging",
                    products: [
                      "Mailer Boxes",
                      "Pouches",
                      "Paper Bags",
                      "Packaging Sleeves",
                    ],
                  },

                  {
                    name: "Postcards",
                    products: [
                      "Standard Postcards",
                      "Premium Postcards",
                      "Die-Cut Postcards",
                    ],
                  },

                  {
                    name: "Promotional Products",
                    products: [
                      "Mugs",
                      "Pens",
                      "Notebooks",
                      "Tote Bags",
                      "Keychains",
                    ],
                  },

                  {
                    name: "Signs",
                    products: [
                      "Yard Signs",
                      "PVC Signs",
                      "Acrylic Signs",
                      "Metal Signs",
                    ],
                  },

                  {
                    name: "Stickers",
                    products: [
                      "Custom Stickers",
                      "Die-Cut Stickers",
                      "Vinyl Stickers",
                      "Round Stickers",
                      "Sticker Sheets",
                    ],
                  },

                  {
                    name: "Custom Product Builder",
                    products: [],
                  },

                ].map((category) => (

                  <div
                    key={category.name}
                    className="group relative"
                  >

                    {/* CATEGORY */}
                    <Link
                      to={`/products?category=${encodeURIComponent(
                        category.name
                      )}`}
                      className="flex items-center justify-between px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                    >

                      <span>
                        {category.name}
                      </span>

                      {category.products.length > 0 && (
                        <ChevronRight
                          size={17}
                          className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                        />
                      )}

                    </Link>


                    {/* =================================================
                        HOVER SUBMENU
                    ================================================== */}

                    {category.products.length > 0 && (

                      <div
                        className="
                          invisible absolute left-full top-0 z-50 ml-1
                          w-[310px]
                          translate-x-2
                          rounded-2xl
                          border border-slate-200
                          bg-white
                          p-3
                          opacity-0
                          shadow-2xl
                          transition-all duration-200
                          group-hover:visible
                          group-hover:translate-x-0
                          group-hover:opacity-100
                        "
                      >

                        <div className="mb-2 border-b border-slate-100 px-3 pb-3">

                          <h4 className="font-bold text-slate-900">
                            {category.name}
                          </h4>

                          <p className="mt-1 text-xs text-slate-500">
                            Choose a product
                          </p>

                        </div>


                        <div className="grid grid-cols-1 gap-1">

                          {category.products.map((product) => (

                            <Link
                              key={product}
                              to={`/products?category=${encodeURIComponent(
                                category.name
                              )}&product=${encodeURIComponent(product)}`}
                              className="rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-blue-600 hover:text-white"
                            >
                              {product}
                            </Link>

                          ))}

                        </div>

                      </div>

                    )}

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* =====================================================
              RIGHT SIDE
              TOP SELLERS + FEATURED PRODUCTS
          ====================================================== */}

          <div className="space-y-10">


            {/* =================================================
                TOP SELLERS
            ================================================== */}

            <div>

              <div className="mb-5 flex items-center justify-between">

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Top Sellers
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Our most ordered printing products
                  </p>

                </div>

                <Link
                  to="/products"
                  className="text-sm font-bold text-blue-600 hover:underline"
                >
                  View All
                </Link>

              </div>


              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                {[
                  {
                    name: "Business Cards",
                    category: "Business Printing",
                    price: "₹299",
                  },

                  {
                    name: "Vinyl Banners",
                    category: "Banners",
                    price: "₹799",
                  },

                  {
                    name: "Flyers",
                    category: "Marketing",
                    price: "₹499",
                  },

                  {
                    name: "Custom Stickers",
                    category: "Stickers",
                    price: "₹299",
                  },

                ].map((product) => (

                  <Link
                    key={product.name}
                    to={`/products?category=${encodeURIComponent(
                      product.category
                    )}`}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                  >

                    <div className="flex h-40 items-center justify-center bg-slate-50">

                      <div className="text-center">

                        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">

                          <span className="text-2xl">
                            🖨️
                          </span>

                        </div>

                        <span className="text-xs font-medium text-slate-400">
                          RGraphics
                        </span>

                      </div>

                    </div>


                    <div className="p-4">

                      <h4 className="font-bold text-slate-900">
                        {product.name}
                      </h4>

                      <p className="mt-1 text-xs text-slate-500">
                        {product.category}
                      </p>

                      <p className="mt-3 font-bold text-blue-600">
                        Starting {product.price}
                      </p>

                    </div>

                  </Link>

                ))}

              </div>

            </div>


            {/* =================================================
                FEATURED PRODUCTS
            ================================================== */}

            <div>

              <div className="mb-5 flex items-center justify-between">

                <div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    Featured Products
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Popular products for every printing need
                  </p>

                </div>

                <Link
                  to="/products"
                  className="text-sm font-bold text-blue-600 hover:underline"
                >
                  View All
                </Link>

              </div>


              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                {[
                  {
                    name: "Brochures",
                    category: "Marketing",
                    price: "₹699",
                  },

                  {
                    name: "Posters",
                    category: "Marketing",
                    price: "₹399",
                  },

                  {
                    name: "Photo Frames",
                    category: "Photo Products",
                    price: "₹499",
                  },

                  {
                    name: "Invitations",
                    category: "Events",
                    price: "₹599",
                  },

                ].map((product) => (

                  <Link
                    key={product.name}
                    to={`/products?category=${encodeURIComponent(
                      product.category
                    )}`}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                  >

                    <div className="flex h-40 items-center justify-center bg-slate-50">

                      <div className="text-center">

                        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">

                          <span className="text-2xl">
                            🖨️
                          </span>

                        </div>

                        <span className="text-xs font-medium text-slate-400">
                          RGraphics
                        </span>

                      </div>

                    </div>


                    <div className="p-4">

                      <h4 className="font-bold text-slate-900">
                        {product.name}
                      </h4>

                      <p className="mt-1 text-xs text-slate-500">
                        {product.category}
                      </p>

                      <p className="mt-3 font-bold text-blue-600">
                        Starting {product.price}
                      </p>

                    </div>

                  </Link>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* =====================================================
          PRINTING SHOWCASE
      ====================================================== */}
      <section className="bg-gradient-to-r from-[#0B2D5C] to-[#E5007D]">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">

          <div className="overflow-hidden rounded-[2rem]">

            <img
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1400&q=90"
              alt="Printing production"
              className="h-[430px] w-full object-cover"
            />

          </div>

          <div className="text-white">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Made For Your Business
            </p>

            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Professional printing without the complicated process.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Select your product, customize what you need, upload your
              design and place your order — all from one simple platform.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-slate-950 transition hover:bg-slate-100"
            >
              Start Your Order
              <ArrowRight size={19} />
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
    HOW IT WORKS
===================================================== */}

<section className="relative overflow-hidden bg-slate-50 py-20">

  {/* Decorative background */}
  <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
  <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-pink-100/50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

    {/* HEADER */}
    <div className="mx-auto max-w-3xl text-center">

      <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#E5007D]">
        Simple &amp; Fast
      </p>

      <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2D5C] sm:text-5xl">
        How It Works
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        From choosing your product to receiving your final print,
        RGraphics makes the entire process simple.
      </p>

    </div>


    {/* STEPS */}
    <div className="relative mt-14">

      {/* Connecting line - desktop */}
      <div className="absolute left-[12%] right-[12%] top-12 hidden h-[2px] bg-gradient-to-r from-[#0B2D5C] via-[#E5007D] to-[#0B2D5C] lg:block" />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {/* STEP 1 */}
        <div className="group relative text-center">

          <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-slate-200 transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B2D5C] text-2xl font-black text-white">
              01
            </div>

          </div>

          <div className="mt-7 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              🛍️
            </div>

            <h3 className="mt-4 text-xl font-bold text-[#0B2D5C]">
              Choose Product
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Select banners, business cards, stickers, packaging
              or any product you need.
            </p>

          </div>

        </div>


        {/* STEP 2 */}
        <div className="group relative text-center">

          <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-slate-200 transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E5007D] text-2xl font-black text-white">
              02
            </div>

          </div>

          <div className="mt-7 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-2xl">
              🎨
            </div>

            <h3 className="mt-4 text-xl font-bold text-[#0B2D5C]">
              Customize
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Choose your size, material, quantity and other
              printing requirements.
            </p>

          </div>

        </div>


        {/* STEP 3 */}
        <div className="group relative text-center">

          <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-slate-200 transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B2D5C] text-2xl font-black text-white">
              03
            </div>

          </div>

          <div className="mt-7 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              📤
            </div>

            <h3 className="mt-4 text-xl font-bold text-[#0B2D5C]">
              Upload Design
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Upload your artwork or create your design online
              using our design tools.
            </p>

          </div>

        </div>


        {/* STEP 4 */}
        <div className="group relative text-center">

          <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-slate-200 transition duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E5007D] text-2xl font-black text-white">
              04
            </div>

          </div>

          <div className="mt-7 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-2xl">
              📦
            </div>

            <h3 className="mt-4 text-xl font-bold text-[#0B2D5C]">
              Get It Printed
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Place your order and receive professionally printed
              products at your doorstep.
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* CTA */}
    <div className="mt-14 text-center">

      <Link
        to="/products"
        className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] px-8 py-4 font-extrabold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >

        Start Your Order

        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />

      </Link>

    </div>

  </div>

</section>

     {/* =====================================================
    WHY RGRAPHICS
===================================================== */}

<section className="relative overflow-hidden bg-white py-20">

  {/* Decorative background */}
  <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
  <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-pink-50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

    {/* HEADER */}
    <div className="mx-auto max-w-3xl text-center">

      <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#E5007D]">
        Why Choose Us
      </p>

      <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2D5C] sm:text-5xl">
        Why RGraphics?
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        Quality printing, simple ordering and convenient delivery —
        everything you need in one place.
      </p>

    </div>


    {/* BENEFITS */}
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">


      {/* EASY ORDERING */}
      <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">

        <div className="flex items-center justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl transition group-hover:bg-[#0B2D5C] group-hover:text-white">
            🛒
          </div>

          <span className="text-4xl font-black text-slate-100">
            01
          </span>

        </div>

        <h3 className="mt-6 text-xl font-bold text-[#0B2D5C]">
          Easy Ordering
        </h3>

        <p className="mt-2 leading-7 text-slate-500">
          Select your product, customize your requirements and
          place your order in just a few simple steps.
        </p>

      </div>

 {/* CUSTOM PRINTING */}
      <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-pink-200 hover:shadow-xl">

        <div className="flex items-center justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-2xl transition group-hover:bg-[#E5007D] group-hover:text-white">
            🎨
          </div>

          <span className="text-4xl font-black text-slate-100">
            04
          </span>

        </div>

        <h3 className="mt-6 text-xl font-bold text-[#0B2D5C]">
          Custom Printing
        </h3>

        <p className="mt-2 leading-7 text-slate-500">
          Choose your size, material, quantity and finish to
          create prints that match your exact requirements.
        </p>

      </div>
       {/* QUALITY */}
      <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">

        <div className="flex items-center justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl transition group-hover:bg-[#0B2D5C] group-hover:text-white">
            ✓
          </div>

          <span className="text-4xl font-black text-slate-100">
            05
          </span>

        </div>

        <h3 className="mt-6 text-xl font-bold text-[#0B2D5C]">
          Quality Checked
        </h3>

        <p className="mt-2 leading-7 text-slate-500">
          Every order is handled with attention to print quality,
          finishing and your selected specifications.
        </p>

      </div>

      


      {/* SHOP PICKUP */}
      <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">

        <div className="flex items-center justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl transition group-hover:bg-[#0B2D5C] group-hover:text-white">
            🏪
          </div>

          <span className="text-4xl font-black text-slate-100">
            03
          </span>

        </div>

        <h3 className="mt-6 text-xl font-bold text-[#0B2D5C]">
          Collect From Our Shop
        </h3>

        <p className="mt-2 leading-7 text-slate-500">
          Prefer pickup? Place your order online and collect
          your finished print directly from our shop.
        </p>

      </div>


      




      {/* SUPPORT */}
      <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-pink-200 hover:shadow-xl">

        <div className="flex items-center justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-2xl transition group-hover:bg-[#E5007D] group-hover:text-white">
            📞
          </div>

          <span className="text-4xl font-black text-slate-100">
            06
          </span>

        </div>

        <h3 className="mt-6 text-xl font-bold text-[#0B2D5C]">
          Friendly Support
        </h3>

        <p className="mt-2 leading-7 text-slate-500">
          Need help with your order or printing requirements?
          Our team is here to assist you.
        </p>

      </div>

    </div>


    {/* BOTTOM CTA */}
    <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] px-6 py-8 sm:px-10">

      <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">

        <div>
          <h3 className="text-2xl font-black text-white">
            Ready to Print Your Ideas?
          </h3>

          <p className="mt-1 text-sm text-white/80">
            Order online or visit our shop for your printing needs.
          </p>
        </div>

        <Link
          to="/products"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-extrabold text-[#0B2D5C] transition hover:-translate-y-1 hover:shadow-xl"
        >
          Start Your Order
          <ArrowRight size={19} />
        </Link>

      </div>

    </div>

  </div>

</section>

      {/* =====================================================
    #PRINTEDBYRGRAPHICS
===================================================== */}
<section className="relative overflow-hidden bg-white py-20">
  {/* Decorative Background */}
  <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#0B2D5C]/5 blur-3xl" />
  <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#E5007D]/5 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E5007D]/20 bg-[#E5007D]/5 px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-[#E5007D]" />
        <span className="text-sm font-bold text-[#E5007D]">
          Our Print Community
        </span>
      </div>

      <h2 className="text-3xl font-black tracking-tight text-[#0B2D5C] sm:text-4xl lg:text-5xl">
        Show Us Your{" "}
        <span className="bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] bg-clip-text text-transparent">
          Prints
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        Love your RGraphics prints? Share your finished products with us
        and become part of the{" "}
        <span className="font-bold text-[#0B2D5C]">
          #PrintedByRGraphics
        </span>{" "}
        community.
      </p>
    </div>

    {/* Showcase Cards */}
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* Card 1 */}
      <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-64 items-center justify-center bg-gradient-to-br from-[#0B2D5C]/10 to-[#E5007D]/10">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-4xl shadow-lg transition duration-300 group-hover:scale-110">
              🪧
            </div>
            <p className="mt-4 text-sm font-bold text-slate-500">
              Banners & Signs
            </p>
          </div>
        </div>

        <div className="p-5">
          <p className="font-bold text-[#0B2D5C]">
            Make your brand visible.
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Professional prints made for your business.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-64 items-center justify-center bg-gradient-to-br from-[#E5007D]/10 to-[#FF8A00]/10">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-4xl shadow-lg transition duration-300 group-hover:scale-110">
              💳
            </div>
            <p className="mt-4 text-sm font-bold text-slate-500">
              Business Printing
            </p>
          </div>
        </div>

        <div className="p-5">
          <p className="font-bold text-[#0B2D5C]">
            Built for your business.
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Cards, flyers, brochures and more.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-64 items-center justify-center bg-gradient-to-br from-[#FF8A00]/10 to-[#0B2D5C]/10">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-4xl shadow-lg transition duration-300 group-hover:scale-110">
              🎁
            </div>
            <p className="mt-4 text-sm font-bold text-slate-500">
              Custom Products
            </p>
          </div>
        </div>

        <div className="p-5">
          <p className="font-bold text-[#0B2D5C]">
            Turn ideas into prints.
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Create something unique for every occasion.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="flex h-64 items-center justify-center bg-gradient-to-br from-[#0B2D5C]/10 to-[#FF8A00]/10">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-4xl shadow-lg transition duration-300 group-hover:scale-110">
              ✨
            </div>
            <p className="mt-4 text-sm font-bold text-slate-500">
              Creative Prints
            </p>
          </div>
        </div>

        <div className="p-5">
          <p className="font-bold text-[#0B2D5C]">
            Your design. Your style.
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Printed with care by RGraphics.
          </p>
        </div>
      </div>

    </div>

    {/* Hashtag CTA */}
    <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] px-6 py-8 text-center shadow-xl sm:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
        Share Your Print
      </p>

      <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
        #PrintedByRGraphics
      </h3>

      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
        Got something printed by RGraphics?
        Share it with your friends and tag us.
        Your creativity could be featured here!
      </p>

      <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-extrabold text-[#0B2D5C] shadow-lg transition hover:scale-105">
        <span>📸</span>
        <span>#PrintedByRGraphics</span>
      </div>
    </div>

  </div>
</section>

     {/* =====================================================
    TRUSTED PRINTING
===================================================== */}
<section className="relative overflow-hidden bg-slate-50 py-20">

  {/* Background Decorations */}
  <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#0B2D5C]/5 blur-3xl" />
  <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#E5007D]/5 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0B2D5C]/10 bg-white px-4 py-2 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#E5007D]" />
        <span className="text-sm font-bold text-[#0B2D5C]">
          Why Choose RGraphics?
        </span>
      </div>

      <h2 className="text-3xl font-black tracking-tight text-[#0B2D5C] sm:text-4xl lg:text-5xl">
        Trusted Printing for{" "}
        <span className="bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] bg-clip-text text-transparent">
          Every Idea
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        From business essentials to personal creations, RGraphics helps
        you turn your ideas into high-quality printed products.
      </p>

    </div>


    {/* Trust Cards */}
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* Quality */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B2D5C]/10 text-2xl transition duration-300 group-hover:scale-110">
          ✨
        </div>

        <h3 className="mt-6 text-xl font-extrabold text-[#0B2D5C]">
          Quality Printing
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Sharp prints, clean finishing and attention to detail
          for professional-looking results.
        </p>

      </div>


      {/* Customization */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E5007D]/10 text-2xl transition duration-300 group-hover:scale-110">
          🎨
        </div>

        <h3 className="mt-6 text-xl font-extrabold text-[#0B2D5C]">
          Made Your Way
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Choose your size, quantity, material and finish to
          create prints that match your requirements.
        </p>

      </div>


      {/* Business + Personal */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-2xl transition duration-300 group-hover:scale-110">
          🏢
        </div>

        <h3 className="mt-6 text-xl font-extrabold text-[#0B2D5C]">
          For Everyone
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Whether you are building a brand or creating something
          personal, we print it with care.
        </p>

      </div>


      {/* Shop Collection */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B2D5C]/10 text-2xl transition duration-300 group-hover:scale-110">
          🏪
        </div>

        <h3 className="mt-6 text-xl font-extrabold text-[#0B2D5C]">
          Local & Reliable
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Order online and collect your finished prints
          directly from our shop.
        </p>

      </div>

    </div>


    {/* Bottom Trust Banner */}
    <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] p-8 shadow-2xl sm:p-10">

      <div className="relative z-10 flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
            Print With Confidence
          </p>

          <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
            Your Idea. Our Printing. One Great Result.
          </h3>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80">
            Choose your product, customize your requirements and
            let RGraphics bring your idea to life.
          </p>
        </div>

        <Link
          to="/products"
          className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-4 font-extrabold text-[#0B2D5C] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          Explore Products

          <ArrowRight
            size={19}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

      </div>

    </div>

  </div>     
</section>

     {/* =====================================================
    CUSTOMER REVIEWS
===================================================== */}
<section className="relative overflow-hidden bg-white py-20">

  {/* Background Decoration */}
  <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#0B2D5C]/5 blur-3xl" />
  <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#E5007D]/5 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E5007D]/20 bg-[#E5007D]/5 px-4 py-2">
        <span className="text-sm">★</span>

        <span className="text-sm font-bold text-[#E5007D]">
          Customer Love
        </span>
      </div>

      <h2 className="text-3xl font-black tracking-tight text-[#0B2D5C] sm:text-4xl lg:text-5xl">
        What Our{" "}
        <span className="bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] bg-clip-text text-transparent">
          Customers Say
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
        Your feedback helps RGraphics grow. See what our customers
        have to say and share your own experience.
      </p>

    </div>


    {/* Rating + Write Review */}
    <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-between gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:px-7">

      {/* Rating */}
      <div className="flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B2D5C] to-[#E5007D] text-xl font-black text-white">
          5.0
        </div>

        <div>
          <div className="flex gap-1 text-lg text-[#FF8A00]">
            ★ ★ ★ ★ ★
          </div>

          <p className="mt-1 text-xs font-medium text-slate-500">
            Customer Rating
          </p>
        </div>

      </div>


      {/* Write Review Button */}
      <button
        onClick={() => setShowReviewForm(true)}
        className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] px-6 py-3.5 font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <span className="text-lg">✍️</span>

        Write a Review

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>

    </div>


    {/* =================================================
        REVIEW CARDS
    ================================================= */}
    <div className="mt-12 grid gap-6 md:grid-cols-3">

      {/* Review 1 */}
      <div className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="absolute right-6 top-5 text-5xl font-black text-[#0B2D5C]/5">
          “
        </div>

        <div className="flex gap-1 text-[#FF8A00]">
          ★ ★ ★ ★ ★
        </div>

        <p className="mt-6 text-[15px] leading-7 text-slate-600">
          “The print quality was excellent and the final product
          looked exactly how I expected. The overall experience
          was smooth and professional.”
        </p>

        <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0B2D5C] to-[#E5007D] text-lg font-black text-white">
            A
          </div>

          <div>
            <p className="font-extrabold text-[#0B2D5C]">
              Amit
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Business Customer
            </p>
          </div>

        </div>

      </div>


      {/* Review 2 */}
      <div className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="absolute right-6 top-5 text-5xl font-black text-[#E5007D]/5">
          “
        </div>

        <div className="flex gap-1 text-[#FF8A00]">
          ★ ★ ★ ★ ★
        </div>

        <p className="mt-6 text-[15px] leading-7 text-slate-600">
          “I ordered custom printing for an event and loved the
          finish. The colors came out vibrant and the print looked
          very clean.”
        </p>

        <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#E5007D] to-[#FF8A00] text-lg font-black text-white">
            P
          </div>

          <div>
            <p className="font-extrabold text-[#0B2D5C]">
              Priya
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Event Customer
            </p>
          </div>

        </div>

      </div>


      {/* Review 3 */}
      <div className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="absolute right-6 top-5 text-5xl font-black text-[#0B2D5C]/5">
          “
        </div>

        <div className="flex gap-1 text-[#FF8A00]">
          ★ ★ ★ ★ ★
        </div>

        <p className="mt-6 text-[15px] leading-7 text-slate-600">
          “RGraphics made it easy to get professional prints for
          my business. The quality and attention to detail really
          stood out.”
        </p>

        <div className="mt-7 flex items-center gap-4 border-t border-slate-100 pt-5">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0B2D5C] to-[#E5007D] text-lg font-black text-white">
            R
          </div>

          <div>
            <p className="font-extrabold text-[#0B2D5C]">
              Rahul
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Business Owner
            </p>
          </div>

        </div>

      </div>

    </div>


    {/* =================================================
        WRITE REVIEW MODAL
    ================================================= */}
    {showReviewForm && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">

       <div className="relative w-full max-w-md rounded-2xl bg-white px-5 py-4 shadow-2xl sm:px-6 sm:py-5">
          {/* Close */}
          <button
            onClick={() => setShowReviewForm(false)}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
          >
            ✕
          </button>


          {/* Modal Header */}
          <div className="pr-10">

            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0B2D5C] to-[#E5007D] text-xl text-white">
              ⭐
            </div>

            <h3 className="text-2xl font-black text-[#0B2D5C]">
              Share Your Experience
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Tell us about your experience with RGraphics.
            </p>

          </div>


          {/* Review Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your review! ⭐");
              setShowReviewForm(false);
            }}
            className="mt-7 space-y-5"
          >

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Your Name
              </label>

              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#0B2D5C] focus:ring-2 focus:ring-[#0B2D5C]/10"
              />
            </div>


            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#E5007D] focus:ring-2 focus:ring-[#E5007D]/10"
              />
            </div>


            {/* Rating */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Your Rating
              </label>

              <div className="flex gap-2">

                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="text-3xl text-[#FF8A00] transition hover:scale-110"
                  >
                    ★
                  </button>
                ))}

              </div>
            </div>


            {/* Review */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Your Review
              </label>

              <textarea
                required
                rows="4"
                placeholder="Write your experience..."
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#0B2D5C] focus:ring-2 focus:ring-[#0B2D5C]/10"
              />
            </div>


            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] py-4 font-extrabold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Submit Review
            </button>

          </form>

        </div>

      </div>
    )}

  </div>
</section>
      {/* =====================================================
          CTA
      ====================================================== */}
    <section className="mx-5 mb-20 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#0B2D5C] via-[#4A237A] to-[#E5007D] lg:mx-auto lg:max-w-7xl">

        <div className="relative px-6 py-16 text-center sm:px-10">

          <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

          <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">

            <h2 className="text-4xl font-black text-white sm:text-5xl">
              Ready to print your idea?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Choose your product, upload your design and start your
              printing journey with RGraphics.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-blue-700 hover:bg-slate-100"
              >
                Shop Products
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/design"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 font-bold text-white hover:bg-white/10"
              >
                <Upload size={19} />
                Start Designing
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer
        id="contact"
      className="bg-[#0B2D5C] text-white"
      >

        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

          <div className="grid gap-10 md:grid-cols-4">

            {/* BRAND */}
            <div className="md:col-span-1">

              <img
                src="/RG-New.png"
                alt="RGraphics"
                className="h-20 w-auto rounded-lg bg-white p-1 object-contain"
              />

              <p className="mt-5 leading-7 text-slate-400">
                Print Your Ideas. Create Your Brand.
              </p>

            </div>

            {/* PRODUCTS */}
            <div>

              <h3 className="font-bold">
                Products
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-400">

                <Link
                  to="/products"
                  className="block hover:text-white"
                >
                  Banners
                </Link>

                <Link
                  to="/products"
                  className="block hover:text-white"
                >
                  Business Cards
                </Link>

                <Link
                  to="/products"
                  className="block hover:text-white"
                >
                  Flyers
                </Link>

                <Link
                  to="/products"
                  className="block hover:text-white"
                >
                  Posters
                </Link>

              </div>

            </div>

            {/* COMPANY */}
            <div>

              <h3 className="font-bold">
                RGraphics
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-400">

                <a
                  href="#how-it-works"
                  className="block hover:text-white"
                >
                  How It Works
                </a>

                <Link
                  to="/templates"
                  className="block hover:text-white"
                >
                  Templates
                </Link>

                <Link
                  to="/design"
                  className="block hover:text-white"
                >
                  Design Online
                </Link>

                <Link
                  to="/login"
                  className="block hover:text-white"
                >
                  My Account
                </Link>

              </div>

            </div>

            {/* CONTACT */}
            <div>

              <h3 className="font-bold">
                Contact
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-400">

                <p>
                  Need help with your order?
                </p>

                <p>
                  Contact RGraphics support.
                </p>

                <p className="flex items-center gap-2">
                  <Clock3 size={16} />
                  Support available during business hours
                </p>

              </div>

            </div>

          </div>

          <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500">

            © {new Date().getFullYear()} RGraphics. All rights reserved.

          </div>

        </div>

      </footer>

    </div>
  );
}