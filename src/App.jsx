import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Section1 from "./components/Section1";
import MobileView from "./components/MobileView";
import Register from "./pages/Register";
import LoginS from "./pages/LoginS";
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
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/logins" element={<LoginS />} />
          <Route path="*" element={<MobileView />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/logins" element={<LoginS />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Section1 />} />
          </Route>
        </Routes>
      )}
    </Router>
  );
}

export default App;