import React,{useState,useEffect} from 'react'
import { Ip } from './../constants/Ip';

function Users(props) {

const [Data,setData] =useState([]);
  const GetItems=()=>{
    fetch(Ip+'/GetAdmins',{
      headers:new Headers({
        Authorization:"Bearer" 
      })
      }).then(res=>res.json())
      .then(data=>{ 
      
       
        setData(data);
        console.log(data)
     
      }
      )
  }
  const GetUSers=()=>{
    fetch(Ip+'/GetUsers',{
      headers:new Headers({
        Authorization:"Bearer" 
      })
      }).then(res=>res.json())
      .then(data=>{ 
      
       
        setData(data);
        console.log(data)
     
      }
      )
  }
  useEffect(()=>{
     if(props.page==="Admins"){
      GetItems()
     }
     else{
      GetUSers()
     }
  },[props.page])
  return (
    <div className='row mt-5'>
    
   
    {props.page==="Admins"?
<>
    {Data.map((data)=>(
    
    <div class="card text-white bg-warning mb-3" style={{width:'20%',marginLeft:'2%',marginRight:'2%'}} >
      <h3 class="card-header">{data.Name}</h3>
      <div class="card-body">
        <h5 class="card-title">{data.PhoneNumber}</h5>
         {data.email?<h6 class="card-title">{data.email}</h6>:<h6>no email id</h6>}
         {data.Address?<p class="card-text">{data.Address.split("_")[0]}</p>:null

         }
      </div>
    </div>
      ))
    
      }

</>:<>{Data.map((data)=>(
    
    <div class="card text-white bg-warning mb-3" style={{width:'20%',marginLeft:'2%',marginRight:'2%'}} >
       {data.Name?<h5 class="card-header">{data.Name}</h5>:<h3>No Name</h3>}
      <div class="card-body">
        <h5 class="card-title">{data.PhoneNumber}</h5>
         {data.email?<h6 class="card-title">{data.email}</h6>:<h6>no email id</h6>}
         {data.Address?<p class="card-text">{data.Address.split("_")[0]},{data.Address.split("_")[1]}-{data.Address.split("_")[2]}</p>:null

         }
      </div>
    </div>
      ))
    
      }</>
    }
 
 
      
    </div>
  )
}

export default Users;