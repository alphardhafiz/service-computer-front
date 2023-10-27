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
              <h1 className="mb-5" style={{ textAlign: 'center' }}>
                Selamat Datang Di Service Juara Koding
              </h1>

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
          <h1 className="mb-5">Layanan Dari Kami</h1>
            <div className="col-lg-4">
              
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <img
                  className="img-fluid "
                  src="src/assets/132.jpg"
                  alt="..."
                />
                <h3>Teknisi Yang Berpengalaman</h3>
                <p className="lead mb-0">
                  teknisi kami berpengalaman dalam memperbaiki barang anda
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <img
                  className="img-fluid "
                  src="src/assets/1111.jpg"
                  alt="..."
                />
                <h3>Bisa Cek Progress Teknisi</h3>
                <p className="lead mb-0">
                  customer bisa cek progress teknisi kami melalui hp
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid "
                  src="src/assets/test3.jpg"
                  alt="..."
                />
                <h3>Dapat Diantar Atau Ambil Sendiri</h3>
                <p className="lead mb-0">
                  setelah selesai, customer bisa mengambil barangnya sendiri atau diantar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">Testimonial From Customer</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src="src/assets/testi1.jpg"
                  alt="..."
                />
                <h5>Raffi Ahmad</h5>
                <p className="font-weight-light mb-0">
                  Aplikasinya Mantul nih, kapan kapan kalau rusak lagi komputer keluarga
                  saya langsung dibenerin aja disini
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src="src/assets/test132.jpg"
                  alt="..."
                />
                <h5>Deddy Cobuzer</h5>
                <p className="font-weight-light mb-0">
                  Kalau dari aku yes sih, soalnya aplikasi ini ada potensinya
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src="src/assets/testi3.jpg"
                  alt="..."
                />
                <h5>Maudy Ayunda</h5>
                <p className="font-weight-light mb-0">
                  for me this app need some improvement, but its already run smoothly
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
