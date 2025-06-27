import Hero from "../components/Hero";
import Perks from "../components/Perks";
import Timeline from "../components/Timeline";

const Home = () => {
  return (
    <div className="grid-bg">
      <Hero />
      <Timeline />
      <Perks />
    </div>
  );
};

export default Home;