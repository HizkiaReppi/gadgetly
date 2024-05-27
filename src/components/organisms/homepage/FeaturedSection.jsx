import Featured from "../../molecules/Featured";
import {
  Guarantee,
  HandHoldingDollar,
  Discount,
  PaymentHistory,
} from "../../atoms/icons";

const FeaturedSection = () => {
  return (
    <section className="mt-10 grid grid-cols-2 place-content-center justify-items-center gap-6 md:grid-cols-4 md:gap-7 lg:gap-8">
      <Featured icon={<Guarantee />} text="Kualitas Terbaik" />
      <Featured icon={<HandHoldingDollar />} text="Garansi Terbaik" />
      <Featured icon={<Discount />} text="Penawaran & Diskon" />
      <Featured icon={<PaymentHistory />} text="Transaksi Aman" />
    </section>
  );
};

export default FeaturedSection;
