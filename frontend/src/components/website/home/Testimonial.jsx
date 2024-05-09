import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import testimonialImg1 from "../../../assets/img/testimonial-1.jpg";
import testimonialImg2 from "../../../assets/img/testimonial-2.jpg";
import testimonialImg3 from "../../../assets/img/testimonial-3.jpg";
import testimonialImg4 from "../../../assets/img/testimonial-4.jpg";
import "./swiper.css";

const Testimonial = () => {
  return (
    <>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-4 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
            <h1 className="mb-0">
              What Our Clients Say About Our Digital Services
            </h1>
          </div>
          <div
            className="testimonial-carousel wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              // centeredSlides={true}
              slidesPerView={"3"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="testimonial-item bg-light my-4">
                  <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                    <img
                      className="img-fluid rounded"
                      src={testimonialImg1}
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div className="ps-4">
                      <h4 className="text-primary mb-1">Client Name</h4>
                      <small className="text-uppercase">Profession</small>
                    </div>
                  </div>
                  <div className="pt-4 pb-5 px-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item bg-light my-4">
                  <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                    <img
                      className="img-fluid rounded"
                      src={testimonialImg2}
                      style={{ width: "60px", height: "80px" }}
                    />
                    <div className="ps-4">
                      <h4 className="text-primary mb-1">Client Name</h4>
                      <small className="text-uppercase">Profession</small>
                    </div>
                  </div>
                  <div className="pt-4 pb-5 px-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item bg-light my-4">
                  <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                    <img
                      className="img-fluid rounded"
                      src={testimonialImg3}
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div className="ps-4">
                      <h4 className="text-primary mb-1">Client Name</h4>
                      <small className="text-uppercase">Profession</small>
                    </div>
                  </div>
                  <div className="pt-4 pb-5 px-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-item bg-light my-4">
                  <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                    <img
                      className="img-fluid rounded"
                      src={testimonialImg4}
                      style={{ width: "60px", height: "60px" }}
                    />
                    <div className="ps-4">
                      <h4 className="text-primary mb-1">Client Name</h4>
                      <small className="text-uppercase">Profession</small>
                    </div>
                  </div>
                  <div className="pt-4 pb-5 px-5">
                    Dolor et eos labore, stet justo sed est sed. Diam sed sed
                    dolor stet amet eirmod eos labore diam
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <img
                  className="img-fluid rounded"
                  src={testimonialImg1}
                  style={{ width: "60px", height: "60px" }}
                />
                <div className="ps-4">
                  <h4 className="text-primary mb-1">Client Name</h4>
                  <small className="text-uppercase">Profession</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimonial;
