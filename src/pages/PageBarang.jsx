import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-access-token': token
        }
      };
      await axios.post("http://localhost:3000/api/barang", {
        namaBarang,
        tipeKerusakan,
        harga,
        hpCustomer,
        namaCustomer
      }, config);
      navigate("/list");
    } catch (error) {
      console.log(error);
  }
};

  return (
    <div className="columns mt-5">
      <div className="column">
        <form onSubmit={saveBarang}>
          <div className="field">
            <label className="label">Nama Barang</label>
            <div className="control">
              <input
                type="text"
                className="input"
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
                value={tipeKerusakan}
                onChange={(e) => settipeKerusakan(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">harga</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={harga}
                onChange={(e) => setharga(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">nama customer</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={namaCustomer}
                onChange={(e) => setnamaCustomer(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">hp customer</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={hpCustomer}
                onChange={(e) => sethpCustomer(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Buat Data
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageBarang;
