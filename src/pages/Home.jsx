import React from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";



const Home = () => {
  return (
    <>
    <div class="masthead">
    <div class="row justify-content-center">
    <div class="col-xl-6">
    <div class="text-center text-white">
      
    <br />
        <h1 class="mb-5" style={{ textAlign: "center" }}>
          Selamat Datang Di Service Juara Koding
        </h1>
<br />

    <Container>
  <div className="mb-3">
  <div className="d-flex">
  <input class="form-control form-control-lg" type="text" className="form-control" id="exampleFormControlInput1" placeholder="masukkan nomor telepon disini"/>
    <button type="button" className="btn btn-primary position-relative px-4 py-3" style={{right:'70px'}} to="/list">
      Cari
    </button>


  </div>
</div>

<h1 class="mb-5" style={{textAlign:'center'}}>tolong masukkan no telepon untuk cek laptop anda</h1>
    </Container> 
    </div>
    </div> 
    </div>    
    </div>
    <section class="features-icons bg-light text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <img class="img-fluid rounded-circle mb-3" src="src/assets/logo.png" alt="..." />
                            <h3>Fully Responsive</h3>
                            <p class="lead mb-0">This theme will look great on any device, no matter the size!</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                        <img class="img-fluid rounded-circle mb-3" src="src/assets/logo.png" alt="..." />
                            <h3>Bootstrap 5 Ready</h3>
                            <p class="lead mb-0">Featuring the latest build of the new Bootstrap 5 framework!</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                        <img class="img-fluid rounded-circle mb-3" src="src/assets/logo.png" alt="..." />
                            <h3>Easy to Use</h3>
                            <p class="lead mb-0">Ready to use with your own content, or customize the source files!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        

        

    <section class="testimonials text-center bg-light">
            <div class="container">
                <h2 class="mb-5">Testimonial...</h2>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img class="img-fluid rounded-circle mb-3" src="src/assets/testimonials-1.jpg" alt="..." />
                            <h5>Margaret E.</h5>
                            <p class="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img class="img-fluid rounded-circle mb-3" src="src/assets/testimonials-2.jpg" alt="..." />
                            <h5>Fred S.</h5>
                            <p class="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img class="img-fluid rounded-circle mb-3" src="src/assets/testimonials-3.jpg" alt="..." />
                            <h5>Sarah W.</h5>
                            <p class="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Home;
