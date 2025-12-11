import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Hero
        className="hero"
        heroImg="https://cdn.pixabay.com/photo/2018/05/11/15/32/landscape-3390834_1280.jpg"
        title="Contact Us"
      />
      <ContactUs />
      <Footer />
    </>
  );
}
export default Contact;
