import HeroSection from "../components/hero/HeroSection";
import HomeShowReel from "../components/home-show-reel/HomeShowReel";
import NewsHero from "../components/news-hero/NewsHero";
import Project from "../components/work/Project";
import Footer from "../shared/Footer";

const Home = () => {
  return (
    <div data-scroll-container>
      <HeroSection />
      <Project />
      <HomeShowReel />
      <NewsHero />
      <Footer />
    </div>
  );
};

export default Home;
