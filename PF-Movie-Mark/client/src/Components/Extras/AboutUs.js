import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div className="about">
        <h1>About Us</h1>
      </div>

      <div className="text">
        <h2>
          Hello, this project was carried out by Henry's students with the aim
          of finalizing the bootcamp by presenting this final project. Its
          objective is to make it easier for moviegoers to acquire movie tickets
          remotely. In addition, we have the possibility of adding your favorite
          treats and thus, save you long waiting lines.
        </h2>
        <h2>Here is our contact information</h2>
      </div>
      <div className="about-father">
        <div className="item">
          <h3>Rocio Garcia Lofrano</h3>
          <div className="imgabout">
            <img
              src="https://i.imgur.com/bs6mAJd.png"
              alt="Img not found"
              style={{ width: "120px" }}
            />
          </div>

          <Link to="https://www.linkedin.com/in/rociogarcia-fullstack/">
            <button>linkedIn</button>
          </Link>

          <Link to="https://github.com/RocioGL33">
            <button>GitHub</button>
          </Link>
        </div>
        <div className="item">
          <h3>Nacarith Sequera</h3>
          <div className="imgabout">
            <img
              src="https://i.imgur.com/ITssu8w.jpg"
              alt="Img not found"
              style={{ width: "120px" }}
            />
          </div>

          <Link to="https://www.linkedin.com/in/nacarith-sequera/">
            <button>linkedIn</button>
          </Link>

          <Link to="https://github.com/nacalej">
            <button>GitHub</button>
          </Link>
        </div>
        <div className="item">
          <h3>Juan Manuel Vergara</h3>
          <div className="imgabout">
            <img
              src="https://i.imgur.com/mF1nwgF.png"
              alt="Img not found"
              style={{ width: "120px" }}
            />
          </div>

          <Link to="https://www.linkedin.com/in/juan-manuel-vergara-dev/">
            <button>linkedIn</button>
          </Link>

          <Link to="https://github.com/juanvrgr">
            <button>GitHub</button>
          </Link>
        </div>
        <div className="item">
          <h3>Candela Pedelhez</h3>
          <div className="imgabout">
            <img
              src="https://i.imgur.com/Z1upvRn.png"
              alt="Img not found"
              style={{ width: "120px" }}
            />
          </div>

          <Link to="https://www.linkedin.com/in/candela-pedelhez/">
            <button>linkedIn</button>
          </Link>

          <Link to="https://github.com/CandelaPedelhez">
            <button>GitHub</button>
          </Link>
        </div>
        <div className="item">
          <h3>Francisco Cedermaz</h3>
          <div className="imgabout">
            <img
              src="https://i.imgur.com/vKCsoFi.png"
              alt="Img not found"
              style={{ width: "120px" }}
            />
          </div>

          <Link to="hhttps://www.linkedin.com/in/francedermaz/">
            <button>linkedIn</button>
          </Link>

          <Link to="https://github.com/francedermaz">
            <button>GitHub</button>
          </Link>
        </div>
      </div>
      <div className="text">
        <h2>Thanks for the support.</h2>
      </div>

      <Link to="/home">
        <button>Back to home</button>
      </Link>
    </>
  );
}
