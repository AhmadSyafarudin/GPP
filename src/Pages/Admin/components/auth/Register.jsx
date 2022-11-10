import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import "./auth.css";

const Register = () => {
  const navigate = useNavigate();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confPassword = useRef();
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const signUp = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/kosthunt/user/register', {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
            confPassword: confPassword.current.value
        });
        setLoading(true);
        navigate("/login");
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
    setLoading(false);
  }

  return (
    <>
      <Card className="form_auth">
        <Card.Body>
          {msg && <Alert variant="danger">{msg}</Alert>}
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={signUp}>
            <Form.Group id="username">
              <Form.Label className="mt-2">Nama</Form.Label>
              <Form.Control type="text" ref={username} required  />
            </Form.Group>

            <Form.Group id="email">
              <Form.Label className="mt-2">Email</Form.Label>
              <Form.Control type="email" ref={email} required  />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label className="mt-2">Password</Form.Label>
              <Form.Control type="password" ref={password} required  />
            </Form.Group>

            <Form.Group id="password-confirm">
              <Form.Label className="mt-2">Password Confirmation</Form.Label>
              <Form.Control type="password" ref={confPassword} required  />
            </Form.Group>
            <Button  disabled={loading} className="w-100 mt-4" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Already have an account? <Link to="/login">Login</Link></div>
    </>
  );
};

export default Register;
