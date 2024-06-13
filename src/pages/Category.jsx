import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/atoms/Breadcrumb";
import ProductCard from "../components/molecules/ProductCard";
import axios from "../utils/axios";

const Category = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/categories/${slug}`);
        const data = response.data;
        setCategory(data.data);
      } catch (error) {
        console.error("Error fetching category:", error);
        setCategory(null);
      }
    };

    fetchData();
  }, [slug]);

  if (!category) {
    return <p>Loading...</p>;
  }

  const breadcrumbItems = [
    { label: "Beranda", to: "/" },
    { label: "Kategori", to: "/products" },
    { label: category.name, to: null },
  ];

  return (
    <section className="mx-10 my-10 md:mx-20 lg:mx-28">
      <Breadcrumb items={breadcrumbItems} />
      <div key={category.name} className="mt-10">
        <h2 className="text-3xl font-semibold text-primary-500">
          {category.name}
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-9">
          {category.products.map((product) => {
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
          <Link to={`/products`} className="btn btn-normal">
            Kembali Ke Kategori
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Category;
