import  { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Signin.css";
import {Link} from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return email.length > 0 && password.length > 6 && regex.test(email);
  }


  const btnClicked=()=>{
    axios.post("http://localhost:3002/Signin")
  }
  return (
    <div className="Login container">
      <Form >
        <Form.Group  className="mt-5" size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-5" size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="mt-5" block="true" size="lg" type="submit" disabled={!validateForm()} onClick={()=>btnClicked()}>
          Login
        </Button>
        <Link to="/" className="m-5 d-block">Home</Link>
      </Form>
    </div>
  );
}