const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Product = require("./models/Product");

dotenv.config();

const products = [
  {
    name: "Air Max 1",
    category: "Shoes",
    gender: "Men",
    price: 459,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description: "Classic sports sneakers with a modern design.",
    stock: 10,
  },
  {
    name: "Air Runner",
    category: "Shoes",
    gender: "Men",
    price: 399,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description: "Lightweight running shoes built for performance.",
    stock: 8,
  },
  {
    name: "Street Essential",
    category: "Shoes",
    gender: "Women",
    price: 329,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
    description: "Comfortable everyday sneakers with a streetwear look.",
    stock: 12,
  },
  {
    name: "Essential Hoodie",
    category: "Clothing",
    gender: "Unisex",
    price: 249,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    description: "Premium hoodie designed for everyday comfort.",
    stock: 15,
  },
  {
    name: "Dri-FIT Sport T-Shirt",
    category: "Clothing",
    gender: "Men",
    price: 149,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    description: "Breathable sports t-shirt for training and everyday wear.",
    stock: 20,
  },
  {
    name: "Training Top",
    category: "Clothing",
    gender: "Women",
    price: 179,
    image: "https://images.unsplash.com/photo-1506629905607-d9d2a2f7a7c4",
    description: "Comfortable training top designed for active lifestyles.",
    stock: 9,
  },
  {
    name: "Kids Runner",
    category: "Shoes",
    gender: "Kids",
    price: 279,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
    description: "Lightweight running shoes designed for kids.",
    stock: 7,
  },
  {
    name: "Training Pants",
    category: "Clothing",
    gender: "Unisex",
    price: 199,
    image: "https://images.unsplash.com/photo-1506629905607-d9d2a2f7a7c4",
    description: "Comfortable training pants for sports and everyday use.",
    stock: 18,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("8 products added successfully!");

    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  }
};

seedProducts();