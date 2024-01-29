import CarouselHome from "../components/Carousel/CarouselHome";
import WhiteSection from "../components/WhiteSection/WhiteSection";
import AboutUs from "../components/About/AboutUs";
import Skills from "../components/Skills/Skills";
import Events from "../components/Events/Events";
import TeamHome from "../components/TeamHome/TeamHome";

const Home = () => {
  return (
    <>
      <CarouselHome/>
      <WhiteSection />
      <AboutUs />
      <Skills />
      <Events />
      <TeamHome />
    </>
  );
};

export default Home;
