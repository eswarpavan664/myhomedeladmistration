/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function AdminProfile(props) {
    let navigate = useNavigate();
  const  logout =()=>{
    localStorage.removeItem("token") 
     navigate('/Login')
   
 }
  return (
    <div className='container'>
    <div className='align-items-center' style={{height:"75vh"}}>
      <div className='align-items-center'>
        <div className='col-12'>
        <img className='container-fluid' src={props.Data.ShopPhoto?props.Data.ShopPhoto:'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2927%2Ftrend20200831092220.jpg'} style={{ borderRadius:"25px"}} />
        </div>
        
      </div>
      <div  style={{borderBottom:"2px solid green",marginTop:'2%'}}></div>
      <div>
      <div className='col-6'>
        <h3 className='m-0'>{props.Data.Name}</h3>
      <h3 className='m-0'>{props.Data.email}</h3>
      <h3 className='m-0'>{props.Data.PhoneNumber}</h3>
      <h3 className='m-0'>{props.Data.ShopName}</h3>
      <h3 className='m-0'>{props.Data.Address}</h3>
        </div>
      </div>
      <div className='row'>
      <div className='  col-12 text-center'>

      <button onClick={logout} className="btn btn-outline-danger"> Logout</button>
      <p className="mt-5"> © Copyright 2023 Trigovex Technologies Pvt. Ltd. All Rights Reserved</p>
      </div>
    </div>
    </div>
    
     
     
  </div>
  )
}

export default AdminProfile;