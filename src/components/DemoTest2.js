import React, { useState } from "react";
import { Ip } from './../constants/Ip';

function DemoTest2(props) {
  const [fileData, setFileData] = useState();

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Handle File Data from the state Before Sending
    const data = new FormData();

    data.append("image", fileData);
    data.append("ItemName",ItemName);
    data.append("ItemPrice",Price);
    data.append("ItemDiscription",Discription);
    data.append("ShopName",props.ShopName);
    data.append("ShopId",props.id);
    data.append("ItemId",props.id+ItemName);
    data.append("AdminId",props.id+props.ShopName);
    data.append("ItemType",Type);
    data.append("ItemCategory",VegOrNon);
    fetch(Ip+"/single", {
      method: "POST",
      body: data,
      
    })
      .then((result) => {
        console.log("File Sent Successful",result);
      })
      .catch((err) => {
        console.log(err.message);
      });
      setItemName("");
      setDisccription("");
      setPrice("");
      setFileData("");
      window.location.reload()
  };

  const [ItemName,setItemName] = useState("");
  const [Price,setPrice] =useState("");
  const [Discription,setDisccription] =useState("");
  const [VegOrNon,setVegOrNon] = useState(" Select Veg/Nonveg");
  const [Type,setType] =useState("Item Type")

  return (
    <div style={{width:'50%'}}>
    
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
      <div class="container-fluid" id="add-item">
            <div class="row">
              <div class="col-md-12">
                <h4>Add Items</h4>
              </div>
            </div>

        <div class="container mt-5">
            <div>

            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {VegOrNon}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#" onClick={()=>setVegOrNon("Veg")}>Veg</a>
                  <a class="dropdown-item" href="#" onClick={()=>setVegOrNon("Non Veg")}>Non Veg</a>
                   
                </div>
                      
          </div>
          
          <div class="dropdown mt-2">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   {Type}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#" onClick={()=>setType("Rice")}>Rice</a>
                  <a class="dropdown-item" href="#" onClick={()=>setType("Ice Cream")}>Ice Cream</a>
                  <a class="dropdown-item" href="#" onClick={()=>setType("Curry")}>Curry</a>
                  <a class="dropdown-item" href="#" onClick={()=>setType("Bakery")}>Bakery</a>
                  <a class="dropdown-item" href="#" onClick={()=>setType("Juice")}>Juice</a>
                  <a class="dropdown-item" href="#" onClick={()=>setType("Starters")}>Starters</a>
                </div>
                      
          </div>
            </div>
        
            
              <div class="mb-3">
                <label class="form-label">Enter product name</label>
                <input class="form-control" type="text" value={ItemName} placeholder="enter Item Name" onChange={(e)=>setItemName(e.target.value)} id="formFile" />
              </div>
          
              <div class="mb-3">
                <label for="formFileDisabled" class="form-label">Enter the price of the item</label>
                <input class="form-control" type="text" value={Price} placeholder="enter Item Price" onChange={(e)=>setPrice(e.target.value)} id="formFileDisabled" required />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description about the item</label>
                <textarea class="form-control" type="text" value={Discription} placeholder="enter Item Discription" onChange={(e)=>setDisccription(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Upload item picture</label>
                <input class="form-control" type="file" onChange={fileChangeHandler}  id="formFileMultiple" multiple />
              </div>
              <div class="text-center">

                  <button class="btn btn-outline-primary">Add Item</button>
              </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default DemoTest2;