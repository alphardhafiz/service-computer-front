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
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} alt="logo" height={80} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            {isAdmin && (
              <Nav.Link>
                <Link to="/list" className="text-decoration-none">
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
                <Button variant="warning position-relative" style={{right:'300 rem'}}>
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
