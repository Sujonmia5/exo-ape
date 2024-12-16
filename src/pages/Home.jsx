import HeroSection from "../components/hero/HeroSection";
import HomeShowReel from "../components/home-show-reel/HomeShowReel";
import NewsHero from "../components/news-hero/NewsHero";
import Project from "../components/work/Project";
import Footer from "../shared/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Project />
      <HomeShowReel />
      <NewsHero />
      <Footer />
    </>
  );
};

export default Home;
