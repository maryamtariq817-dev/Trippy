import "./DestinationStyles.css";
import DestinationData from "../components/DestinationData";

function Destination() {
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the oppertunity to see alot within a time frame.</p>

        <DestinationData
          className="first-des"
          heading="Taal Volcano, Batangas"
          text="Taal Volcano is one of the Philippines’ most iconic natural
        wonders, known for its crater lake and breathtaking landscapes.
        Located in Batangas, it offers stunning panoramic views that
        attract adventurers and nature lovers alike. Visitors can enjoy
        scenic boat rides, hiking trails, and photo-perfect spots
        overlooking the volcano. A trip to Taal promises a refreshing
        escape and an unforgettable travel experience."
          img1={
            "https://cdn.pixabay.com/photo/2017/04/25/10/24/volcano-2259249_960_720.jpg"
          }
          img2={
            "https://cdn.pixabay.com/photo/2024/01/04/21/54/volcano-8488486_960_720.jpg"
          }
        />
        <DestinationData
          className="first-des-reverse"
          heading="Mt. Daguldul, Batangas"
          text="Mt. Daguldul offers a rewarding mix of forest trails, sea views, and refreshing coastal breezes—perfect for both beginners and seasoned hikers. The journey features lush greenery, friendly local communities, and scenic rest stops along the way. At the summit, you’ll be greeted with stunning views of Batangas’ coastline and nearby mountains. It’s a peaceful escape for nature lovers seeking adventure and relaxation in one trip."
          img1={
            "https://cdn.pixabay.com/photo/2017/04/25/10/24/volcano-2259249_960_720.jpg"
          }
          img2={
            "https://cdn.pixabay.com/photo/2024/01/04/21/54/volcano-8488486_960_720.jpg"
          }
        />
      </div>
    </>
  );
}
export default Destination;
