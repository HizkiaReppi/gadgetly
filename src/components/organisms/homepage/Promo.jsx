import Button from "../../atoms/Button";
import CategoryLabel from "../../atoms/CategoryLabel";
import Heading from "../../atoms/Heading";
import productPromoImage from "../../../assets/homepage/iphone-12-pro-max-256gb-blue.png";
import { formatToRp } from "../../../utils/format";

const Promo = () => {
  return (
    <section className="mt-20">
      <Heading text="Promo" />
      <div className="relative mt-14 flex flex-col items-center justify-between gap-x-32 gap-y-10 rounded-[20px] border border-gray-400 bg-white px-5 py-7 md:flex-row md:px-9">
        <CategoryLabel category="Diskon" className="absolute left-8 top-8" />
        <div className="ml-0 mt-10 md:ml-20 md:mt-0">
          <h6 className="mt-10 text-center text-3xl font-semibold text-black md:text-4xl">
            IPhone 12 Pro Max
          </h6>
          <p className="mt-[14px] text-center text-xl font-medium text-gray-600">
            Black 128GB
          </p>
          <p className="mb-8 mt-7 text-center text-[22px] font-medium leading-6 text-orange-500">
            {formatToRp(600_000_000)}
          </p>
          <div className="text-center">
            <Button>Beli Sekarang</Button>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row">
          <div className="mb-3 md:mb-0">
            <p className="text-xl font-medium text-gray-600">
              Kode Promo: CSJY123
            </p>
            <p className="mt-[9px] text-xl font-medium text-gray-600">
              Promo Berakhir: 25/06/2024
            </p>
          </div>
          <img
            src={productPromoImage}
            alt="Promo Product Image"
            className="h-[398px] w-[284px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Promo;
