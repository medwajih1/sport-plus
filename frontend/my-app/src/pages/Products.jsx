import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const productsData = [
  {
    id: "air-max-1",
    name: "Air Max 1",
    price: 459,
    category: "Shoes",
    gender: "Men",
    description: "Classic everyday sneakers with modern comfort.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",
    stock: 10,
  },
  {
    id: "air-runner",
    name: "Air Runner",
    price: 399,
    category: "Shoes",
    gender: "Men",
    description: "Lightweight running shoes built for performance.",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900",
    stock: 8,
  },
  {
    id: "street-shoe",
    name: "Street Essential",
    price: 329,
    category: "Shoes",
    gender: "Women",
    description: "Modern lifestyle sneakers for everyday movement.",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900",
    stock: 12,
  },
  {
    id: "essential-hoodie",
    name: "Essential Hoodie",
    price: 249,
    category: "Clothing",
    gender: "Unisex",
    description: "Premium heavyweight hoodie for everyday wear.",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900",
    stock: 15,
  },
  {
    id: "sport-tshirt",
    name: "Dri-FIT Sport T-Shirt",
    price: 149,
    category: "Clothing",
    gender: "Men",
    description: "Breathable performance t-shirt for training.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900",
    stock: 20,
  },
  {
    id: "women-top",
    name: "Training Top",
    price: 179,
    category: "Clothing",
    gender: "Women",
    description: "Lightweight training top with a comfortable fit.",
    image:
      "https://images.unsplash.com/photo-1506629905607-d9c297d4e7c8?w=900",
    stock: 9,
  },
  {
    id: "kids-runner",
    name: "Kids Runner",
    price: 279,
    category: "Shoes",
    gender: "Kids",
    description: "Comfortable running shoes for active kids.",
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=900",
    stock: 7,
  },
  {
    id: "training-pants",
    name: "Training Pants",
    price: 199,
    category: "Clothing",
    gender: "Unisex",
    description: "Flexible training pants for everyday movement.",
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=900",
    stock: 18,
  },
];

function Products() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  const [selectedCategory, setSelectedCategory] = useState(
    category || "All"
  );

  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {

    let result = [...productsData];

    if (selectedCategory !== "All") {
      result = result.filter(
        (product) =>
          product.gender === selectedCategory ||
          product.category === selectedCategory
      );
    }

    if (searchQuery) {
      const search = searchQuery.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search) ||
          product.gender.toLowerCase().includes(search)
      );
    }

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;

  }, [selectedCategory, searchQuery, sort]);

  return (
    <main className="products-page">

      {/* HEADER */}
      <section className="products-header">

        <div>

          <span>
            COLLECTION
          </span>

          <h1>
            {searchQuery
              ? `Search: ${searchQuery}`
              : "All Products"}
          </h1>

          <p>
            Discover our latest sportswear collection.
          </p>

        </div>

      </section>


      {/* FILTER BAR */}
      <section className="products-toolbar">

        <div className="category-filters">

          {[
            "All",
            "Men",
            "Women",
            "Kids",
            "Shoes",
            "Clothing",
          ].map((item) => (

            <button
              key={item}
              className={
                selectedCategory === item
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() =>
                setSelectedCategory(item)
              }
            >
              {item}
            </button>

          ))}

        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="sort-select"
        >
          <option value="default">
            Sort by
          </option>

          <option value="price-low">
            Price: Low to High
          </option>

          <option value="price-high">
            Price: High to Low
          </option>

          <option value="name">
            Name
          </option>
        </select>

      </section>


      {/* PRODUCTS */}
      <section className="products-container">

        <div className="products-result-count">
          {filteredProducts.length} products
        </div>

        {filteredProducts.length > 0 ? (

          <div className="products-grid">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          <div className="empty-products">

            <h2>
              No products found.
            </h2>

            <p>
              Try another search or category.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}

export default Products;