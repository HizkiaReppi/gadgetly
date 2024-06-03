import HeroHomepage from "../components/organisms/homepage/HeroHomepage";
import FeaturedSection from "../components/organisms/homepage/FeaturedSection";
import LatestProduct from "../components/organisms/homepage/LatestProduct";
import ProductByType from "../components/organisms/homepage/ProductByType";
import BundleProduct from "../components/organisms/homepage/BundleProduct";
import Promo from "../components/organisms/homepage/Promo";
import CallToAction from "../components/organisms/homepage/CallToAction";
import Testimonials from "../components/organisms/homepage/Testimonials";

const Homepage = () => {
  return (
    <div className="mx-10 md:mx-20 lg:mx-28">
      <HeroHomepage />
      <FeaturedSection />
      <LatestProduct />
      <ProductByType />
      <BundleProduct />
      <Promo />
      <CallToAction />
      <Testimonials />
      <div className="mb-20" />
    </div>
  );
};

export default Homepage;
