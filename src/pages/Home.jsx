import Domains from "../components/Domains";
import Hero from "../components/Hero";
import Perks from "../components/Perks";
import Timeline from "../components/Timeline";
import LoginNavbar from "../components/RegisterNavbar"

const Home = () => {
  return (
    <div className="grid-bg">
      <LoginNavbar/>
      <Hero />
      <Timeline />
      <Perks />
      <Domains />
    </div>
  );
};

export default Home;