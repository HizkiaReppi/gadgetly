import Heading from "../../atoms/Heading";
import ProductCard from "../../molecules/ProductCard";

const SimilarProduct = ({ products }) => {
  return (
    <section className="mt-20">
      <Heading text="Kamu Mungkin Juga Suka Ini" />
      <div className="mt-10 flex flex-wrap items-center justify-center gap-9">
        {products?.map((product) => {
          const productVariant = product.color + " " + product.storage;
          return (
            <ProductCard
              key={product.id}
              name={product.title}
              image={
                typeof product.images === "object"
                  ? product.images[0].image_url
                  : product.image
              }
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

export default SimilarProduct;
