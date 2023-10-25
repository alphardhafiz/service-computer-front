import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, redirect, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import CheckAdmin from "../utils/CheckAdmin";

const PageListCustomer = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(CheckAdmin(localStorage.getItem("token")));
  }, []);
  const [barang, setBarang] = useState([]);
  const { noHp } = useParams();

  const getBarang = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/barang/customerList/${noHp}`, {
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

  const handleChangeStatus = async (target, id) => {
    console.log(id);
    const token = localStorage.getItem("token");
    try {
      await fetch(`http://localhost:3000/api/barang/${id}/${target}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      });
      getBarang();
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    getBarang();
  }, []);

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Tipe Kerusakan</th>
              <th>Nama Customer</th>
              <th>No Hp</th>
              <th>Harga</th>
              <th>Status</th>
              {isAdmin && <th>Ganti Status</th>}
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
                {isAdmin && (
                  <td>
                    {BarangModel.status &&
                      (() => {
                        switch (BarangModel.status) {
                          case "belum dikerjakan":
                            return (
                              <Button
                                variant="primary"
                                onClick={(e) =>
                                  handleChangeStatus(
                                    e.target.innerText.toLowerCase(),
                                    BarangModel._id
                                  )
                                }
                              >
                                Dikerjakan
                              </Button>
                            );
                          case "sedang dikerjakan":
                            return (
                              <Button
                                variant="warning"
                                onClick={(e) =>
                                  handleChangeStatus(
                                    e.target.innerText.toLowerCase(),
                                    BarangModel._id
                                  )
                                }
                              >
                                Selesai
                              </Button>
                            );
                          case "selesai dikerjakan":
                            return (
                              <div className="d-flex gap-2">
                                <Button
                                  variant="success"
                                  onClick={(e) =>
                                    handleChangeStatus(
                                      e.target.innerText.toLowerCase(),
                                      BarangModel._id
                                    )
                                  }
                                >
                                  Antar
                                </Button>
                                <Button
                                  variant="success"
                                  onClick={(e) =>
                                    handleChangeStatus(
                                      e.target.innerText.toLowerCase(),
                                      BarangModel._id
                                    )
                                  }
                                >
                                  Ambil
                                </Button>
                              </div>
                            );
                          default:
                            return (
                              <Button
                                variant="danger"
                                onClick={() => deleteBarang(BarangModel._id)}
                              >
                                Hapus Barang
                              </Button>
                            );
                        }
                      })()}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageListCustomer;
