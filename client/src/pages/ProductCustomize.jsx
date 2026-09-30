import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Upload,
  Image as ImageIcon,
  FileText,
  Minus,
  Plus,
  ShieldCheck,
} from "lucide-react";

const BANNER_RATES = {
  Normal: 15,
  "Black Black": 20,
  Star: 30,
  "Black Light": 40,
};

const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "application/pdf",
];

const ACCEPTED_EXTENSIONS = ".jpg,.jpeg,.png,.pdf";

function convertToFeet(value, unit) {
  const number = Number(value);

  if (!number || number <= 0) return 0;

  switch (unit) {
    case "Inches":
      return number / 12;

    case "Millimeter":
      return number / 304.8;

    case "Feet":
      return number;

    case "Meter":
      return number * 3.28084;

    default:
      return 0;
  }
}

function getRatio(width, height) {
  if (!width || !height) return 0;
  return width / height;
}

function formatBytes(bytes) {
  if (!bytes) return "0 KB";

  const mb = bytes / (1024 * 1024);

  if (mb >= 1) {
    return `${mb.toFixed(2)} MB`;
  }

  return `${(bytes / 1024).toFixed(0)} KB`;
}

export default function ProductCustomize() {
  const { id } = useParams();

  const fileInputRef = useRef(null);

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("Feet");
  const [quality, setQuality] = useState("Normal");
  const [quantity, setQuantity] = useState(1);

  const [designFile, setDesignFile] = useState(null);
  const [designPreview, setDesignPreview] = useState("");

  const [designDimensions, setDesignDimensions] = useState(null);

  const [uploadError, setUploadError] = useState("");

  const [adjustmentMode, setAdjustmentMode] = useState("fill");

  const [showConfirmation, setShowConfirmation] = useState(false);

  const widthInFeet = convertToFeet(width, unit);
  const heightInFeet = convertToFeet(height, unit);

  const squareFeet = widthInFeet * heightInFeet;

  const rate = BANNER_RATES[quality];

  const unitPrice = squareFeet * rate;
  const totalPrice = unitPrice * quantity;

  const qualityDescriptions = {
    Normal: "Standard banner printing for everyday use.",
    "Black Black": "Darker, richer black tones for stronger contrast.",
    Star: "Premium finish for sharper promotional graphics.",
    "Black Light": "High-quality option for vibrant, detailed designs.",
  };

  /*
   * Banner ratio
   *
   * Example:
   * 10 × 10 = 1:1
   * 4 × 6 = 0.6667
   */
  const bannerRatio = useMemo(() => {
    return getRatio(widthInFeet, heightInFeet);
  }, [widthInFeet, heightInFeet]);

  /*
   * Uploaded image ratio
   */
  const designRatio = useMemo(() => {
    if (!designDimensions) return 0;

    return getRatio(
      designDimensions.width,
      designDimensions.height
    );
  }, [designDimensions]);

  /*
   * Difference between design ratio and banner ratio
   */
  const ratioDifference = useMemo(() => {
    if (!bannerRatio || !designRatio) return 0;

    return Math.abs(designRatio - bannerRatio) / bannerRatio;
  }, [bannerRatio, designRatio]);

  /*
   * 2% tolerance
   */
  const ratioMatches =
    designRatio > 0 &&
    bannerRatio > 0 &&
    ratioDifference <= 0.02;

  /*
   * Cleanup preview URL
   */
  useEffect(() => {
    return () => {
      if (designPreview) {
        URL.revokeObjectURL(designPreview);
      }
    };
  }, [designPreview]);

  /*
   * Upload Design
   */
  const handleDesignUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setUploadError("");
    setDesignDimensions(null);

    /*
     * File type
     */
    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      setUploadError(
        "Invalid file. Please upload JPG, PNG or PDF."
      );

      event.target.value = "";
      return;
    }

    /*
     * Maximum 20 MB
     */
    const maxSize = 20 * 1024 * 1024;

    if (file.size > maxSize) {
      setUploadError(
        "File is too large. Maximum allowed size is 20 MB."
      );

      event.target.value = "";
      return;
    }

    /*
     * Remove old preview
     */
    if (designPreview) {
      URL.revokeObjectURL(designPreview);
    }

    setDesignFile(file);

    /*
     * PDF
     */
    if (file.type === "application/pdf") {
      setDesignPreview(URL.createObjectURL(file));
      return;
    }

    /*
     * JPG / PNG
     */
    const previewUrl = URL.createObjectURL(file);

    setDesignPreview(previewUrl);

    const image = new Image();

    image.onload = () => {
      setDesignDimensions({
        width: image.naturalWidth,
        height: image.naturalHeight,
      });
    };

    image.onerror = () => {
      setUploadError(
        "Unable to read the image. Please upload another JPG or PNG."
      );
    };

    image.src = previewUrl;
  };

  /*
   * Remove Design
   */
  const handleRemoveDesign = () => {
    if (designPreview) {
      URL.revokeObjectURL(designPreview);
    }

    setDesignFile(null);
    setDesignPreview("");
    setDesignDimensions(null);
    setUploadError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  /*
   * Choose Design
   */
  const handleChooseDesign = () => {
    fileInputRef.current?.click();
  };

  /*
   * Open final confirmation
   */
  const handleContinueToConfirmation = () => {
    if (
      !width ||
      !height ||
      Number(width) <= 0 ||
      Number(height) <= 0
    ) {
      alert("Please enter valid Banner Width and Height.");
      return;
    }

    if (!designFile) {
      alert("Please upload your Banner design.");
      return;
    }

    setShowConfirmation(true);
  };

  /*
   * Final confirmation
   */
  const handleConfirmFinalPrint = () => {
    const bannerData = {
      productId: id,
      productName: "Banner",

      width: Number(width),
      height: Number(height),
      unit,

      widthInFeet,
      heightInFeet,

      squareFeet,

      quality,
      rate,

      designFileName: designFile?.name || "",

      designOriginalWidth:
        designDimensions?.width || null,

      designOriginalHeight:
        designDimensions?.height || null,

      adjustmentMode,

      finalPrintWidth: widthInFeet,
      finalPrintHeight: heightInFeet,

      quantity,
      unitPrice,
      totalPrice,
    };

    // SAVE BANNER TO CART
    const cartItem = {
      ...bannerData,
      cartId: `${id}-${Date.now()}`,
      designPreview:
        designFile?.type !== "application/pdf"
          ? designPreview
          : "",
    };

    const existingCart =
      JSON.parse(localStorage.getItem("rgraphics_cart")) || [];

    const updatedCart = [
      ...existingCart,
      cartItem,
    ];

    localStorage.setItem(
      "rgraphics_cart",
      JSON.stringify(updatedCart)
    );

    console.log(
      "CONFIRMED BANNER ORDER:",
      cartItem
    );

    window.location.href = "/cart";
  };

  /*
   * If confirmation screen is open
   */
  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50/40">

        {/* HEADER */}
        <div className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            <div>
              <h1 className="text-2xl font-black text-[#0B2D5C]">
                RGraphics
              </h1>

              <p className="text-sm text-slate-500">
                Print Your Ideas. Create Your Brand.
              </p>
            </div>

            <button
              onClick={() => setShowConfirmation(false)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-[#0B2D5C] shadow-sm hover:border-[#E5007D] hover:text-[#E5007D]"
            >
              ← Edit Design
            </button>

          </div>
        </div>

        {/* CONFIRMATION */}
        <main className="mx-auto max-w-6xl px-6 py-10">

          <div className="mb-8 text-center">

            <p className="text-sm font-bold uppercase tracking-wide text-[#E5007D]">
              Final Print Confirmation
            </p>

            <h2 className="mt-2 text-4xl font-bold text-slate-900">
              Check Your Final Banner
            </h2>

            <p className="mt-2 text-slate-600">
              This is how your design will be prepared for the
              selected Banner size.
            </p>

          </div>

          <div className="grid gap-8 lg:grid-cols-3">

            {/* FINAL PREVIEW */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2 lg:p-7">

              <div className="mb-4 flex items-center justify-between">

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Final Print Preview
                  </h3>

                  <p className="text-sm text-slate-500">
                    {widthInFeet.toFixed(2)} ×{" "}
                    {heightInFeet.toFixed(2)} ft
                  </p>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                  PRINT SIZE
                </span>

              </div>

              {/* BANNER FRAME */}
              <div
                className="relative mx-auto flex w-full max-w-3xl items-center justify-center overflow-hidden rounded-xl border-4 border-slate-300 bg-slate-100"
                style={{
                  aspectRatio:
                    widthInFeet > 0 && heightInFeet > 0
                      ? `${widthInFeet} / ${heightInFeet}`
                      : "1 / 1",
                }}
              >

                {designPreview &&
                designFile?.type !== "application/pdf" ? (

                  /*
                   * IMPORTANT:
                   *
                   * The uploaded design is scaled to the
                   * FINAL BANNER FRAME.
                   *
                   * 3×3 → 10×10
                   * will fill the entire 10×10 frame.
                   */
                  <img
                    src={designPreview}
                    alt="Final Banner Preview"
                    className={`h-full w-full ${
                      adjustmentMode === "fill"
                        ? "object-cover"
                        : "object-contain"
                    }`}
                  />

                ) : designFile?.type === "application/pdf" ? (

                  <div className="text-center">

                    <div className="text-7xl">
                      📄
                    </div>

                    <p className="mt-4 text-xl font-bold">
                      PDF Design
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                      {designFile.name}
                    </p>

                    <p className="mt-3 text-sm text-[#E5007D]">
                      Final print size:
                      {" "}
                      {widthInFeet.toFixed(2)} ×{" "}
                      {heightInFeet.toFixed(2)} ft
                    </p>

                  </div>

                ) : (

                  <p className="text-slate-400">
                    No design uploaded
                  </p>

                )}

              </div>

              {/* SCALE INFORMATION */}
              <div className="mt-5 rounded-xl bg-blue-50 p-5">

                <p className="font-bold text-blue-900">
                  Design Scaling
                </p>

                <p className="mt-1 text-sm text-blue-700">
                  Your uploaded design is being proportionally
                  scaled to the selected final Banner size.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">

                  <div className="rounded-lg bg-white p-3">

                    <p className="text-xs text-slate-500">
                      Original Design
                    </p>

                    <p className="font-bold">
                      {designDimensions
                        ? `${designDimensions.width} × ${designDimensions.height} px`
                        : "PDF file"}
                    </p>

                  </div>

                  <div className="rounded-lg bg-white p-3">

                    <p className="text-xs text-slate-500">
                      Final Print Size
                    </p>

                    <p className="font-bold">
                      {widthInFeet.toFixed(2)} ×{" "}
                      {heightInFeet.toFixed(2)} ft
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ORDER DETAILS */}
            <div className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">

              <h3 className="text-xl font-bold text-slate-900">
                Confirm Details
              </h3>

              <div className="mt-6 space-y-4">

                <div>
                  <p className="text-sm text-slate-500">
                    Product
                  </p>

                  <p className="font-bold">
                    Banner
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Final Print Size
                  </p>

                  <p className="font-bold">
                    {widthInFeet.toFixed(2)} ×{" "}
                    {heightInFeet.toFixed(2)} ft
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Area
                  </p>

                  <p className="font-bold">
                    {squareFeet.toFixed(2)} sq.ft
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Quality
                  </p>

                  <p className="font-bold">
                    {quality}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Rate
                  </p>

                  <p className="font-bold">
                    ₹{rate}/sq.ft
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Design File
                  </p>

                  <p className="break-all font-bold">
                    {designFile?.name}
                  </p>
                </div>

                <div className="border-t pt-5">

                  <p className="text-sm text-slate-500">
                    Quantity
                  </p>

                  <p className="font-bold">
                    {quantity} {quantity === 1 ? "banner" : "banners"}
                  </p>

                  <p className="mt-4 text-sm text-slate-500">
                    Total Price
                  </p>

                  <p className="text-3xl font-bold text-[#E5007D]">
                    ₹{totalPrice.toFixed(2)}
                  </p>

                </div>

              </div>

              {/* CONFIRM CHECKBOX */}
              <label className="mt-6 flex cursor-pointer gap-3 rounded-xl bg-slate-50 p-4">

                <input
                  type="checkbox"
                  id="final-confirm"
                  className="mt-1 h-5 w-5"
                />

                <span className="text-sm font-medium text-slate-700">
                  I have checked the final print preview and
                  confirm that my design should be printed at
                  the selected Banner size.
                </span>

              </label>

              <button
                onClick={() => {
                  const checkbox =
                    document.getElementById(
                      "final-confirm"
                    );

                  if (!checkbox.checked) {
                    alert(
                      "Please confirm that you have checked the final print preview."
                    );
                    return;
                  }

                  handleConfirmFinalPrint();
                }}
                className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] px-6 py-4 font-black text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl"
              >
                ✓ Confirm Final Print
              </button>

            </div>

          </div>

        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50/40">

      {/* HEADER */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div>
            <h1 className="text-2xl font-black text-[#0B2D5C]">
              RGraphics
            </h1>

            <p className="text-sm text-slate-500">
              Print Your Ideas. Create Your Brand.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-[#0B2D5C] shadow-sm hover:border-[#E5007D] hover:text-[#E5007D]"
          >
            ← Back to Products
          </Link>

        </div>
      </div>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-8">

          <p className="text-sm font-bold uppercase tracking-wide text-[#E5007D]">
            Banner Customization
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            Customize Your Banner
          </h2>

          <p className="mt-2 text-slate-600">
            Select your final Banner size, quality and upload
            your design.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* LEFT */}
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2 lg:p-7">

            {/* SIZE */}
            <div>

              <h3 className="text-xl font-black text-[#0B2D5C]">
                1. Banner Size
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Enter the final size you want to print.
              </p>

              <div className="mt-5 grid gap-5 md:grid-cols-3">

                <div>

                  <label className="mb-2 block text-sm font-semibold">
                    Width
                  </label>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={width}
                    onChange={(e) =>
                      setWidth(e.target.value)
                    }
                    placeholder="Enter width"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#E5007D] focus:ring-2 focus:ring-[#E5007D]/10"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold">
                    Height
                  </label>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={height}
                    onChange={(e) =>
                      setHeight(e.target.value)
                    }
                    placeholder="Enter height"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#E5007D] focus:ring-2 focus:ring-[#E5007D]/10"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-semibold">
                    Unit
                  </label>

                  <select
                    value={unit}
                    onChange={(e) =>
                      setUnit(e.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#E5007D] focus:ring-2 focus:ring-[#E5007D]/10"
                  >
                    <option value="Inches">
                      Inches
                    </option>

                    <option value="Millimeter">
                      Millimeter
                    </option>

                    <option value="Feet">
                      Feet
                    </option>

                    <option value="Meter">
                      Meter
                    </option>
                  </select>

                </div>

              </div>

            </div>

            {/* QUALITY */}
            <div className="mt-10">

              <h3 className="text-xl font-black text-[#0B2D5C]">
                2. Select Banner Quality
              </h3>

              <div className="mt-5 grid gap-4 md:grid-cols-2">

                {Object.entries(BANNER_RATES).map(
                  ([name, price]) => (

                    <label
                      key={name}
                      className={`cursor-pointer rounded-xl border p-5 transition ${
                        quality === name
                          ? "border-[#E5007D] bg-pink-50 ring-2 ring-[#E5007D]/10"
                          : "border-slate-200 hover:border-blue-300"
                      }`}
                    >

                      <div className="flex items-center justify-between">

                        <div className="flex items-center gap-3">

                          <input
                            type="radio"
                            name="quality"
                            value={name}
                            checked={quality === name}
                            onChange={() =>
                              setQuality(name)
                            }
                            className="h-5 w-5"
                          />

                          <div>

                            <p className="font-bold">
                              {name}
                            </p>

                            <p className="text-sm text-slate-500">
                              {qualityDescriptions[name]}
                            </p>

                          </div>

                        </div>

                        <p className="font-bold text-[#E5007D]">
                          ₹{price}/sq.ft
                        </p>

                      </div>

                    </label>

                  )
                )}

              </div>

            </div>

            {/* UPLOAD */}
            <div className="mt-10">

              <h3 className="text-xl font-black text-[#0B2D5C]">
                3. Upload Your Design
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Upload JPG, PNG or PDF design.
              </p>

              <input
                ref={fileInputRef}
                type="file"
                accept={ACCEPTED_EXTENSIONS}
                onChange={handleDesignUpload}
                className="hidden"
              />

              {!designFile ? (

                <div className="mt-5 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 text-center">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B2D5C] to-[#E5007D] text-white shadow-lg">
                    <Upload size={28} />
                  </div>

                  <h4 className="mt-4 text-lg font-bold">
                    Upload Banner Design
                  </h4>

                  <p className="mt-2 text-sm text-slate-500">
                    JPG, PNG or PDF
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Maximum 20 MB
                  </p>

                  <button
                    type="button"
                    onClick={handleChooseDesign}
                    className="mt-5 rounded-xl bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] px-6 py-3 font-bold text-white hover:shadow-lg"
                  >
                    Choose Design File
                  </button>

                </div>

              ) : (

                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">

                  <div className="grid gap-5 md:grid-cols-2">

                    {/* PREVIEW */}
                    <div
                      className="relative flex items-center justify-center overflow-hidden rounded-xl bg-slate-200"
                      style={{
                        aspectRatio:
                          widthInFeet > 0 &&
                          heightInFeet > 0
                            ? `${widthInFeet} / ${heightInFeet}`
                            : "1 / 1",
                      }}
                    >

                      {designFile.type !==
                      "application/pdf" ? (

                        <img
                          src={designPreview}
                          alt="Banner Design"
                          className={`h-full w-full ${
                            adjustmentMode === "fill"
                              ? "object-cover"
                              : "object-contain"
                          }`}
                        />

                      ) : (

                        <div className="text-center">

                          <div className="text-6xl">
                            📄
                          </div>

                          <p className="mt-2 font-bold">
                            PDF Design
                          </p>

                        </div>

                      )}

                    </div>

                    {/* DETAILS */}
                    <div>

                      <div className="flex items-center gap-2">
                        {designFile?.type === "application/pdf" ? (
                          <FileText size={16} className="text-[#E5007D]" />
                        ) : (
                          <ImageIcon size={16} className="text-[#0B2D5C]" />
                        )}
                        <p className="text-sm text-slate-500">
                          File
                        </p>
                      </div>

                      <p className="break-all font-bold">
                        {designFile.name}
                      </p>

                      <p className="mt-2 text-sm text-slate-500">
                        File Size
                      </p>

                      <p className="font-semibold">
                        {formatBytes(
                          designFile.size
                        )}
                      </p>

                      {designDimensions && (
                        <div className="mt-4 rounded-xl bg-white p-4">

                          <p className="text-sm text-slate-500">
                            Original Image Resolution
                          </p>

                          <p className="mt-1 font-bold">
                            {designDimensions.width} ×{" "}
                            {designDimensions.height} px
                          </p>

                          <p className="mt-2 text-sm text-slate-500">
                            Original Ratio
                          </p>

                          <p className="font-bold">
                            {designRatio.toFixed(4)}
                          </p>

                        </div>
                      )}

                      {bannerRatio > 0 && (
                        <div className="mt-4 rounded-xl bg-white p-4">

                          <p className="text-sm text-slate-500">
                            Final Banner Ratio
                          </p>

                          <p className="font-bold">
                            {bannerRatio.toFixed(4)}
                          </p>

                        </div>
                      )}

                      {/* RATIO STATUS */}
                      {designDimensions && (
                        <div
                          className={`mt-4 rounded-xl p-4 ${
                            ratioMatches
                              ? "bg-green-50"
                              : "bg-yellow-50"
                          }`}
                        >

                          {ratioMatches ? (

                            <>
                              <p className="font-bold text-green-700">
                                ✓ Design Ratio Matches
                              </p>

                              <p className="mt-1 text-sm text-green-600">
                                Design will be scaled to the
                                final Banner size.
                              </p>
                            </>

                          ) : (

                            <>
                              <p className="font-bold text-yellow-700">
                                ⚠ Design Ratio is Different
                              </p>

                              <p className="mt-1 text-sm text-yellow-700">
                                You can fit or crop the design
                                according to the final Banner.
                              </p>
                            </>

                          )}

                        </div>
                      )}

                      {/* FIT / CROP */}
                      {designFile.type !==
                        "application/pdf" && (
                        <div className="mt-5">

                          <p className="mb-2 text-sm font-semibold">
                            How should the design fill the Banner?
                          </p>

                          <div className="flex gap-2">

                            <button
                              type="button"
                              onClick={() =>
                                setAdjustmentMode("fill")
                              }
                              className={`rounded-lg px-4 py-2 text-sm font-bold ${
                                adjustmentMode === "fill"
                                  ? "bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] text-white"
                                  : "border bg-white text-slate-700"
                              }`}
                            >
                              Fill / Crop
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                setAdjustmentMode("fit")
                              }
                              className={`rounded-lg px-4 py-2 text-sm font-bold ${
                                adjustmentMode === "fit"
                                  ? "bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] text-white"
                                  : "border bg-white text-slate-700"
                              }`}
                            >
                              Fit Design
                            </button>

                          </div>

                        </div>
                      )}

                      <div className="mt-5 flex gap-3">

                        <button
                          type="button"
                          onClick={handleChooseDesign}
                          className="rounded-lg border border-blue-600 px-4 py-2 font-semibold text-[#E5007D] hover:bg-blue-50"
                        >
                          Change Design
                        </button>

                        <button
                          type="button"
                          onClick={handleRemoveDesign}
                          className="rounded-lg border border-red-300 px-4 py-2 font-semibold text-red-600 hover:bg-red-50"
                        >
                          Remove
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              )}

              {uploadError && (
                <div className="mt-4 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700">
                  {uploadError}
                </div>
              )}

            </div>

            {/* QUANTITY */}
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-black text-[#0B2D5C]">
                    4. Quantity
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Choose how many banners you want to print.
                  </p>
                </div>

                <div className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0B2D5C] shadow-sm hover:bg-slate-100"
                  >
                    <Minus size={17} />
                  </button>

                  <span className="flex h-10 min-w-14 items-center justify-center text-lg font-black text-[#0B2D5C]">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => setQuantity((value) => value + 1)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0B2D5C] shadow-sm hover:bg-slate-100"
                  >
                    <Plus size={17} />
                  </button>
                </div>
              </div>
            </div>

            {/* PRICE */}
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#F5F8FF] to-[#FFF4FA] p-6">

              <h3 className="text-xl font-black text-[#0B2D5C]">
                5. Price Calculation
              </h3>

              <div className="mt-5 space-y-4">

                <div className="flex justify-between border-b pb-3">
                  <span className="text-slate-600">
                    Banner Size
                  </span>

                  <span className="font-semibold">
                    {width || 0} × {height || 0} {unit}
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-slate-600">
                    Converted Size
                  </span>

                  <span className="font-semibold">
                    {widthInFeet.toFixed(2)} ×{" "}
                    {heightInFeet.toFixed(2)} ft
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-slate-600">
                    Total Area
                  </span>

                  <span className="font-semibold">
                    {squareFeet.toFixed(2)} sq.ft
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-slate-600">
                    Quality
                  </span>

                  <span className="font-semibold">
                    {quality}
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-slate-600">
                    Rate
                  </span>

                  <span className="font-semibold">
                    ₹{rate}/sq.ft
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-slate-600">
                    Quantity
                  </span>

                  <span className="font-semibold">
                    {quantity}
                  </span>
                </div>

                <div className="flex justify-between pt-2">

                  <span className="text-lg font-bold">
                    Total Price
                  </span>

                  <span className="text-3xl font-bold text-[#E5007D]">
                    ₹{totalPrice.toFixed(2)}
                  </span>

                </div>

              </div>

            </div>

            {/* CONTINUE */}
            <button
              onClick={handleContinueToConfirmation}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] px-6 py-4 text-lg font-bold text-white hover:shadow-lg"
            >
              Preview Final Print →
            </button>

          </section>

          {/* RIGHT SUMMARY */}
          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-6">

            <h3 className="text-xl font-black text-[#0B2D5C]">
              Banner Summary
            </h3>

            <div className="mt-6 space-y-5">

              <div>
                <p className="text-sm text-slate-500">
                  Final Banner Size
                </p>

                <p className="font-bold">
                  {widthInFeet.toFixed(2)} ×{" "}
                  {heightInFeet.toFixed(2)} ft
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Area
                </p>

                <p className="font-bold">
                  {squareFeet.toFixed(2)} sq.ft
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Quality
                </p>

                <p className="font-bold">
                  {quality}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Design
                </p>

                <p className="break-all font-bold">
                  {designFile
                    ? designFile.name
                    : "No design uploaded"}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Quantity
                </p>

                <p className="font-bold">
                  {quantity} {quantity === 1 ? "banner" : "banners"}
                </p>
              </div>

              <div className="border-t pt-5">

                <p className="text-sm text-slate-500">
                  Total
                </p>

                <p className="text-3xl font-bold text-[#E5007D]">
                  ₹{totalPrice.toFixed(2)}
                </p>

              </div>

              <div className="rounded-2xl bg-gradient-to-r from-[#0B2D5C] to-[#E5007D] p-4 text-white">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={20} className="mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-black">Print-ready checkout</p>
                    <p className="mt-1 text-xs leading-5 text-white/80">
                      Review your size, quality and design before continuing.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </aside>

        </div>

      </main>
    </div>
  );
}