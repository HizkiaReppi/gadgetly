import { useState, useEffect, useCallback } from "react";
import Heading from "../../atoms/Heading";
import BrandType from "../../atoms/BrandType";
import ProductCard from "../../molecules/ProductCard";
import axios from "../../../utils/axios";
import { debounce } from "../../../utils/debounce";

const ProductByType = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [page, setPage] = useState(1);

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

  const fetchProductsByBrand = useCallback(
    debounce(async (brand, page) => {
      try {
        const responseProducts = await axios.get(`/categories/${brand.slug}`, {
          params: { page, limit: 3 },
        });
        const dataProducts = responseProducts.data;
        setProducts(dataProducts.data.products);
      } catch (error) {
        console.error(error);
      }
    }, 300),
    [],
  );

  useEffect(() => {
    if (selectedBrand) {
      fetchProductsByBrand(selectedBrand, page);
    }
  }, [selectedBrand, page, fetchProductsByBrand]);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <section className="mt-20">
      <Heading text="Produk Sesuai Merek" />
      <div className="mt-10 grid grid-cols-2 justify-items-center gap-5 md:grid-cols-4 lg:grid-cols-6">
        {brands.map((brand) => (
          <BrandType
            key={brand.id}
            brand={brand.name}
            onClick={() => handleBrandClick(brand)}
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
      {products.length > 0 && (
        <div className="mt-[72px] text-center">
          <button className="btn btn-normal" onClick={handleLoadMore}>
            Lihat Lagi
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductByType;
