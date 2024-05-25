import HeroHomepage from "../components/organisms/HeroHomepage";
import FeaturedSection from "../components/organisms/FeaturedSection";

const Homepage = () => {
  return (
    <div className="mx-10 md:mx-20 lg:mx-28">
      <HeroHomepage />
      <FeaturedSection />
      <div className="mb-20" />
    </div>
  );
};

export default Homepage;
