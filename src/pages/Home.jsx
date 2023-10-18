import React from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <br />
        <h1 style={{ textAlign: "center" }}>
          Selamat Datang Di Service Juara Koding
        </h1>
<br />

    <Container>
  <div className="mb-3">
  <div className="d-flex">
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="masukkan nomor telepon disini"/>
  <Link type="button" className="btn btn-primary position-relative px-4 py-3" style={{right:'74px'}} to="/list">
    klik
  </Link>


  </div>
</div>

<h1 style={{textAlign:'center'}}>tolong masukkan no telepon untuk cek laptop anda</h1>
    </Container>     
    </>
  );
};

export default Home;
