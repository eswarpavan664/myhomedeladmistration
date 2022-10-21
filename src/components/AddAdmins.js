/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import React,{useState,useEffect} from 'react'
import { Ip } from './../constants/Ip';
import {Helmet} from "react-helmet";
function AddAdmins(props) {
    const [Name,setName] = useState("");
    const [email,setemail] =useState("");
    const [Password,setPassword] =useState("");
    const [Phonenumber,setPhoneNumber] =useState("");
    const [shopName,setShopName] = useState("");
    const [Address,setAddress] = useState("");

const [DeliveryCharges,setDeliveryCharges] =useState("");
const [DeliveryTime,setDeliveryTime] =useState("");

    const AddAdmin=()=>{

        if(DeliveryCharges!=="" &&Name!=="" &&email!=="" &&Password!=="" &&Phonenumber!=="" &&shopName!=="" &&Address!=="" &&DeliveryTime!=="")
        fetch(Ip+"/AdminSignup",{
          method:"POST",
          headers: {
           'Content-Type': 'application/json'
         },
         body:JSON.stringify({
          "email":email,
          "Name":Name,
          "Address":Address,
          "password":Password,
          "PhoneNumber":Phonenumber,
          "Role":"Admin",
          "ShopName":shopName,
          "AdminId":email,
          "ShopPhoto":"",
          "ShopType":ShopType,
          "Deliverycharges":DeliveryCharges,
          "DeliveryTime":DeliveryTime,
          "ShopStatus":"true"
         })
        })
        .then(res=>{
          
          alert("Admin created..")
          setAddress("");
          setName("");
          setPassword("");
          setPhoneNumber("");
          setemail("");
          setShopName("");
          setDeliveryCharges("");
          setDeliveryTime("");
        })
else{
  alert("All Fields  are Required...")
}
    }

    const [ShopType,setShopType] =useState("Restaurant");
  return (
     <>
      <Helmet>
                  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
           
           
                  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
              
   </Helmet>


  <div class="container mt-5 col-md-6 col-sm-12" >
         <h1>New Admin</h1>
         <div class="dropdown mt-2">
         <label>Select Shop type: -</label>
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   {ShopType}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#" onClick={()=>setShopType("Grocery")}>Grocery</a>
                  <a class="dropdown-item" href="#" onClick={()=>setShopType("Restaurant")}>Restaurant</a>
                  <a class="dropdown-item" href="#" onClick={()=>setShopType("Vegetable Shop")}>Vegetable Shop</a>
                  <a class="dropdown-item" href="#" onClick={()=>setShopType("Meet Shop")}>Meet Shop</a>
                   
                  <a class="dropdown-item" href="#" onClick={()=>setShopType("Fresh")}>Fresh</a>
             
                </div>
                      
          </div>
              <div class="mb-3">
                <label class="form-label">Admin Name</label>
                <input class="form-control" type="text" value={Name} placeholder="enter Item Name" onChange={(e)=>setName(e.target.value)} id="formFile" />
              </div>
          
              <div class="mb-3">
                <label for="formFileDisabled" class="form-label">Enter email</label>
                <input class="form-control" type="text" value={email} placeholder="enter email" onChange={(e)=>setemail(e.target.value)} id="formFileDisabled" required />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Password</label>
                <input class="form-control" type="text" value={Password} placeholder="enter Password" onChange={(e)=>setPassword(e.target.value)} id="formFileDisabled" required />
              </div>
              <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Phone Number</label>
                <input class="form-control" type="text" value={Phonenumber} placeholder="enter Phone Number" onChange={(e)=>setPhoneNumber(e.target.value)} id="formFileDisabled" required />
              </div>
              <div class="mb-3">
                <label for="formFileMultiple" class="form-label">shop Name</label>
                <input class="form-control" type="text" value={shopName} placeholder="enter shop Name" onChange={(e)=>setShopName(e.target.value)} id="formFileDisabled" required />
              </div>
              <div class="mb-3">
                <label for="formFileMultiple" class="form-label">City Name</label>
                <input class="form-control" type="text" value={Address} placeholder="enter City Name" onChange={(e)=>setAddress(e.target.value)} id="formFileDisabled" required />
              </div>
              <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Delivery Charges</label>
                <input class="form-control" type="text" value={DeliveryCharges} placeholder="enter City Name" onChange={(e)=>setDeliveryCharges(e.target.value)} id="formFileDisabled" required />
              </div>
              <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Delivery Time</label>
                <input class="form-control" type="text" value={DeliveryTime} placeholder="enter City Name" onChange={(e)=>setDeliveryTime(e.target.value)} id="formFileDisabled" required />
              </div>
              <div class="text-center">

                  <button class="btn btn-outline-primary" onClick={AddAdmin}>Add Admin</button>
              </div>
        </div>
     </>
  )
}

export default AddAdmins;