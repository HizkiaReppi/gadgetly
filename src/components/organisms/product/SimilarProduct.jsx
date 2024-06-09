import Heading from "../../atoms/Heading";
import ProductCard from "../../molecules/ProductCard";
import productImage from "../../../assets/homepage/product-image.png";

const SimilarProduct = () => {
  return (
    <section className="mt-20">
      <Heading text="Kamu Mungkin Juga Suka Ini" />
      <div className="mt-10 flex flex-wrap items-center justify-center gap-9">
        <ProductCard
          name="Xiaomi Redmi 13C "
          image={productImage}
          id={"1"}
          price={1400000}
          variant={"Clover Green 128 GB"}
        />
        <ProductCard
          name="Xiaomi Redmi 13C "
          image={productImage}
          id={"1"}
          price={1400000}
          variant={"Clover Green 128 GB"}
        />
        <ProductCard
          name="Xiaomi Redmi 13C "
          image={productImage}
          id={"1"}
          price={1400000}
          variant={"Clover Green 128 GB"}
        />
      </div>
    </section>
  );
};

export default SimilarProduct;
