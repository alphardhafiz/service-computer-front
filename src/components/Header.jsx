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
          <Navbar.Brand className="d-flex justify-content-start align-items-center gap-5">
            <Link to="/">
              <img src={Logo} alt="logo" height={80} />
            </Link>
            <Link
              to="/contact"
              className="btn text-decoration-none btn-outline-primary text-light"
            >
              Contact
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse>
            {isAdmin && (
                <Link to="/list" className="btn btn-outline-primary text-light
                text-decoration-none justify-content-mid">
                  List Barang
                </Link>
            )}
            {isAdmin ? (
              <Button onClick={logout} variant="outline-danger" className="d-flex justify-content-end">
                Logout
              </Button>
            ) : (
              <Link to="/signin">
                <Button
                  variant="warning" className="d-flex justify-content-end"
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
