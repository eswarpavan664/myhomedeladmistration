/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import Lodi from '../images/95530-password.json'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import {
  NavLink
} from "react-router-dom";
import { Button } from 'antd';
import {useNavigate} from "react-router-dom";
import { Ip } from '../constants/Ip';
import TextAnimation from './../components/TextAnimation';
import Img from '../images/WhatsApp Image 2022-09-06 at 10.45.23 PM.jpeg'

import '../css/loginstyles.css'

function Login() {
  let navigate = useNavigate();

  const detectLogin= async ()=>{
    const token =   localStorage.getItem('token')
    console.log("login = ",token)
        if(token){
          navigate('/Dashboard');
        }
        else{
          setScreen(0);
        }
        
        
  }
  useEffect(()=>{
  
    detectLogin();
},[])



  const [email,setEmail] = useState('');
const [password,setPassword]=useState('')


const sendCred = async (props)=>{
fetch(Ip+"/AdminSignin",{
  method:"POST",
  headers: {
   'Content-Type': 'application/json'
 },
 body:JSON.stringify({
   "email":email,
   "password":password
 })
})
.then(res=>res.json())
.then(async (data)=>{
       try {
          localStorage.setItem('token',data.token)
          console.log(data.token)
          console.log("loged")
          navigate('/Dashboard');
       } catch (e) {
         console.log("error hai",e)
          
       }
})
}
console.log(Ip+"/AdminSignin")
const [Screen,setScreen] = useState(1);
  return (
    <div className='AdminLogin_back_'>
    <div className='row m-0' style={{backgroundColor:"white",borderBottom:"2px solid lightgray"}}>
        <div className='col-12 text-center'>
            <h4>Admin Login</h4>
        </div>
    </div>
    <div className='container '>
        <div className='row align-items-center'>
            <div className='col-md-6 text-center'>
                <div className='border pt-3 pb-5 admin_login_form__'>
                    <h1 className='text-center'>Login</h1>
                    <input style={{width:"80%"}}  value={email} onChange={(e)=> setEmail(e.target.value)} className="admin_login_form_inputs__" type={"text"} placeholder="Enter your email" /> <br /><br />
                    <input style={{width:"80%"}} value={password} onChange={(e)=> setPassword(e.target.value)} className="admin_login_form_inputs__" type={"password"} placeholder="Enter your password" /><br />
                    <div className="row">
                    <div className="col-12 text-center mt-3">
                    <button className="btn btn-info"  onClick={sendCred}>Login</button>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className='col-md-6 adminLogin_con_ d-flex align-items-center justify-content-center'>
                <img className='img-fluid' src={Img} />
            </div>
        </div>
    </div>
</div>

  )
}

export default Login;