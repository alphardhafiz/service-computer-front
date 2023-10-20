import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PageEdit = () => {
  const [namaBarang, setNamaBarang] = useState("");
  const [tipeKerusakan, setTipeKerusakan] = useState("");
  const [harga, setHarga] = useState("");
  const [hpCustomer, setHpCustomer] = useState("");
  const [namaCustomer, setNamaCustomer] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            "x-access-token": token,
          },
        };
        const response = await axios.get(`http://localhost:3000/api/barang/${id}`, config);
        const data = response.data;
        setNamaBarang(data.namaBarang);
        setTipeKerusakan(data.tipeKerusakan);
        setHarga(data.harga);
        setHpCustomer(data.hpCustomer);
        setNamaCustomer(data.namaCustomer);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const updateBarang = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "x-access-token": token,
        },
      };
      await axios.put(
        `http://localhost:3000/api/barang/${id}`,
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
                onChange={(e) => setTipeKerusakan(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Harga</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nama Customer</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={namaCustomer}
                onChange={(e) => setNamaCustomer(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">HP Customer</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={hpCustomer}
                onChange={(e) => setHpCustomer(e.target.value)}
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