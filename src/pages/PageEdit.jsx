import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PageEdit = () => {
  const [namaBarang, setNamaBarang] = useState("");
  const [tipeKerusakan, setTipeKerusakan] = useState("");
  const [harga, setHarga] = useState("");
  const [namaCustomer, setNamaCustomer] = useState("");
  const [hpCustomer, setHpCustomer] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
    
  useEffect(() => {
    getBarangById();
  }, []);

  const getBarangById = async (id) => {
    const response = await axios.get(`http://localhost:3000/api/barang/${id}`);
    setNamaBarang(response.data[0].namaBarang);
    setTipeKerusakan(response.data.tipeKerusakan);
    setHarga(response.data.harga);
    setNamaCustomer(response.data.namaCustomer);
    setHpCustomer(response.data.hpCustomer);
    console.log(response.data[0]);
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
                value={namaBarang}
                onChange={(e) => setNamaBarang(e.target.value)}
                placeholder="namaBarang"
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
                onChange={(e) => setTipeKerusakan(e.target.value)}
                placeholder="tipeKerusakan"
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
                onChange={(e) => setHarga(e.target.value)}
                placeholder="harga"
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
                onChange={(e) => setNamaCustomer(e.target.value)}
                placeholder="namaCustomer"
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
                onChange={(e) => setHpCustomer(e.target.value)}
                placeholder="hpCustomer"
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