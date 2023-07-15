import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { NavLink, useNavigate } from "react-router-dom";

const Details = () => {
  const [logindata, setLoginData] = useState([]);
  console.log(logindata);

  const history  = useNavigate()

  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);



const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      
      setLoginData(user);

      const userbirth = logindata.map((elm,ind)=>{
          return elm.date===todayDate
      });

      if(userbirth){
        setTimeout(()=>{
            console.log("Okkkkk");
            handleShow();
        },3000)
      }
    }
  };

   const userlogout = ()=>{
    localStorage.removeItem("user_login");
    history("/");
   }
  useEffect(() => {
    Birthday();
  }, []);
  return (
    <>
        {
            logindata.length===0?(<h4>User Not Register!! <NavLink to = "/"><span>Register Hrere</span></NavLink> </h4>):
            <>
              
                <h1>{logindata[0].name}</h1>
                <Button onClick={userlogout}>Logout</Button>
               

{
    logindata[0].date===todayDate?
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{logindata[0].name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Wish you many many happy returns of the day!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>:""
}
             
            </>
        }
    </>
  );
};

export default Details;
