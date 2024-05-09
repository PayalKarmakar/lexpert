import React from "react";
import { Link } from "react-router-dom";
import carousel1 from "../../assets/img/carousel-1.jpg";
import carousel2 from "../../assets/img/carousel-2.jpg";
import { FaUserTie } from "react-icons/fa6";

export const Header = () => {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="m-0">
              <FaUserTie className="me-2" />
              LExpert
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="service.html" className="nav-item nav-link">
                Services
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Blog
                </a>
                <div className="dropdown-menu m-0">
                  <a href="blog.html" className="dropdown-item">
                    Blog Grid
                  </a>
                  <a href="detail.html" className="dropdown-item">
                    Blog Detail
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <a href="price.html" className="dropdown-item">
                    Pricing Plan
                  </a>
                  <a href="feature.html" className="dropdown-item">
                    Our features
                  </a>
                  <a href="team.html" className="dropdown-item">
                    Team Members
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="quote.html" className="dropdown-item">
                    Free Quote
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <button
              type="button"
              className="btn text-primary ms-3"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fa fa-search"></i>
            </button>
            <Link to="/login" className="btn btn-primary py-2 px-4 ms-3">
              Login
            </Link>
            {/* <a
              href="https://htmlcodex.com/startup-company-website-template"
              className="btn btn-primary py-2 px-4 ms-3"
            >
              Login
            </a> */}
          </div>
        </nav>
        <div
          id="header-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={carousel1} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Creative & Innovative
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Creative & Innovative Digital Solution
                  </h1>
                  <Link
                    to="/services"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Services
                  </Link>

                  <Link
                    to="/contact-us"
                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={carousel2} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    Creative & Innovative
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    Creative & Innovative Digital Solution
                  </h1>
                  <Link
                    to="/services"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Services
                  </Link>

                  <Link
                    to="/contact-us"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="modal fade" id="searchModal">
        <div className="modal-dialog modal-fullscreen">
          <div
            className="modal-content"
            style={{ background: "rgba(9, 30, 62, .7)" }}
          >
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn bg-white btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body d-flex align-items-center justify-content-center">
              <form action="">
                <div className="input-group" style={{ width: "600px" }}>
                  <input
                    type="text"
                    name="search_keyword"
                    placeholder="Type search keyword"
                    required={true}
                    className="form-control bg-transparent border-primary p-3"
                  />
                  <button className="btn btn-primary px-4">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
