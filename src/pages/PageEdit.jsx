import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PageEdit = () => {
  const [namaBarang, setnamaBarang] = useState("");
  const [tipeKerusakan, settipeKerusakan] = useState("");
  const [harga, setharga] = useState("");
  const [namaCustomer, setnamaCustomer] = useState("");
  const [hpCustomer, sethpCustomer] = useState("");
    
  useEffect(() => {
    getBarangById();
  }, []);

  const getBarangById = async () => {
    const response = await axios.get(`http://localhost:3000/api/barang/${id}`);
    setnamaBarang(response.data.namaBarang);
    settipeKerusakan(response.data.tipeKerusakan);
    setharga(response.data.harga);
    setnamaCustomer(response.data.namaCustomer);
    sethpCustomer(response.data.hpCustomer);
  };

  const updateBarang = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/api/barang/${id}`, {
        namaBarang,
        tipeKerusakan,
        harga,
        namaCustomer,
        hpCustomer,
      });
      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column">
        <form onSubmit={updateBarang}>
          <div className="field">
            <label className="label">Nama Barang</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="namaBarang"
                value={namaBarang}
                onChange={(e) => setnamaBarang(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tipe Kerusakan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="tipeKerusakan"
                value={tipeKerusakan}
                onChange={(e) => settipeKerusakan(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Harga</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="harga"
                value={harga}
                onChange={(e) => setharga(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nama Customer</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="namaCustomer"
                value={namaCustomer}
                onChange={(e) => setnamaCustomer(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">HP Customer</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="hpCustomer"
                value={hpCustomer}
                onChange={(e) => sethpCustomer(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update Data
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageEdit;