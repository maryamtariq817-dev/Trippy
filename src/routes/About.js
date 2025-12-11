import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Hero
        className="hero"
        heroImg="https://cdn.pixabay.com/photo/2020/06/06/15/03/travel-5266875_1280.jpg"
        title="About "
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
