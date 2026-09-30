require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  {
    name: "Business Cards",
    category: "Business Printing",
    description: "Professional business cards for your brand and networking.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    startingPrice: 299,
    rating: 4.8,
    options: {
      size: ["Standard", "Square"],
      paper: ["Matte", "Glossy", "Premium"],
      finish: ["Matte", "Glossy"],
      corners: ["Standard", "Rounded"],
      quantity: [100, 250, 500, 1000],
      turnaround: ["Standard", "Express"]
    }
  },
  {
    name: "Flyers",
    category: "Marketing",
    description: "High-quality flyers for promotions, events and advertising.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=80",
    startingPrice: 499,
    rating: 4.7,
    options: {
      size: ["A4", "A5", "A6"],
      paper: ["Matte", "Glossy"],
      finish: ["Matte", "Glossy"],
      corners: ["Standard"],
      quantity: [50, 100, 250, 500],
      turnaround: ["Standard", "Express"]
    }
  },
  {
    name: "Posters",
    category: "Marketing",
    description: "Eye-catching posters for events, businesses and promotions.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=900&q=80",
    startingPrice: 399,
    rating: 4.6,
    options: {
      size: ["A4", "A3", "A2"],
      paper: ["Matte", "Glossy"],
      finish: ["Matte", "Glossy"],
      corners: ["Standard"],
      quantity: [1, 5, 10, 25, 50],
      turnaround: ["Standard", "Express"]
    }
  },
  {
    name: "Stickers & Labels",
    category: "Stickers",
    description: "Custom stickers and labels for products, packaging and branding.",
    image: "https://images.unsplash.com/photo-1603484477859-abe6a73f9366?auto=format&fit=crop&w=900&q=80",
    startingPrice: 299,
    rating: 4.9,
    options: {
      size: ["Small", "Medium", "Large"],
      paper: ["White", "Transparent"],
      finish: ["Matte", "Glossy"],
      corners: ["Standard", "Rounded"],
      quantity: [25, 50, 100, 250, 500],
      turnaround: ["Standard", "Express"]
    }
  },
  {
    name: "Banners",
    category: "Large Format",
    description: "Durable custom banners for shops, events and outdoor promotions.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    startingPrice: 799,
    rating: 4.7,
    options: {
      size: ["2 x 3 ft", "3 x 5 ft", "4 x 6 ft"],
      paper: ["Vinyl"],
      finish: ["Glossy", "Matte"],
      corners: ["Standard"],
      quantity: [1, 2, 5, 10],
      turnaround: ["Standard", "Express"]
    }
  },
  {
    name: "Invitations",
    category: "Events",
    description: "Beautiful invitation cards for weddings, birthdays and events.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    startingPrice: 599,
    rating: 4.8,
    options: {
      size: ["A5", "5 x 7 inch"],
      paper: ["Matte", "Premium"],
      finish: ["Matte", "Glossy"],
      corners: ["Standard", "Rounded"],
      quantity: [25, 50, 100, 250],
      turnaround: ["Standard", "Express"]
    }
  },
  {
    name: "Brochures",
    category: "Marketing",
    description: "Professional brochures to showcase your products and services.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=80",
    startingPrice: 699,
    rating: 4.6,
    options: {
      size: ["A4", "A5", "DL"],
      paper: ["Matte", "Glossy", "Premium"],
      finish: ["Matte", "Glossy"],
      corners: ["Standard"],
      quantity: [25, 50, 100, 250, 500],
      turnaround: ["Standard", "Express"]
    }
  },
  {
    name: "Photo Frames",
    category: "Photo Products",
    description: "Custom printed photo frames for memories and gifting.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
    startingPrice: 499,
    rating: 4.8,
    options: {
      size: ["8 x 10 inch", "12 x 16 inch", "16 x 20 inch"],
      paper: ["Photo Paper"],
      finish: ["Glossy", "Matte"],
      corners: ["Standard"],
      quantity: [1, 2, 5, 10],
      turnaround: ["Standard", "Express"]
    }
  }
];

async function seedProducts() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany({});

    await Product.insertMany(products);

    console.log(`${products.length} products inserted successfully`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Product seeding failed:", error.message);
    process.exit(1);
  }
}

seedProducts();