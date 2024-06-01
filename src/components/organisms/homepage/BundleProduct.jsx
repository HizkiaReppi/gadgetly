import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";
import IconButton from "../../atoms/IconButton";
import { Cart, Heart } from "../../atoms/icons";
import ProductGallery from "../../molecules/ProductGallery";
import productImage from "../../../assets/homepage/product-image.png";
import productBundleImage from "../../../assets/homepage/product-bundle.jpeg";

const images = [productImage, productBundleImage];

const BundleProduct = () => {
  return (
    <section className="mt-20 flex flex-col justify-center gap-12">
      <Heading text="Penawaran" />
      <div className="flex flex-col justify-center gap-12 md:flex-row">
        <div className="bg-white p-9">
          <div className="flex items-center justify-end gap-3">
            <IconButton outline icon={<Heart pathFill="#f97316" />} />
            <IconButton icon={<Cart />} />
          </div>
          <div className="text-center">
            <h6 className="mb-[18px] mt-4 text-3xl font-medium text-black">
              Bundle <br /> Iphone 8 & 8 Plus
            </h6>
            <p className="text-xl font-medium text-gray-600">
              Silver & Gold <br /> 128 GB
            </p>
            <p className="mb-[34px] mt-[33px] text-[22px] font-medium text-orange-500">
              Rp 4.000.000
            </p>
            <p className="mb-6 text-xl font-medium text-gray-600">
              Domisili : Tangerang
            </p>
            <Button>Beli Sekarang</Button>
          </div>
        </div>
        <ProductGallery images={images} />
      </div>
    </section>
  );
};

export default BundleProduct;
