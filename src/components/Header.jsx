import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from "../assets/logo.png";
import { Link, redirect } from "react-router-dom";
import CheckAdmin from "../utils/CheckAdmin";

function Header() {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(CheckAdmin(localStorage.getItem("token")));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/");
  };

  return (
    <>
      <Navbar className="bg-body-tertiary" bg="info" data-bs-theme="info">
        <Container>
          <Navbar.Brand className="d-flex justify-content-center align-items-center gap-5">
            <Link to="/">
              <img src={Logo} alt="logo" height={80} />
            </Link>
            <Link
              to="/contact"
              className="btn text-decoration-none btn-outline-light fw-bolder text-primary"
            >
              Contact
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            {isAdmin && (
              <Nav.Link style={{right:"10rem"}}>
                <Link to="/list" className="btn btn-outline-danger 
                text-decoration-none position-relative" style={{right:'2rem'}}>
                  List Barang
                </Link>
              </Nav.Link>
            )}
            {isAdmin ? (
              <Button onClick={logout} variant="outline-danger">
                Logout
              </Button>
            ) : (
              <Link to="/signin">
                <Button
                  variant="warning position-relative"
                  style={{ right: "100 rem" }}
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
