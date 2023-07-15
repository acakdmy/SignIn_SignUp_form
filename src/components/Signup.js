import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Sign_Img from "./Sign_Img";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [inputval, setInputval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);

  const getData = (e) => {
    const { value, name } = e.target;

    setInputval((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, date, password } = inputval;

    if (name === "") {
      alert("Please enter your name");
    } else if (email === "") {
      alert("Please enter your email address");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
    } else if (date === "") {
      alert("Date is required");
    } else if (password === "") {
      alert("Password is required");
    } else if (password.length < 5) {
      alert("Password length should be at least five characters");
    } else {
      localStorage.setItem("userData", JSON.stringify([...data, inputval]));

      // Clear the input fields
      setInputval({
        name: "",
        email: "",
        date: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-5" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6 p-2">User Registration</h3>
            <form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  onChange={getData}
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={inputval.name}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  onChange={getData}
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={inputval.email}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="date"
                  onChange={getData}
                  name="date"
                  value={inputval.date}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  onChange={getData}
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={inputval.password}
                />
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
              Already Have an Account{" "}
              <span>
                <NavLink to="/login">Sign In</NavLink>
              </span>
            </p>
          </div>
          <Sign_Img />
        </section>
      </div>
    </>
  );
};

export default Signup;
