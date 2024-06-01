/**
 * TODO
 * fix: integrate sort data by brand
 */

import Heading from "../../atoms/Heading";
import ProductCard from "../../molecules/ProductCard";
import productImage from "../../../assets/homepage/product-image.png";
import { formatToRp } from "../../../utils/format";
import BrandType from "../../atoms/BrandType";
import { Link } from "react-router-dom";

const ProductByType = () => {
  return (
    <section className="mt-20">
      <Heading text="Produk Sesuai Merek" />
      <div className="mt-10 grid grid-cols-2 justify-items-center gap-5 md:grid-cols-4 lg:grid-cols-6">
        <BrandType brand="Iphone" />
        <BrandType brand="Samsung" outline />
        <BrandType brand="Oppo" outline />
        <BrandType brand="Vivo" outline />
        <BrandType brand="Realme" outline />
        <BrandType brand="Xiaomi" outline />
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-9">
        <ProductCard
          name="Xiaomi Redmi 13C "
          image={productImage}
          id={"1"}
          price={formatToRp(1400000)}
          variant={"Clover Green 128 GB"}
        />
        <ProductCard
          name="Xiaomi Redmi 13C "
          image={productImage}
          id={"1"}
          price={formatToRp(1400000)}
          variant={"Clover Green 128 GB"}
        />
        <ProductCard
          name="Xiaomi Redmi 13C "
          image={productImage}
          id={"1"}
          price={formatToRp(1400000)}
          variant={"Clover Green 128 GB"}
        />
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
