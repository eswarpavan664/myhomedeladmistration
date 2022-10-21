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
      <AdimCard Name={data.Name} email={data.email} Address={data.Address} PhoneNumber={data.PhoneNumber} _id={data._id} ShopStatus={data.ShopStatus}/>
    
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
    <div class="card text-white  mb-3" style={{minHeight:"300px",boxShadow:"0 0 8px gray",maxHeight:"500px"}} >
       {props.Name?<h5 class="text-dark text-center">{props.Name}</h5>:<h5 className='text-dark text-center' >No Name</h5>}
       <hr style={{border:"1px solid black"}} />
      <div class="card-body text-dark">
        <h5 class="card-title">{props.PhoneNumber}</h5>
         {props.email?<h6 class="card-title text-truncate">{props.email}</h6>:<h6>no email id</h6>}
         {props.Address?<p class="card-text">{props.Address.split("_")[0]},{props.Address.split("_")[1]}-{props.Address.split("_")[2]}</p>:null

         }
      </div>
      <button className=' btn btn-danger text-light m-0 py-2' onClick={DeleteAdmin}>Delete</button>
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

const [se,setse]=useState(props.ShopStatus==="true"?true:false)

const UpdateShopTimes=(k)=>{
  setse(!se)
  fetch(Ip+"/OpenOrCloseShop",{
    method:"PUT",
    headers: {
     'Content-Type': 'application/json'
   },
   body:JSON.stringify({
    "Id":props._id,
    "status":k
 
   })
  })
  .then(res=> {

      if(k==="true"){
        alert("shop open")
      }else{
        alert("shop close")
      }

  })
 
 
}
console.log()

  return(
    <div className='col-md-3'>
    <div class="card text-white bg-warning mb-3" style={{}} >
      <h3 class="card-header">{props.Name}</h3>
      
      <div class="card-body">
        <h5 class="card-title">{props.PhoneNumber}</h5>
          {props.email?<h6 class="card-title">{props.email}</h6>:<h6>no email id</h6>}
          {props.Address?<p class="card-text">{props.Address.split("_")[0]}</p>:null}

          {props.ShopStatus==="true"?<p class="card-text">shop Open</p>:<p class="card-text">shop Close</p>}

      </div>
      <button className='text-danger' style={{borderRadius:10,backgroundColor:'gray',color:'white',marginBottom:'5%'}} onClick={DeleteAdmin}> <h6 style={{color:'white',fontSize:20}}>Delete</h6></button>
      {se?
        <button className='text-primary' style={{borderRadius:10,backgroundColor:'gray',color:'white'}} onClick={()=>UpdateShopTimes("false")}> <h6 style={{color:'white',fontSize:20}}>Open</h6></button>
   
          :
       <button className='text-primary' style={{borderRadius:10,backgroundColor:'gray',color:'white'}} onClick={()=>UpdateShopTimes("true")}> <h6 style={{color:'white',fontSize:20}}>Close</h6></button>
   

      }
   
    </div>
   
  </div>
  )
}


export default Users;