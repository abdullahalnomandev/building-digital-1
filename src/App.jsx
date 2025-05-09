import CompanyLogo from "./components/Home/CompanyLogo";
import FAQ from "./components/Home/FAQ";
import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";
import Pricing from "./components/Home/Pricing";
import Service from "./components/Home/Service";
import Service2 from "./components/Home/Service2";
import Testimonial from "./components/Home/Testimonial";
import Trial from "./components/Home/Trial";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <CompanyLogo />
      <Service />
      <Service2 />
      <Testimonial />
      <Pricing />
      <FAQ />
      <Trial />
      <Footer />
    </>
  );
}
