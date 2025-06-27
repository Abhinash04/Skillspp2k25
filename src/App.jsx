import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import MobileView from "./components/MobileView";
import "./styles.css";

function App() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      {isMobile ? (
        <MobileView />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
          </Route>
        </Routes>
      )}
    </Router>
  );
}

export default App;