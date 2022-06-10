import React from "react";
import back1 from "./Images/back1.JPG";
// import back2 from "./Images/back2.JPG";
import "./Parul2004.css";
export default function Main() {
  return (
    <div
      className="back1"
      style={{
        backgroundImage: `url(${back1})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        opacity: "0.8",
      }}
    >
      <div className="container">
        <div className="box">
          <nav className="nav1">
            <ul className="ul1">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Servics</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="content">
            <h1>Save Life !</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              dolorum accusantium maxime aut eum facilis?
            </p>
            <div className="btn">
                <button className="btn1">Sign In</button>
                <button className="btn2">Sign Up</button>
            </div>
          </div>
        </div>

        <div className="divider">
          
          <div className="image">
            {" "}
            <img
              src="https://i.pinimg.com/originals/75/58/40/7558407d7298d8f6bef5bee18e4d39b8.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
