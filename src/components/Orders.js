import React,{useState,useEffect} from 'react'
import { Ip } from './../constants/Ip';
import Loader from './Loader';

function Orders(props) {
  const [Items,setItems] = useState([]);
  console.log(props.userdata.Role)
    const GetItems=()=>{

      if(props.userdata.Role==="SuperAdmin")
      {
        fetch(Ip+'/GetOrdersForSuperAdmin',{
          headers:new Headers({
            Authorization:"Bearer " 
          })
          }).then(res=>res.json())
          .then(data=>{ 
          
           
            setItems(data);
            
                console.log(data);
             
          }
          )
          
      }
      else{
        fetch(Ip+'/GetOrders?id='+props.id,{
          headers:new Headers({
            Authorization:"Bearer " 
          })
          }).then(res=>res.json())
          .then(data=>{ 
          
           
            setItems(data);
            
                console.log(data);
             
          }
          )

      }
    }
    useEffect(()=>{
      setInterval(() => {
        GetItems();
          }, 2000)
    },[ ])
    const [DisplayType,setDisplayType] =useState(props.Ordertype)
    console.log(props.Ordertype)
  return (
     <>
       
      {Items?  
      <div> 
      {Items.map((item)=>(
          
          <ItemCards 
            CustomerName={item.CustomerName}
            ContactNo={item.ContactNo}
            orderList={item.orderList.split(",")}
            Amount={item.Amount}
            CustomerAddress={item.CustomerAddress}
            CurrentLocation={item.CurrentLocation}
            CustomerId={item.CustomerId}
            DeliveryManId={item.DeliveryManId}
            OrderStatus={item.OrderStatus}
            id={item._id}
            displaytype={props.Ordertype}

                /> 
       ))

       }
       </div>
      :<h1>No Orders</h1>
       
      }

      {Items.length===0? <Loader/>: 
null
      }
     
     </>
  )
}

function ItemCards(props){



  const AcceptOrDeclain=(status)=>{
   
    fetch(Ip+"/OrderAcceptanceStatus",{
      method:"PUT",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "orderId":props.id,
       "status":status
     })
    })
    .then(res=>{

        statusupdate(status)
        alert("Order "+status);
    })
  }

  const [statusupdate,setstatusupdate]=useState("");
 var items=props.orderList[0].split("-")
 items = items.filter(e=>e!=="")
 console.log(items)

  return(
    <div>

      {props.OrderStatus===props.displaytype ? 
      
      <>

        
<div class="container">
        <div class="row rw text-center nav ">
            <div class="col-12 ">
                <div class="row  justify-content-center d-flex align-items-center">
                    <div class="col-md-3 col-6 ">
                        <div class="row">
                            <div class="col-12">
                                <p>Customer Name:- {props.CustomerName}</p>
                                <p>Contact No:- {props.ContactNo}</p>
 						                    <p>Total Amount:- {props.Amount}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 ">
                        {items.map((item,i)=>(
                           <div style={{flexDirection:'column'}}>
                           <p>{item.split("_")[0]}</p>
                           <p>Rs. {item.split("_")[1]}</p>
                           <p>x{item.split("_")[2]}</p>
                           </div>
                        ))

                        }
                    </div>
                    <div class="col-md-3 col-4 ">
                        <button class="btn btn-secondary">Order Status:- {props.OrderStatus}</button>
                    </div>
                    <div class="col-8 col-md-3 ">
                         {props.OrderStatus==="Delivered"?<h2>Done</h2>:
                          null

                         }

                         {props.OrderStatus==="Accepted"?

                         <h2>Waiting...</h2>:null

                         }
                         {props.OrderStatus==="AcceptedByDeliveryBoy"?

                          <h2>Accepted By DeliveryBoy</h2>:null

                          }


                         {props.OrderStatus==="Pending"?

                         <div class="row">
                            {statusupdate===""?
                              <>
                              <button class="btn btn-danger col-12"  onClick={()=>AcceptOrDeclain("Declain")}>Declain</button>
                                <button class="btn btn-info col-12 mt-2" onClick={()=>AcceptOrDeclain("Accepted")}>Accept</button>
                                  
                              </>:null
                            }
                            {statusupdate==="Declain"?
                              <>
                                    <h2>Order Declined</h2>
                                  
                              </>:null
                            }
                            {statusupdate==="Accepted"?<h2>Order Accepted</h2>:null

                            }
                        </div>:null

                         }

                         {props.OrderStatus==="Declain"?

                          <h2>Order Declined</h2>:null

                         }
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr   />
       
      </>
      
      :null

      }
    </div>
  )
}

export default Orders;