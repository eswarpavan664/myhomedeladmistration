/* eslint-disable no-undef */
import React,{useState,useEffect} from 'react'
import { Ip } from './../constants/Ip';

function AddAdmins(props) {
    const [Name,setName] = useState();
    const [email,setemail] =useState();
    const [Password,setPassword] =useState();
    const [Phonenumber,setPhoneNumber] =useState();
    const [shopName,setShopName] = useState();
    const [Address,setAddress] = useState();



    const AddAdmin=()=>{
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
            "ShopPhoto":""
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

        })

    }

  return (
     <>
         <div class="container mt-5" style={{width:'50%'}}>
         <h1>New Admin</h1>
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
              <div class="text-center">

                  <button class="btn btn-outline-primary" onClick={AddAdmin}>Add Admin</button>
              </div>
        </div>
     </>
  )
}

export default AddAdmins;