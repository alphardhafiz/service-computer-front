import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from "../assets/logo.png";
import { Link, redirect, useNavigate } from "react-router-dom";
import CheckAdmin from "../utils/CheckAdmin";

function Header() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(CheckAdmin(localStorage.getItem("token")));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <Navbar className="bg-body-primary" bg="info" data-bs-theme="info">
        <Container>
          <Navbar.Brand className="d-flex justify-content-start align-items-center gap-4">
            <Link to="/">
              <img src={Logo} alt="logo" height={80} />
            </Link>
            <Link
              to="/contact"
              className="text-white text-decoration-none fw-bold"
            >
              Contact
            </Link>
      {isAdmin && (
                <Link to="/list" className="text-white text-decoration-none fw-bold">
                  List Barang
                </Link>
            )}
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="d-flex justify-content-end">
            
            {isAdmin ? (
              <Button onClick={logout} variant="btn btn-danger">
                Logout
              </Button>
            ) : (
              <Link to="/signin">
                <Button
                  variant="btn btn-warning"
                >
                  Sign in
                </Button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
