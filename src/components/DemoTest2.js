/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Ip } from './../constants/Ip';



import { getDatabase, set ,push,child,onValue} from "firebase/database";
import { storage ,databaseref,app,auth,database} from '../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {Helmet} from "react-helmet";

function DemoTest2(props) {

  let user = auth.currentUser;
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);


  var p = null;
  const handleSubmit = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
          p = downloadURL;
          console.log(p);
          onSubmitHandler();
        });
      }
    );

   
     
  }

  const [Value, setValue] = React.useState();
  const [value, setvalue] = React.useState('fruit');
  const handleChange = (event) => {
    setvalue(event.target.value);
  };





  const [fileData, setFileData] = useState();

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
   

    // Handle File Data from the state Before Sending
   /* const data = new FormData();

    data.append("image", fileData);
    data.append("ItemName",ItemName);
    data.append("ItemPrice",Price);
    data.append("ItemDiscription",Discription);
    data.append("ShopName",props.ShopName);
    data.append("ShopId",props.id);
    data.append("ItemId",props.id+ItemName);
    data.append("AdminId",props.id+props.ShopName);
    data.append("ItemType",Type);
    data.append("ItemCategory",VegOrNon);*/
      if(Type!=="Item Type" && VegOrNon!=="Select Veg/Nonve"){
        
    fetch(Ip+"/AddItems",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
      "ProductImage":p,
      "ItemName":ItemName,
      "ItemPrice":Price,
      "ItemDiscription":Discription,
      "ShopName":props.ShopName,
      "ShopId":props.id,
      "ItemId":props.id+ItemName,
      "AdminId":props.id+props.ShopName,
      "ItemType":"Rice",
      "ItemCategory":"Non Veg",
      "DiscountPrice":DisPrice,
      "ItemStatus":"true",
      "ItemHalfPrice":HalfPrice

     })
    })
    .then(res=>{
  
      console.log("done",res);
       
    })
  
   /* fetch(Ip+"/AddItems", {
      method: "POST",
      body:JSON.stringify({
        "ProductImage":p,
        "ItemName":ItemName,
        "ItemPrice":Price,
        "ItemDiscription":Discription,
        "ShopName":props.ShopName,
        "ShopId":props.id,
        "ItemId":props.id+ItemName,
        "AdminId":props.id+props.ShopName,
        "ItemType":Type,
        "ItemCategory":VegOrNon

       })
    })
      .then((result) => {
        console.log("File Sent Successful",result);
      })
      .catch((err) => {
        console.log(err.message);
      });*/
      setItemName("");
      setDisccription("");
      setPrice("");
      setFileData("");
      setType("Item Type");
      setVegOrNon("Select Veg/Nonveg")
      setDisPrice("");
      setHalfPrice("");
      alert("Item Added...")
      }
      else{
        alert("Please Provide all Required Fields")
      }
  };

  const [ItemName,setItemName] = useState("");
  const [Price,setPrice] =useState("");
  const [DisPrice,setDisPrice] =useState("");
  const [Discription,setDisccription] =useState("");
  const [VegOrNon,setVegOrNon] = useState("Non Veg");
  const [Type,setType] =useState("Rice")
  const [HalfPrice,setHalfPrice] =useState("");
  return (
    <div className="container">
     <Helmet>
                  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>   </Helmet>
    
      {/*<form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <input type="text" value={ItemName} placeholder="enter Item Name" onChange={(e)=>setItemName(e.target.value)}/>
        <input type="text" value={Price} placeholder="enter Item Price" onChange={(e)=>setPrice(e.target.value)}/>
        <input type="text" value={Discription} placeholder="enter Item Discription" onChange={(e)=>setDisccription(e.target.value)}/>
        <br />
        <br />
        <button type="submit">Add Item</button>
      </form>*/}
      <form onSubmit={onSubmitHandler}> 
      <div class="container" >
            <div class="row">
              <div class="col-md-12 text-center">
                <h2>New Items</h2>
              </div>
            </div>


            <div className="col-12">

            <div class="dropdown col-12">
                <button   class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {VegOrNon}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#" onClick={()=>setVegOrNon("Veg")}>Veg</a>
                  <a class="dropdown-item" href="#" onClick={()=>setVegOrNon("Non Veg")}>Non Veg</a>
                   
                </div>
                      
             </div>
          
                <div class="dropdown  col-12 mt-3 ">
                      <button class="btn btn-secondary dropdown-toggle"   type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {Type}
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#" onClick={()=>setType("Rice")}>Rice</a>
                        <a class="dropdown-item" href="#" onClick={()=>setType("Biryani")}>Biryani</a>
                        <a class="dropdown-item" href="#" onClick={()=>setType("Ice Cream")}>Ice Cream</a>
                        <a class="dropdown-item" href="#" onClick={()=>setType("Curry")}>Curry</a>
                        <a class="dropdown-item" href="#" onClick={()=>setType("Bakery")}>Bakery</a>
                        <a class="dropdown-item" href="#" onClick={()=>setType("Juice")}>Juice</a>
                        <a class="dropdown-item" href="#" onClick={()=>setType("Starters")}>Starters</a>
                      </div>
                            
                </div>
            </div>
        

        <div class="container mt-5">
             
            
              <div class="mb-3">
                <label class="form-label">Enter product name</label>
                <input class="form-control" type="text" value={ItemName} placeholder="enter Item Name" onChange={(e)=>setItemName(e.target.value)} id="formFile" />
              </div>
          
              <div class="mb-3">
                <label for="formFileDisabled" class="form-label">Enter the price of the item</label>
                <input class="form-control" type="text" value={Price} placeholder="enter Item Price" onChange={(e)=>setPrice(e.target.value)} id="formFileDisabled" required />
              </div>

              <div class="mb-3">
                <label for="formFileDisabled" class="form-label">Enter Discount Price</label>
                <input class="form-control" type="text" value={DisPrice} placeholder="Discount Price" onChange={(e)=>setDisPrice(e.target.value)} id="formFileDisabled" required />
              </div>


              <div class="mb-3">
                <label for="formFileDisabled" class="form-label">If Item has Half Quantity Enter Price</label>
                <input class="form-control" type="text" value={HalfPrice} placeholder="Half Quantity Price" onChange={(e)=>setHalfPrice(e.target.value)} id="formFileDisabled"  />
              </div>
              
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description about the item</label>
                <textarea class="form-control" type="text" value={Discription} placeholder="enter Item Discription" onChange={(e)=>setDisccription(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
             
            
               
        </div>
      </div>
      </form>
      <form onSubmit={handleSubmit} className='form'>
      <div class="mb-3">
                
                <input type='file' />
              </div>
       
        <button type='submit' class="btn btn-outline-primary text-center" >Submit</button>
      </form>
    </div>
  );
}

export default DemoTest2;