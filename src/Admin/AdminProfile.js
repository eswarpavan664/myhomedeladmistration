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
    <div>
     <img src={props.Data.ShopPhoto?props.Data.ShopPhoto:'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2927%2Ftrend20200831092220.jpg'} style={{width:"100%",height:"60vh"}} />
        <h2>Admin Name:- {props.Data.Name}</h2>
        <h2>Email:- {props.Data.email}</h2>
        <h2>contact No:-{props.Data.PhoneNumber}</h2>
        <h2>Shop Name:-{props.Data.ShopName}</h2>
        <h2>Address:-{props.Data.Address}</h2>
        <button onClick={logout} style={{backgroundColor:'green',color:'white',borderRadius:15}}> Logout</button>
    </div>
  )
}

export default AdminProfile;