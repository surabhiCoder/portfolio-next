import React from "react";

const Footer = () => {
  return (
    <footer className="footer white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 m-10px-tb">
            <div className="nav justify-content-center justify-content-md-start">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 m-10px-tb text-center text-md-right">
            <p>© 2020 copyright all right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
