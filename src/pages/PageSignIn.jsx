import { Outlet } from "react-router-dom";
import configApi from "../../config.api";
import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import AdminModel from "../../models/AdminModel";
import { useNavigate } from "react-router-dom";
import classes from "./background.module.css";

const PageSignIn = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState(AdminModel);
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((values) => ({ ...values, [name]: value }));
  };

  const signin = async () => {
    try {
      const response = await fetch(`${configApi.BASE_URL}/user/signin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const content = await response.json();
      localStorage.setItem("token", content.token);
      console.log(content);
      console.log(content.token);
      return navigate("/list");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className={classes.backhead}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Admin Service</Card.Title>
                <Form.Group className="mt-3 mb-3">
                  <Form.Label>Masukkan Email</Form.Label>
                  <Form.Control
                    value={user.email}
                    onChange={handleInput}
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Masukkan Password</Form.Label>
                  <Form.Control
                    value={user.password}
                    onChange={handleInput}
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                  />
                </Form.Group>
                <Form.Check
                  type="checkbox"
                  label="Lihat Password"
                  id={`lihat-password`}
                  onChange={toggleShowPassword}
                />
                <Form.Group className="d-grid gap-2">
                  <Button onClick={signin} variant="primary">
                    Sign In
                  </Button>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PageSignIn;
