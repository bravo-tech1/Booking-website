import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LandingAr from "./LandingAr";

export default function Header() {
  var today = new Date();
  var time = today.getHours();
  const [dark, setDark] = useState(false);
  let handleMode = () => {
    setDark(!dark);
    localStorage.setItem("dark", dark);
  };

  window.dispatchEvent(new Event("storage"));

  useEffect(() => {
    if (time >= "6" && time <= "18") {
      localStorage.setItem("dark", false);
    } else if (time < "6") {
      localStorage.setItem("dark", true);
    } else if (time > "18") {
      localStorage.setItem("dark", true);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      document.body.classList = "dark-theme";
    } else {
      document.body.classList = "";
    }
  }, [dark]);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light  fixed-top arabic"
        dir="rtl"
      >
        <div className="container d-flex justify-content-between align-items-center">
          <img
            className="img-fluid logo"
            src={require("../assets/images/logo.png")}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main"
            aria-controls="main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main">
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0 custom-nav"
              style={{ paddingRight: "0" }}
            >
              <li className="nav-item">
                <Link className="nav-link" to="/ar">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about/ar">
                  عن الشركة
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact/ar">
                  تواصل معنا
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/featured/ar">
                  اخر العروض
                </Link>
              </li>
            </ul>

            <div className="lang d-flex align-items-center mr-4 text-black-50">
              <Link to="/">EN</Link>
            </div>
            {localStorage.getItem("dark") === "true" ? (
              <i className="fa-sharp fa-solid fa-sun" onClick={handleMode}></i>
            ) : (
              <i className="fa-solid fa-moon" onClick={handleMode}></i>
            )}
          </div>
        </div>
      </nav>
      {window.location.pathname === "/ar" && <LandingAr />}
    </div>
  );
}
