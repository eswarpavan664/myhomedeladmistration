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
      <AdimCard Name={data.Name} email={data.email} Address={data.Address} PhoneNumber={data.PhoneNumber} _id={data._id}/>
    
      ))
    
      }

</>:<>{Data.map((data)=>(
     <CustomerCard Name={data.Name} email={data.email} Address={data.Address} PhoneNumber={data.PhoneNumber} _id={data._id}/>
      ))
    
      }</>
    }
 
 
      
    </div>
  )
}



function CustomerCard(props){

  const DeleteAdmin=()=>{
    alert( props._id)
   fetch(Ip+'/deleteCustomer?id='+props._id,{
      headers:new Headers({
        Authorization:"Bearer " 
      })
      }).then(res=>res.json())
      .then(data=>{ 
      
       
        alert("deleted Successfully");
        
     
      }
      )
}
  return(
    <div className='col-md-3'>
    <div class="card text-white  mb-3" style={{minHeight:"200px",boxShadow:"0 0 8px gray"}} >
       {props.Name?<h5 class="text-dark text-center">{props.Name}</h5>:<h5 className='text-dark text-center' >No Name</h5>}
       <hr style={{border:"1px solid black"}} />
      <div class="card-body text-dark">
        <h5 class="card-title">{props.PhoneNumber}</h5>
         {props.email?<h6 class="card-title text-truncate">{props.email}</h6>:<h6>no email id</h6>}
         {props.Address?<p class="card-text">{props.Address.split("_")[0]},{props.Address.split("_")[1]}-{props.Address.split("_")[2]}</p>:null

         }
      </div>
      <button className='text-danger' style={{borderRadius:10,backgroundColor:'gray',color:'white'}} onClick={DeleteAdmin}> <h6 style={{color:'white',fontSize:20}}>Delete</h6></button>
    </div>
    </div>
  )
}



function AdimCard(props){

  const DeleteAdmin=()=>{
    alert( props._id)
   fetch(Ip+'/deleteAdmins?id='+props._id,{
      headers:new Headers({
        Authorization:"Bearer " 
      })
      }).then(res=>res.json())
      .then(data=>{ 
      
       
        alert("deleted Successfully");
        
     
      }
      )
}
  return(
    <div className='col-md-3'>
    <div class="card text-white bg-warning mb-3" style={{}} >
      <h3 class="card-header">{props.Name}</h3>
      
      <div class="card-body">
        <h5 class="card-title">{props.PhoneNumber}</h5>
          {props.email?<h6 class="card-title">{props.email}</h6>:<h6>no email id</h6>}
          {props.Address?<p class="card-text">{props.Address.split("_")[0]}</p>:null

          }
      </div>
      <button className='text-danger' style={{borderRadius:10,backgroundColor:'gray',color:'white'}} onClick={DeleteAdmin}> <h6 style={{color:'white',fontSize:20}}>Delete</h6></button>
    </div>
   
  </div>
  )
}


export default Users;