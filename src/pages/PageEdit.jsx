import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PageEdit = () => {
    const [namaBarang, setnamaBarang] = useState("");
    const [tipeKerusakan, settipeKerusakan] = useState("");
    const [harga, setharga] = useState("");
    const [hpCustomer, sethpCustomer] = useState("");
    const [namaCustomer, setnamaCustomer] = useState("");
    const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBarangById();
  }, []);

  const getBarangById = async () => {
    const response = await axios.get(`http://localhost:3000/api/barang/${id}`);
    setnamaBarang(response.data.namaBarang);
    settipeKerusakan(response.data.tipeKerusakan);
    setharga(response.data.harga);
    sethpCustomer(response.data.namaCustomer);
    setnamaBarang(response.data.hpCustomer);
  };

  const updateBarang = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-access-token': token
        }
      };
      await axios.put("http://localhost:3000/api/list/edit/${id}", {
        namaBarang,
        tipeKerusakan,
        namaCustomer,
        hpCustomer,
        harga
        
      }, config);
      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateBarang}>
          <div className="field">
            <label className="label">Nama barang</label>
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
            <label className="label">tipe kerusakan</label>
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
                placeholder="Email"
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