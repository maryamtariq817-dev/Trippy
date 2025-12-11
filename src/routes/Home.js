import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero
        className="hero"
        heroImg="https://cdn.pixabay.com/photo/2018/05/11/15/32/landscape-3390834_1280.jpg"
        title="Your Journey Your Story"
        text="Choose Your favourite Destination."
        btntext="Travel Plan"
        url="/"
        btnClass="btn-show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
