/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState,useEffect} from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import {
 
 
  useNavigate ,
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Ip } from './../constants/Ip';


import Load from '../images/101961-non-data-found.json'

function RestaurentCard(props) {
  const [Restaurents,setRestaurents] = useState([]);

   
  const place = "bhimavaram";
  const  GetData = async ()=>{
   //  const token = await  localStorage.getItem("token")
    // console.log("Dashboard = "+token)
   fetch(Ip+'/GetRestorents?id='+props.Place,{
   headers:new Headers({
     Authorization:"Bearer " 
   })
   }).then(res=>res.json())
   
   .then(data=>{ 
   
      
    setRestaurents(data);
     
          console.log(data);
    
   }
   )
  }
useEffect(()=>{
   GetData();
   
},[props.Place])

console.log("saduash",props.user)
    return (
    <section>
     
        <div className='container mt-5'>
        {Restaurents.length===0?
                <div>
                <Player
                    autoplay
                    loop
                    src={Load}
                    style={{ height: '300px', width: '300px' }}
                >
                   
                </Player>

                  <h1>No Restaurants in {props.Place}</h1>
                </div>
          :
          <div className='row'>
                {Restaurents.map((item)=>(
                  <div className='col-md-4 mb-4'>
                    <NavLink to="/Restorent"
                       state={{
                        
                         ShopId: item.AdminId,
                         ShopName:item.ShopName,
                         Address:item.Address,
                         ShopPhoto:item.ShopPhoto,
                         PhoneNumber:item.PhoneNumber,
                         AdminId:item.AdminId,
                          User:props.user
                         }}
                    >
                         
                        <div class="card sec_one_card">
                          <img class="card-img-top img-fluid" src={item.ShopPhoto?item.ShopPhoto:"https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2975%2Ftrend20201030124515.jpg"} style={{borderTopLeftRadius:"15px",borderTopRightRadius:"15px"}} alt={"Card image cap"} width="150" />
                          <div class="card-body">
                            <h5 class="card-title">{item.ShopName}</h5>
                            <p class="card-text text-truncate">Enjoy the food</p>
                            <p style={{color:'black',fontSize:25}}>{item.Address}</p>
                          </div>
                        </div>
                      
                    </NavLink>
                    </div>
                )       
                )}
                 
            </div>


          }
             
        </div>
    </section>

  )
}

export default RestaurentCard;