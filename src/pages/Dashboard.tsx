import Card from "../components/moviecard";
import Hero from "../components/Hero";
import Arrival from "../components/Arrival";
import Exclusive from "../components/ExclusiveVideos";
import Casts from "../components/CastsSection";
import Footer from "../components/Footer";


const Dashboard = (): any => {
  return (
    <>
      <Hero />
      <Card />
      <Arrival />
      <Exclusive />
      <Casts />
      <Footer />
    </>
  );
};

export default Dashboard;
