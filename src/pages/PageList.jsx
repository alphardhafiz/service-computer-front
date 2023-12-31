import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import Swal from 'sweetalert2';

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
      setBarang(content);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBarang();
  }, []);

  const handleChangeStatus = async (target, id) => {
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
  
  // const deleteBarang = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:3000/api/barang/${id}`, {
  //       headers: {
  //         "x-access-token": localStorage.getItem("token"),
  //       },
  //     });
  //     getBarang(); // Refresh the data after a successful delete.
  //   } catch (error) {
  //     console.log("Error deleting item:", error);
  //   }
  // };







  // const deleteBarang = async (id) => {
  //   const confirmation = window.confirm("Apakah Anda yakin ingin menghapus barang ini?");
  //   if (confirmation) {
  //     try {
  //       await axios.delete(`http://localhost:3000/api/barang/${id}`, {
  //         headers: {
  //           "x-access-token": localStorage.getItem("token"),
  //         },
  //       });
  //       getBarang(); // Refresh the data after a successful delete.
  //     } catch (error) {
  //       console.log("Error deleting item:", error);
  //     }
  //   }
  // };





  const deleteBarang = async (id) => {
    const result = await Swal.fire({
      title: 'Apakah Anda yakin ingin menghapus barang ini?',
      showCancelButton: true,
      confirmButtonText: 'Ya, Hapus',
      cancelButtonText: 'Batal',
      icon: 'warning',
    });
  
    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/api/barang/${id}`, {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        });
        await getBarang(); 
        Swal.fire('Berhasil', 'Barang telah dihapus', 'success');
      } catch (error) {
        console.log("Error deleting item:", error);
        Swal.fire('Gagal', 'Terjadi kesalahan saat menghapus barang', 'error');
      }
    }
  };
  


  return (
    <div className="columns mt-5">
      <div className="column">
        <Link
          to="/list/add"
          className="btn btn-success position-relative" 
          style={{ left: "1rem", bottom:"1rem" }}
        >
          Tambah Data
        </Link>
        <table className="table mt-2 table-striped table-hover">
          <thead>
            <tr className="table-success">
              <th>No</th>
              <th>Nama Barang</th>
              <th>Tipe Kerusakan</th>
              <th>nama customer</th>
              <th>no hp</th>
              <th>harga</th>
              <th>status</th>
              <th>action</th>
              <th>Ganti Status</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {barang.length < 1 && (
              <tr>
                <td align="center" colSpan={10}>
                  Barang Service Tidak Ada
                </td>
              </tr>
            )}
            {barang.map((BarangModel, index) => (
              <tr key={BarangModel._id} className="table-dark">
                <td>{index + 1}</td>
                <td>{BarangModel.namaBarang}</td>
                <td>{BarangModel.tipeKerusakan}</td>
                <td>{BarangModel.namaCustomer}</td>
                <td>{BarangModel.hpCustomer}</td>
                <td>{BarangModel.harga}</td>
                <td>{BarangModel.status}</td>
                <td className="d-flex gap-2">
                  <Link
                    to={`edit/${BarangModel._id}`}
                    className="btn btn-warning">
                    Edit
                  </Link>
                  <button onClick={() => deleteBarang(BarangModel._id)} className="btn btn-danger">Delete</button>
                </td>
                <td>
                {BarangModel.status &&
  (() => {
    switch (BarangModel.status) {
      case "belum dikerjakan":
        return (
          <Button
            variant="primary"
            onClick={() => {
              Swal.fire({
                title: 'Konfirmasi',
                text: 'Anda yakin ingin menandai sebagai Sedang Dikerjakan?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Ya',
                cancelButtonText: 'Batal',
              }).then((result) => {
                if (result.isConfirmed) {
                  handleChangeStatus("dikerjakan", BarangModel._id);
                }
              });
            }}
          >
            Dikerjakan
          </Button>
        );
      case "sedang dikerjakan":
        return (
          <Button
            variant="warning"
            onClick={() => {
              Swal.fire({
                title: 'Konfirmasi',
                text: 'Anda yakin ingin menandai sebagai Sudah Selesai?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Ya',
                cancelButtonText: 'Batal',
              }).then((result) => {
                if (result.isConfirmed) {
                  handleChangeStatus("selesai", BarangModel._id);
                }
              });
            }}
          >
            Selesai
          </Button>
        );
      case "selesai dikerjakan":
        return (
          <div className="d-flex gap-2">
            <Button
              variant="success"
              onClick={() => {
                Swal.fire({
                  title: 'Konfirmasi',
                  text: 'Anda yakin ingin menandai sebagai Antar?',
                  icon: 'question',
                  showCancelButton: true,
                  confirmButtonText: 'Ya',
                  cancelButtonText: 'Batal',
                }).then((result) => {
                  if (result.isConfirmed) {
                    handleChangeStatus("antar", BarangModel._id);
                  }
                });
              }}
            >
              Antar
            </Button>
            <Button
              variant="success"
              onClick={() => {
                Swal.fire({
                  title: 'Konfirmasi',
                  text: 'Anda yakin ingin menandai sebagai Ambil?',
                  icon: 'question',
                  showCancelButton: true,
                  confirmButtonText: 'Ya',
                  cancelButtonText: 'Batal',
                }).then((result) => {
                  if (result.isConfirmed) {
                    handleChangeStatus("ambil", BarangModel._id);
                  }
                });
              }}
            >
              Ambil
            </Button>
          </div>
        );
      default:
        return (
          <Button
            variant="danger"
            onClick={() => {
              deleteBarang(BarangModel._id);
            }}
          >
            Hapus Barang
          </Button>
        );
    }
  })()}
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
