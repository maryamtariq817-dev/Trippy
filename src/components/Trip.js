import "./TripStyles.css";
import TripData from "../components/TripData";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="trip-card">
        <TripData
          image={
            "https://cdn.pixabay.com/photo/2017/02/24/07/06/bali-2094097_1280.jpg"
          }
          heading="Trip in Indonesia"
          text="Experience Indonesia’s diverse culture, tropical beaches, and breathtaking natural wonders. From Bali’s serene temples to Java’s volcanic landscapes, every moment feels like a new adventure."
        />

        <TripData
          image={
            "https://cdn.pixabay.com/photo/2016/11/13/12/52/kuala-lumpur-1820944_1280.jpg"
          }
          heading="Trip to Malaysia"
          text="Malaysia offers a perfect blend of modern cities, lush rainforests, and vibrant multicultural experiences. Explore Kuala Lumpur’s iconic skyline and discover the rich traditions of Penang and Malacca."
        />

        <TripData
          image={
            "https://cdn.pixabay.com/photo/2021/02/07/17/10/azerbaijan-5992035_960_720.jpg"
          }
          heading="Trip to Azerbaijan"
          text="Azerbaijan’s unique mix of ancient history and modern architecture creates a truly captivating journey. Wander through Baku’s futuristic streets and explore the scenic beauty of the Caucasus mountains."
        />
      </div>
    </div>
  );
}
export default Trip;
