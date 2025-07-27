import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import UpcomingAdventures from "../components/UpcomingAdventures";
import CommunityTrips from "../components/CommunityTrips";
import CommunityTreks from "../components/CommunityTreks";
import Amenities from "../components/Amenities";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import TeamMembers from "../components/TeamMmebers";
import MetaData from "../container/MetaData";

const Home = () => (
  <div className="cursor-default">
    <MetaData 
      title="Suhane Safar - Adventure Travel Community | Best Travel Trips in India"
      description="Join India's fastest-growing youth travel community. Adventure trips, community treks, and unforgettable experiences in Manali, Shimla, Udaipur, and more. Built by IIT Roorkee students."
      keywords="travel community, adventure trips, youth travel, trekking, Manali, Shimla, Udaipur, Dharamshala, Kareri Lake, IIT Roorkee, student travel, group trips, solo travel, female safety, travel India"
      image="https://suhanesafar.com/Images/hero-bg.jpg"
      url="https://suhanesafar.com/"
    />
    <Navbar />
    <HeroSection />
    <UpcomingAdventures />
    <CommunityTrips />
    <CommunityTreks />
    <Amenities />
    <WhyChooseUs />
    <Reviews />
    <TeamMembers />
    <Footer />
  </div>
);

export default Home;