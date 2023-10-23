import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PageEdit = () => {
  const { id } = useParams();
  const [initialData, setInitialData] = useState({
    namaBarang: "",
    tipeKerusakan: "",
    harga: "",
    hpCustomer: "",
    namaCustomer: "",
  });

  const [formData, setFormData] = useState({ ...initialData });

  const navigate = useNavigate();

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
        setInitialData(data);
        setFormData(data);
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
      await axios.put(`http://localhost:3000/api/barang/${id}`, formData, config);
      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
                value={formData.namaBarang}
                onChange={handleInputChange}
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
                value={formData.tipeKerusakan}
                onChange={handleInputChange}
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
                value={formData.harga}
                onChange={handleInputChange}
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
                value={formData.namaCustomer}
                onChange={handleInputChange}
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
                value={formData.hpCustomer}
                onChange={handleInputChange}
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