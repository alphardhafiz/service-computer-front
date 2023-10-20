import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import CheckAdmin from "../utils/CheckAdmin";

function Header() {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    setIsAdmin(CheckAdmin(localStorage.getItem("token")));
  }, []);

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} alt="logo" height={100} />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            {isAdmin && (
              <Nav.Link>
                <Link to="/list" className="text-decoration-none">
                  List Barang
                </Link>
              </Nav.Link>
            )}
            {isAdmin ? (
              <Button
                onClick={() => localStorage.removeItem("token")}
                variant="outline-danger"
              >
                Logout
              </Button>
            ) : (
              <Link to="/signin">
                <Button variant="outline-success" style={{ left: "850px" }}>
                  Signin
                </Button>
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
