import PicHeadline from "../../../assets/sellers/seller-hero-image.png";
import { Link } from "react-router-dom";

const HeroHomepage = () => {
  return (
    <section className="mt-16 flex h-full w-full flex-col items-center justify-between gap-10 rounded-[20px] bg-[#FFC047] px-8 py-14 shadow-lg md:flex-row md:px-9 md:py-12 lg:px-10 lg:py-12">
      <div>
        <h1 className="text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
          Selamat Datang Di{" "}
          <span className="text-3xl font-semibold md:text-4xl lg:text-[50px]">
            Gadgetly
          </span>
        </h1>
        <p className="mb-6 mt-5 text-justify text-base font-medium text-white md:mb-12 md:mt-10 md:text-lg lg:text-xl">
          Dapatkan pengalaman Jual HP bekas anda dengan mudah dan aman
        </p>
        <Link to="/sellers/selling" className="btn btn-normal">
          Jual Sekarang!
        </Link>
      </div>
      <div className="mt-5 flex w-full justify-end md:mt-0 md:w-9/12">
        <img
          src={PicHeadline}
          alt="Pic Headline"
          className="w-full object-cover md:w-9/12"
        />
      </div>
    </section>
  );
};

export default HeroHomepage;
