import Tabsexveptionservices from "@/components/exceptionalservices/exceptionalservices";
import AboutSection from "../components/Aboutsec";
import Hero from "../components/Hero";
import Servicessec from "../components/services/Services";
import CardsCarousel from "@/components/distinguishes";
import Statisticstrp from "@/components/Statisticstrp";
import News from "@/components/News";
import Footer from "@/components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Servicessec/>
      <Tabsexveptionservices />
      <CardsCarousel />
      <Statisticstrp/>
    
    </>
  );
}

export default Home;
