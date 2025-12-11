import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Services() {
  return (
    <>
      <Hero
        className="hero"
        heroImg="https://cdn.pixabay.com/photo/2018/12/12/16/02/waterfall-3871094_1280.jpg"
        title="Services"
      />

      <Trip />
      <Footer />
    </>
  );
}
export default Services;
