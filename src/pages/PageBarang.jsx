import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import classes from "./background.module.css";

const PageBarang = () => {
  const [namaBarang, setnamaBarang] = useState("");
  const [tipeKerusakan, settipeKerusakan] = useState("");
  const [harga, setharga] = useState("");
  const [hpCustomer, sethpCustomer] = useState("");
  const [namaCustomer, setnamaCustomer] = useState("");
  const navigate = useNavigate();

  const saveBarang = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "x-access-token": token,
        },
      };
      await axios.post(
        "http://localhost:3000/api/barang",
        {
          namaBarang,
          tipeKerusakan,
          harga,
          hpCustomer,
          namaCustomer,
        },
        config
      );
      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
    className={`${classes.backhead} vh-100 d-flex justify-content-center align-items-center`}
  >
    <div className="columns container w-25" style={{color:'white', fontWeight:'bold'}}>
      <form onSubmit={saveBarang}>
        <Form.Group className="mb-3">
          <Form.Label className="mt-5">Nama Barang</Form.Label>
          <Form.Control
            type="text"
            value={namaBarang}
            onChange={(e) => setnamaBarang(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tipe Kerusakan</Form.Label>
          <Form.Control
            type="text"
            value={tipeKerusakan}
            onChange={(e) => settipeKerusakan(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Harga</Form.Label>
          <Form.Control
            type="text"
            value={harga}
            onChange={(e) => setharga(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nama Customer</Form.Label>
          <Form.Control
            type="text"
            value={namaCustomer}
            onChange={(e) => setnamaCustomer(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Hp Customer</Form.Label>
          <Form.Control
            type="text"
            value={hpCustomer}
            onChange={(e) => sethpCustomer(e.target.value)}
          />
        </Form.Group>
        <Button className="btn btn-success mb-5" type="submit">
          Tambah Data
        </Button>
        <Link to="/list">
                <Button
                  variant="btn btn-warning mb-5 "
                  style={{marginLeft:'20px'}}
                >
                  Kembali
                </Button>
              </Link>
      </form>
    </div>
    </div>
  );
};

export default PageBarang;
