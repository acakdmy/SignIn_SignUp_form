import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const Error = () => {


    const history = useNavigate();
  return (
    <>
        <div className='container'>
            <div className='error d-flex flex-column justify-content-lg-center align-items-center'>
                <img src='./errorpage.avif' alt='Error' className='errorimg' width={400}/>
                <h4>404 ! Error ! Page Not Found</h4>
                <button className='btn btn-primary' onClick={()=>history("/")}>Go to login page</button>
            </div>
        </div>
    </>
  )
}

export default Error