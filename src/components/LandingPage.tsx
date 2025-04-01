import Navbar from "./Navbar/navbar";
import Hero from "./Hero/hero";
import About from "./About/about";
import Faq from "./Faq/Faq";
import Footer from "./Footer/footer";
import ValueProposition from "./Value/value";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ValueProposition />
      <Faq />
      <Footer />
    </div>
  );
};

export default LandingPage;
