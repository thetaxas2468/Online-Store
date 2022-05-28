import  { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import {Link, useLocation,useParams} from "react-router-dom";
import $ from "jquery";

export default function Login(props) {
    // console.log(location)
    // const{from}=location.state;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
      /* eslint-disable no-useless-escape */
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return email.length > 0 && password.length > 6 && regex.test(email);
  }


  const btnClicked=()=>{
    // e.preventDefault();
      const request={email:email,password:password}
    $.post("http://localhost:3002/users/signup",request).then((respose)=>{
        if(respose===false){
            alert("Email is used!")
        }
        else{
            window.location.href="/Loggedin"
        }
    }).catch((error)=>{
        alert("Try again something went wrong!")
    })
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
        <Button className="mt-5" block="true" size="lg" type="button" disabled={!validateForm()} onClick={()=>btnClicked()}>
          Sign Up
        </Button>
        <Link to="/" className="m-5 d-block">Home</Link>
      </Form>
    </div>
  );
}