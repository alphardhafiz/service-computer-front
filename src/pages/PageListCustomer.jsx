import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, redirect, useParams } from "react-router-dom";

const PageListCustomer = () => {
  const [barang, setBarang] = useState([]);
  const { noHp } = useParams();

  const getBarang = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/barang/${noHp}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
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

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        {/* <Link
          to="/list/add"
          className="btn btn-success position-relative "
          style={{ left: "10px" }}
        >
          Tambah Data
        </Link> */}
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Tipe Kerusakan</th>
              <th>nama customer</th>
              <th>no hp</th>
              <th>harga</th>
              <th>status</th>
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
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageListCustomer;