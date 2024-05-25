import Featured from "../molecules/Featured";
import {
  Guarantee,
  HandHoldingDollar,
  Discount,
  PaymentHistory,
} from "../atoms/icons";

const FeaturedSection = () => {
  return (
    <section className="mt-10 grid grid-cols-2 place-content-center gap-8 md:grid-cols-4">
      <Featured icon={<Guarantee />} text="Kualitas Terbaik" />
      <Featured icon={<HandHoldingDollar />} text="Garansi Terbaik" />
      <Featured icon={<Discount />} text="Penawaran & Diskon" />
      <Featured icon={<PaymentHistory />} text="Transaksi Aman" />
    </section>
  );
};

export default FeaturedSection;
