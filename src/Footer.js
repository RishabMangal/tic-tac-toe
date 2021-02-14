import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row mr-0">
          <div
            className="col-sm-6"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <a href="https://github.com/RishabMangal">
              <i className="fab fa-git text-left px-1 mr-auto"></i>
            </a>
            <a href="mailto:rishabhmangal1@gmail.com?subject=Awesome App">
              <i className="fas fa-envelope text-left px-1 mr-auto"></i>
            </a>
            <a href="https://www.linkedin.com/in/rishab-m-00b60a103/">
              <i className="fab fa-linkedin text-left px-1 mr-auto"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=9928799243&text=Hello">
              <i className="fab fa-whatsapp text-left px-1 mr-auto"></i>
            </a>
            <a href="https://www.facebook.com/rishabh.mangal.77">
              <i className="fab fa-facebook text-left px-1 mr-auto"></i>
            </a>
            <a href="https://www.instagram.com/rishabhmangal1/">
              <i className="fab fa-instagram text-left px-1 mr-auto"></i>
            </a>
            <a href="https://github.com/RishabMangal">
              <i className="fab fa-github text-left px-1 mr-auto"></i>
            </a>
          </div>
          <div className="col-sm-6">
            <p className="text-secondary text-right text-weight-normal lead">
              Developed By Rishab Mangal
              <br /> Version 1.0.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
