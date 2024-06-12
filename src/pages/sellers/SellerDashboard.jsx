import { Link } from "react-router-dom";
import HeroSeller from "../../components/organisms/sellers/HeroSeller";
import { sellerMenu } from "../../constants/data";

const SellerDashboard = () => {
  return (
    <div className="mx-10 md:mx-20 lg:mx-28">
      <HeroSeller />
      <h2 className="mb-7 mt-10 text-center text-3xl font-semibold text-primary-500">
        Menu Jual
      </h2>
      <div className="grid grid-cols-2 justify-items-center gap-2 md:grid-cols-3">
        {sellerMenu.map((data, index) => (
          <Link
            to={data.link}
            key={index}
            className="inline-flex h-32 w-48 flex-col items-center justify-center gap-2 bg-white shadow-md lg:h-52 lg:w-80"
          >
            <img
              src={data.image}
              alt={`${data.title} Ikon`}
              className="w-10 object-contain lg:w-16"
            />
            <h6>{data.title}</h6>
          </Link>
        ))}
      </div>
      <div className="mb-20"></div>
    </div>
  );
};

export default SellerDashboard;
