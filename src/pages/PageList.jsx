import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, redirect } from "react-router-dom";

const PageList = () => {
  const [barang, setBarang] = useState([]);

  const getBarang = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return redirect("/");
    }
    try {
      const response = await fetch(`http://localhost:3000/api/barang`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const content = await response.json();
      console.log(content);
      setBarang(content);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBarang();
  }, []);

  const deleteBarang = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/barang/${id}`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      getBarang(); // Refresh the data after a successful delete.
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  };


  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link
          to="/list/add"
          className="btn btn-success position-relative "
          style={{ left: "1rem", bottom:"1rem" }}
        >
          Tambah Data
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead style={{backgroundColor:'green', color:'white'}}>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Tipe Kerusakan</th>
              <th>nama customer</th>
              <th>no hp</th>
              <th>harga</th>
              <th>status</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {barang.length < 1 && (
              <tr>
                <td align="center" colSpan={8}>
                  Barang Service Tidak Ada
                </td>
              </tr>
            )}
            {barang.map((BarangModel, index) => (
              <tr key={BarangModel._id}>
                <td>{index + 1}</td>
                <td>{BarangModel.namaBarang}</td>
                <td>{BarangModel.tipeKerusakan}</td>
                <td>{BarangModel.namaCustomer}</td>
                <td>{BarangModel.hpCustomer}</td>
                <td>{BarangModel.harga}</td>
                <td>{BarangModel.status}</td>
                <td>
                  <Link
                    to={`edit/${BarangModel._id}`}
                    className="btn is-info is-small">
                    Edit
                  </Link>
                  <button onClick={() => deleteBarang(BarangModel._id)} className="button is-danger is-small">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageList;
