import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";


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
    getBarangById();
  }, []);

  const getBarangById = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "x-access-token": token,
        },
      };
      const response = await axios.get(
        `http://localhost:3000/api/barang/${id}`,
        config
      );
      const data = response.data;

      // Set the initial data and form data
      setInitialData(data);
      setFormData(data);
    } catch (error) {
      console.log(error);
    }
  };

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
        formData,
        config
      );
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
    <div style={{
      backgroundColor: `white` }} className="">
      <div className="container w-25">
        <form onSubmit={updateBarang}>
          <Form.Group className="mb-3">
            <Form.Label className="mt-5">Nama Barang</Form.Label>
            <Form.Control
              type="text"
              name="namaBarang"
              value={formData.namaBarang}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tipe Kerusakan</Form.Label>
            <Form.Control
              type="text"
              name="tipeKerusakan"
              value={formData.tipeKerusakan}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Harga</Form.Label>
            <Form.Control
              type="text"
              name="harga"
              value={formData.harga}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nama Customer</Form.Label>
            <Form.Control
              type="text"
              name="namaCustomer"
              value={formData.namaCustomer}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hp Barang</Form.Label>
            <Form.Control
              type="text"
              name="hpCustomer"
              value={formData.hpCustomer}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button className="btn btn-success mb-5" type="submit">
            Update Data
          </Button>
        </form>
      </div>
      </div>
  );
};

export default PageEdit;
