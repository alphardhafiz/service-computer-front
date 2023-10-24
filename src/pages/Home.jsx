import React, { useState } from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const [noHp, setNoHp] = useState('')
  return (
    <>
      <div className="masthead justify-content-center">
        <div className="justify-content-center">
          <div className="col-xl-12">
            <div className="text-center text-white">
              <br />
              <h1 className="mb-5" style={{ textAlign: 'center' }}>
                Selamat Datang Di Service Juara Koding
              </h1>
              <br />

              <Container>
                <div className="mb-3">
                  <div className="d-flex">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      onChange={(e) => setNoHp(e.target.value)}
                      id="exampleFormControlInput1"
                      placeholder="masukkan nomor telepon disini"
                    />
                    {/* <button
                      type="button"
                      className="btn btn-primary position-relative px-4 py-3"
                      style={{ right: "74px" }}
                      to="/list"
                    >
                      Cari
                    </button> */}
                    <Link to={`/barangCustomer/${noHp}`} className="btn btn-primary 
                    position-relative px-4 py-3" style={{ right: '4.8rem' }}>Cari</Link>
                  </div>
                </div>

                <h1 className="mb-5" style={{ textAlign: "center" }}>
                  tolong masukkan no telepon untuk cek laptop anda
                </h1>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <img
                  className="img-fluid "
                  src="src/assets/logo.png"
                  alt="..."
                />
                <h3>Fully Responsive</h3>
                <p className="lead mb-0">
                  This theme will look great on any device, no matter the size!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <img
                  className="img-fluid "
                  src="src/assets/logo.png"
                  alt="..."
                />
                <h3>Bootstrap 5 Ready</h3>
                <p className="lead mb-0">
                  Featuring the latest build of the new Bootstrap 5 framework!
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <img
                  className="img-fluid "
                  src="src/assets/logo.png"
                  alt="..."
                />
                <h3>Easy to Use</h3>
                <p className="lead mb-0">
                  Ready to use with your own content, or customize the source
                  files!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">Testimonial...</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src="src/assets/testimonials-1.jpg"
                  alt="..."
                />
                <h5>Margaret E.</h5>
                <p className="font-weight-light mb-0">
                  "This is fantastic! Thanks so much guys!"
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src="src/assets/testimonials-2.jpg"
                  alt="..."
                />
                <h5>Fred S.</h5>
                <p className="font-weight-light mb-0">
                  "Bootstrap is amazing. I've been using it to create lots of
                  super nice landing pages."
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src="src/assets/testimonials-3.jpg"
                  alt="..."
                />
                <h5>Sarah W.</h5>
                <p className="font-weight-light mb-0">
                  "Thanks so much for making these free resources available to
                  us!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
