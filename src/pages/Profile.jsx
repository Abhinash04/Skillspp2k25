import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import week0 from "../assets/images/week0.png";
import week1 from "../assets/images/week1.png";
import week2 from "../assets/images/week2.png";
import week3 from "../assets/images/week3.png";
import week0Locked from "../assets/images/week0Locked.png";
import week1Locked from "../assets/images/week1Locked.png";
import week2Locked from "../assets/images/week2Locked.png";
import week3Locked from "../assets/images/week3Locked.png";
import link from "../assets/images/link.png";
import list from "../assets/images/list.png";
import profile from "../assets/images/profile.png";
import ProfileNavbar from "../components/ProfileNavbar";
import Footer from "../components/Footer"
import profileEllipse1 from "../assets/images/ellipse-profile-laptop.png"

const Profile = ({ setName }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://skills-backend-r5yi.onrender.com/users/dashboard",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        setUser(result.userData);
        setName(user.username);
        setLoading(false);
        // console.log(user);
      } catch (err) {
        setLoading(false);
        console.error(err.message);
      }
    };
    fetchData();
  }, [localStorage.getItem("authToken")]);

const username = user?.username || "name";
const email = user?.email || "email";
const domain1name = user?.domain1?.description || "Domain";
const domain2name = user?.domain2?.description || "Domain";

useEffect(() => {
  if (user?.username) {
    const firstName = user.username.split(" ")[0];
    setName(firstName);
    localStorage.setItem("userName", firstName);
  }
}, [user]);


  const web =
    "https://drive.google.com/drive/folders/1SzR8uqehuPGIaEczeIrYp4ltxzmA6Ynh";
  const app =
    "https://drive.google.com/drive/folders/1K46PS8dnqs-9iTBvt6ombRkQp8FItG8J";
  const cp =
    "https://drive.google.com/drive/folders/1lpWUa69EkfXQHU5QhPHVQw_3ls1-Z4GX";
  const blockchain =
    "https://drive.google.com/drive/folders/1dKkzWY-TFH2oFo3Uxq9BPdk6_QXNt8bI";
  const devops =
    "https://drive.google.com/drive/folders/1N4dfx0YEOOZMdHvksbDhbIDYVie4p8qr";
  const backend =
    "https://drive.google.com/drive/folders/1nsTqpjviIYWIcNeHeAwBZO4bcM2STm8E";
  const game =
    "https://drive.google.com/drive/folders/1sOnTuR1kDTt-jGRtrERONQBD98Yfm-5Z";
  const hacking =
    "https://drive.google.com/drive/folders/1buG8ef3PmeTFGPf-6fdkvbz9c6uXLrS6";
  const cloud =
    "https://drive.google.com/drive/folders/1iY0BB8UkctBoey1stSlrzsVNix7t22Xj";
  const ai =
    "https://drive.google.com/drive/folders/19YlwBRq93YDVbPApfXWu7AdgUO1vkZPl";

  const ui =
    "https://drive.google.com/drive/folders/1wWK8dv43VZgGWvG0FjVUpw3XBfdE4E5W";
  const videoEdit =
    "https://drive.google.com/drive/folders/1UreWS-pDMGpB8UBcAh-Yo5IMYWthTx_N";
  const graphicDes =
    "https://drive.google.com/drive/folders/1lyQ3VE8EZ1RS9F-Sl0rwlU9jqPZ3Nb1x";

  const iot =
    "https://drive.google.com/drive/folders/1FK2NymkcG1r5LD0llC8vEOebe5Nc9CjD";
  const ros =
    "https://drive.google.com/drive/folders/1X9wQ4Pd1OAK4opgKzhUJoI2dL3CJaIWJ";
  const micro =
    "https://drive.google.com/drive/folders/1Tzb5FtfAjufv8QkZmxHqbM7d0gF1Hx9D";

