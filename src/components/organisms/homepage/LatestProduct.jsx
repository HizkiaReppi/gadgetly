import { useEffect, useState } from "react";
import Heading from "../../atoms/Heading";
import ProductCard from "../../molecules/ProductCard";
import axios from "../../../utils/axios";

const LatestProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchLatestData = async () => {
      try {
        const response = await axios.get("/products?limit=3&sort=latest");
        const data = response.data;
        setProducts(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLatestData();
  }, []);

  return (
    <section className="mt-20">
      <Heading text="Produk Terbaru" />
      <div className="mt-10 flex flex-wrap items-center justify-center gap-9">
        {products.map((product) => {
          const productVariant = product.color + " " + product.storage;
          return (
            <ProductCard
              key={product.id}
              name={product.title}
              image={product.images}
              id={product.id}
              price={product.price}
              variant={productVariant}
            />
          );
        })}
      </div>
    </section>
  );
};

export default LatestProduct;
