import HeroHomepage from "../components/organisms/homepage/HeroHomepage";
import FeaturedSection from "../components/organisms/homepage/FeaturedSection";
import LatestProduct from "../components/organisms/homepage/LatestProduct";

const Homepage = () => {
  return (
    <div className="mx-10 md:mx-20 lg:mx-28">
      <HeroHomepage />
      <FeaturedSection />
      <LatestProduct />
      <div className="mb-20" />
    </div>
  );
};

export default Homepage;
