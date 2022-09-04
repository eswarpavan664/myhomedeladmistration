/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState,useEffect} from 'react'
import { Ip } from '../constants/Ip';
import { Button, Card } from 'antd';
import Item from 'antd/lib/list/Item';

const { Meta } = Card;


function MyItems(props) {
    const [Items,setItems] = useState([]);
    console.log(props.id)
    const GetItems=()=>{
      fetch(Ip+'/GetAdminItem?id='+props.id,{
        headers:new Headers({
          Authorization:"Bearer" 
        })
        }).then(res=>res.json())
        .then(data=>{ 
        
         
          setItems(data);
          console.log(data)
       
        }
        )
    }
    useEffect(()=>{
      GetItems();
    })
    console.log("sdkasn= ",Items)
  return (
    <>
      {Items.length>0?
        <div class="container-fluid">
          <div class="row mt-5 text-center m-0 p-0">
          {Items.map((item)=>(
          
          <ItemCards 
               Name={item.ItemName} 
               ProductImage={Ip+"/"+item.ProductImage} 
               ItemPrice={item.ItemPrice}
               ItemDiscription={item.ItemDiscription}
               _id={item._id}


                /> 
          ))

          }


          </div>
        </div>
         :<h1>No Items</h1>

      }
    </>
  )
}


function ItemCards(props){
    console.log(props.ProductImage)
    var ur=props.ProductImage

    const DeleteItem=()=>{
        fetch('http://'+Ip+':5000/deleteItem?id='+props._id,{
            headers:new Headers({
              Authorization:"Bearer " 
            })
            }).then(res=>res.json())
            .then(data=>{ 
            
             
              alert("deleted Succesfully");
              
           
            }
            )
    }
    const UpdateItem=()=>{

    }
    return(
      <div class="col-md-3">
      <div class="card p-2 cd m-0" style={{width: '18rem',border: '2px solid hotpink'}}>
          <img class="card-img-top" src={ur} alt="Card image cap" />
          <div class="card-body">
            <div class="row">
              <p class="col-9 text-truncate font-weight-bold">{props.Name}</p>
              <p class="col-3 text-danger">₹{props.ItemPrice}</p>
            </div>
            <div class="row d-flex justify-content-between">
              
                  <button class="btn btn-danger col-5" onClick={DeleteItem}>Delete</button>
              
                  <button class="btn btn-info col-5" onClick={UpdateItem}>Edit</button>
              
            </div>
          </div>
        </div>
  </div>


 
                  
    )
  }
export default MyItems;