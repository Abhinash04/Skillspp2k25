import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MobileView from "./components/MobileView";
import Register from "./pages/Register";
import LoginS from "./pages/LoginS";
import "./styles.css";
import Profile from "./pages/Profile";

function App() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [name, setName] = useState("");
  return (
    <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/logins" element={<LoginS />} />
          <Route path="/profile" element={<Profile setName={setName}/>} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;