import { Link } from "react-router-dom";
import Heading from "../../atoms/Heading";

const CallToAction = () => {
  return (
    <section className="mt-20">
      <Heading text="Jual HP Bekasmu Disini!" />
      <div className="mt-12 flex flex-col items-center justify-center gap-8 rounded-[20px] border border-gray-400 bg-white py-10">
        <h6 className="text-center text-2xl font-medium leading-9 text-gray-600">
          Klik tombol dibawah untuk menjual HP Bekas anda di Gadgetly
        </h6>
        <Link to="/selling" className="btn btn-normal">
          Jual Sekarang
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
