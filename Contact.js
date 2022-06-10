import React, { useState } from "react";
import back2 from "./Images/back2.JPG";
import "./Dog2004.css";
export default function Contact() {
  const [val, setVal] = useState();


  const clear = () => {
    setVal("");
  };

  return (
    <div>
      <div
  
        style={{
          backgroundImage: `url(${back2})`,
          backgroundSize: "cover",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          opacity: "0.9",
       
        }}
      
      >
        <div className="container">
          <div className="box">
            <div className="content1">
              <div className="btn">
                <div id="header5151" />
                <h1 id="h9588">Contact Us</h1>

                <input
                  type="text"
                  placeholder="myname"
                  value={val}
                  class="input-text"
                />
                <input
                  type="email"
                  id="parul1007"
                  value={val}
                  placeholder="myemail"
                  class="input-text"
                />

                <textarea
                  name="textarea1"
                  id="area"
                  cols="30"
                  value={val}
                  rows="6"
                  placeholder="Your comments"
                  class="input-text"
                ></textarea>
                <button id="golu" onClick={clear}>
                  Submit
                </button>

                {/* <div class="socialmeadia4">
           <a href="https://facebook.com" ><i class="fab fa-facebook-f"></i></a>
           <a href="https://instagram.com" ><i class="fab fa-instagram"></i></a>
           <a href="https://linkedin.com" ><i class="fab fa-linkedin"></i></a>
           <a href="https://twitter.com" ><i class="fab fa-twitter"></i></a>
       </div> */}
              </div>
            </div>
          </div>

          <div className="divider">
            <div className="image">
              {" "}
              <img
                src="https://media.istockphoto.com/photos/large-group-of-various-breeds-of-dogs-together-on-a-white-background-picture-id1278389684?k=20&m=1278389684&s=612x612&w=0&h=L830XwlcFjPUc6c9-Kj5MfqJ7WHiwHlerStkRKDdQZc="
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>

      </div>
     
    </div>
  );
}
