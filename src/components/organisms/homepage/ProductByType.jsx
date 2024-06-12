import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../../atoms/Heading";
import BrandType from "../../atoms/BrandType";
import ProductCard from "../../molecules/ProductCard";
import axios from "../../../utils/axios";

const ProductByType = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const responseBrand = await axios.get("/categories");
        const dataBrand = responseBrand.data;
        setBrands(dataBrand.data);
        setSelectedBrand(dataBrand.data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      const fetchProductsByBrand = async () => {
        try {
          const responseProducts = await axios.get(
            `/categories/${selectedBrand.slug}`,
          );
          const dataProducts = responseProducts.data;
          setProducts(dataProducts.data.products.slice(0, 3));
        } catch (error) {
          console.error(error);
        }
      };

      fetchProductsByBrand();
    }
  }, [selectedBrand]);

  return (
    <section className="mt-20">
      <Heading text="Produk Sesuai Merek" />
      <div className="mt-10 grid grid-cols-2 justify-items-center gap-5 md:grid-cols-4 lg:grid-cols-6">
        {brands.map((brand) => (
          <BrandType
            key={brand.id}
            brand={brand.name}
            onClick={() => setSelectedBrand(brand)}
            outline={selectedBrand?.id !== brand.id}
          />
        ))}
      </div>
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
      <div className="mt-[72px] text-center">
        <Link to="/product" className="btn btn-normal">
          Lihat Semua
        </Link>
      </div>
    </section>
  );
};

export default ProductByType;
