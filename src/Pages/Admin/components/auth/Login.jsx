import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';

import "./auth.css";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [msg, setMsg] = useState('');

  const Auth = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/kosthunt/user/login', {
            email: email.current.value,
            password: password.current.value
        }, {withCredentials: true, credentials: 'include'});
        navigate("/admin");
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  }

  return (
    <>
      <Card className="form_auth">
        <Card.Body>
          {msg && <Alert variant="danger">{msg}</Alert>}
          <h2 className="text-center mb-4">Login Admin</h2>
          <Form onSubmit={Auth}>
            <Form.Group id="email">
              <Form.Label className="mt-2">Email</Form.Label>
              <Form.Control type="email" ref={email} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label className="mt-2">Password</Form.Label>
              <Form.Control type="password" ref={password} required />
            </Form.Group>

            <Button  className="w-100 mt-4" type="submit">
              Log in
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Do not have Account? <Link to="/register">Register</Link></div>
    </>
  );
};

export default Login;