const domainMap = {
  "Cybersecurity Solutions": hacking,
  "CodeZed Coding Contest": cp,
  "Full Stack Development": web,
  "IoT & Microcontrollers": iot,
  "Artificial Intelligence & Machine Learning": ai,
  "Game Development": game,
  "DevOps & Cloud Computing": devops,
  "ROS Development": ros,
  "Blockchain Technologies": blockchain,
  "3D Design": graphicDes,
  "Visuals and UI/UX Design": ui,
  "Application Development": app,
  "Video and Motion Graphics": videoEdit
};

const getTask = (domainName) => {
  if (!user) return "";
  return domainMap[domainName] || "";
};

const getTask1 = () => getTask(domain1name);
const getTask2 = () => getTask(domain2name);


  return (
    <main className="grid-bg h-full">
      <ProfileNavbar />
      <div className="profile-wrapper">
        <div className="profile-head-wrapp">
          <div className="blue-head">All Your Records</div>
          <div className="topic-head">Your Profile</div>
        </div>
        <div className="profile-description-wrapper">
          <div className="profile-desc-left">
            <div className="task-wrapper">
              <div className="profile-all-badges">
                <div className="badge"><img src={user?.domain1?.week0?.isCompleted ? week0 : week0Locked} alt="" /></div>
                <div className="badge"><img src={user?.domain1?.week1?.isCompleted ? week1 : week1Locked} alt="" /></div>
                <div className="badge"><img src={user?.domain1?.week2?.isCompleted ? week2 : week2Locked} alt="" /></div>
                <div className="badge"><img src={user?.domain1?.week3?.isCompleted ? week3 : week3Locked} alt="" /></div>
              </div>
              <div className="task-desc">
                <div className="task-head">{domain1name}</div>
                <div className="task-links">
                  <img src={list} alt="" />
                  <Link
                    to={getTask1()}
                    target="_blank"
                  >Tasks</Link>
                </div>
                <div className="task-links">
                  <img src={link} alt="" />
                  <Link
                    to={user ? user.domain1.drive : ""}
                    target="_blank"
                  >Submit task submissions here</Link>
                </div>
              </div>
            </div>
            {user?.domain2.description === "" ? (
                <></>
            ) : (
              <div className="task-wrapper">
              <div className="profile-all-badges">
                <div className="badge"><img src={user?.domain2?.week0?.isCompleted ? week0 : week0Locked} alt="" /></div>
                <div className="badge"><img src={user?.domain2?.week1?.isCompleted ? week1 : week1Locked} alt="" /></div>
                <div className="badge"><img src={user?.domain2?.week2?.isCompleted ? week2 : week2Locked} alt="" /></div>
                <div className="badge"><img src={user?.domain2?.week3?.isCompleted ? week3 : week3Locked} alt="" /></div>
              </div>
              <div className="task-desc">
                <div className="task-head">{domain2name}</div>
                <div className="task-links">
                  <img src={list} alt="" />
                  <Link
                    to={getTask2()}
                    target="_blank"
                  >Tasks</Link>
                </div>
                <div className="task-links">
                  <img src={link} alt="" />
                  <Link
                    to={user ? user.domain2.drive : ""}
                    target="_blank"
                  >Submit task submissions here</Link>
                </div>
              </div>
            </div>
            )}
          </div>
          <div className="profile-right-wrapper">
            <div className="user-info">
              <div className="data">
                <i class='bx bx-user' style={{ fontSize: '22px' }}></i>
                <div className="name">{username}</div>
              </div>
              <div className="data">
                <i class='bx bx-envelope' style={{ fontSize: '22px' }}></i>
                <div className="mail">{email}</div>
              </div>
            </div>
            <div className="profile-sec-img" style={{ position: "relative" }}>
              <img src={profile} alt="" style={{ zIndex: "2" }} />
              <img
                src={profileEllipse1}
                alt=""
                className="ellipse2"
                style={{ position: "absolute", right: '0', zIndex: "1" }}
              />
            </div>
          </div>
        </div>
        <div className="claim-email">
          **Check your mail on every Thursday to claim the badges or certificates you have earned.
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Profile;
