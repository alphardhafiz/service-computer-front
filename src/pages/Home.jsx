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
    <button type="button" className="btn btn-primary position-relative px-4 py-3" style={{right:'74px'}} to="/list">
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
    </>
  );
};

export default Home;
