import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import Breadcrumb from "../components/atoms/Breadcrumb";
import ProductCard from "../components/molecules/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/categories");
      const data = response.data;

      setProducts(data.data);
    };

    fetchData();
  }, []);

  const breadcrumbItems = [
    { label: "Beranda", to: "/" },
    { label: "Kategori", to: null },
  ];

  return (
    <section className="mx-10 my-10 md:mx-20 lg:mx-28">
      <Breadcrumb items={breadcrumbItems} />
      {products.map((category) => (
        <div key={category.name} className="mt-10">
          <h2 className="text-3xl font-semibold text-primary-500">
            {category.name}
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-9">
            {category.products.slice(0, 3).map((product) => {
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
          <div className="mt-5 text-center">
            <Link
              to={`/categories/${category.slug}`}
              className="btn btn-normal"
            >
              Lihat Semua
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
