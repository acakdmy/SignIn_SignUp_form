import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_Img from "./Sign_Img";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {

  const history = useNavigate()
  const [inputval, setInputval] = useState({
    email: "",
    password: "",
  });
  

  const [data, setData] = useState([]);

  const getData = (e) => {
    const { value, name } = e.target;
   
    setInputval(() => {
      return {
        ...inputval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    

    const getuserArr = localStorage.getItem("userData");
    console.log(getuserArr);

    const { email, password } = inputval;

    if (email === "") {
      alert("Please enter your email address");
    } else if (!email.includes("@")) {
      alert("Please enter your correct email address");
    } else if (password === "") {
      alert("Password is required");
    } else if (password.length < 5) {
      alert("Password length not less than five");
    } else {
      if (getuserArr && getuserArr.length) {
        const userData = JSON.parse(getuserArr);
        const userLogin = userData.filter((el, ind) => {
          return el.email === email && el.password === password;
        });

        if(userLogin.length===0){
          alert("Invalid Credentials")
        }else{
          console.log("User login Successfully")
          localStorage.setItem("user_login",JSON.stringify(userLogin))
          history("/home")
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-5" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6 p-2">Sign In</h3>
            <form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  onChange={getData}
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  onChange={getData}
                  type="password"
                  placeholder="Password"
                  name="password"
                ></Form.Control>
              </Form.Group>
              <Button
                className="col-lg-6"
                variant="primary"
                onClick={addData}
                type="submit"
              >
                Submit
              </Button>
            </form>
            <p className="mt-3">
              Don't Have an Account{" "}
              <span>
                <NavLink to="/">User Registration</NavLink>
              </span>
            </p>
          </div>
          <Sign_Img />
        </section>
      </div>
    </>
  );
};

export default Login;
