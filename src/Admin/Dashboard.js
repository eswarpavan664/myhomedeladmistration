/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable import/first */
  
  import React, { useState,useEffect } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { Player, Controls } from '@lottiefiles/react-lottie-player';

  import Lodi from '../lotties/55385-worried.json'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  TableOutlined,
  AppstoreAddOutlined,
  ShoppingCartOutlined,
  FileTextOutlined,
} from '@ant-design/icons';

import {CChart } from '@coreui/react-chartjs';
import { Breadcrumb, Layout, Menu } from 'antd';
import AddItems from '../components/AddItems';  
import Orders from '../components/Orders';
import MyItems from './MyItems';
import { Ip } from '../constants/Ip';
import AdminProfile from './AdminProfile';
import AddAdmins from '../components/AddAdmins';
import Users from '../components/Users';
import Loader from '../components/Loader';
  
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const { SubMenu } = Menu;

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

  
function Dashboard(){
  const [collapsed, setCollapsed] = useState(false);
  const [screen,setscreen] = useState("DashBoard");


  let navigate = useNavigate();
  const  logout =()=>{
    localStorage.removeItem("token") 
     navigate('/Login')
   
 }

  const [UserData,setData] = useState("")
 console.log("hhhg")
  const  GetData = async ()=>{
     const token = await  localStorage.getItem("token")
     console.log("Dashboard = "+token)
   fetch(Ip+'/GetAdmin',{
   headers:new Headers({
     Authorization:"Bearer "+token,
     'Content-Type': 'application/json',
     'Accept': 'application/json'
   })
   }).then(res=>res.json())
   
   .then(data=>{ 
   
      
     setData(data);
     
          console.log("admin data  = = ",data);
    
   }
   )
  }
  console.log("hhvdshsavd")
  
useEffect(()=>{
 
  GetData();

},[])
const [Ordertype,setOrdertype] = useState("Pending");
if(UserData){
  return (
    <> 
    <div className='d-block d-md-none'>
       
      <Player
                    autoplay
                    loop
                    src={Lodi}
                    style={{ height: '300px', width: '300px' }}
                >
                   
                </Player>
                <h3>Super Admin Panel and Admin Panel only displayed on Desktop for Better Experience Try To Use Desktop Mode ): </h3>
    </div>
     {UserData.Role==="Admin"?
<div className="d-md-block d-none"> 
     <Layout
      style={{
        minHeight: '100vh',
      }}
       
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
         
          <Menu.Item   onClick={()=>setscreen("DashBoard")}   >
               
            </Menu.Item>
            <Menu.Item   onClick={()=>setscreen("DashBoard")}   >
               
               </Menu.Item>
            <Menu.Item key="1" onClick={()=>setscreen("DashBoard")} icon={ <PieChartOutlined />}>
                DashBoard
            </Menu.Item>

            <Menu.Item key="2" onClick={()=>setscreen("Profile")} icon={ <UserOutlined />}>
                    Profile
            </Menu.Item>

            <Menu.Item key="5" onClick={()=>setscreen("MyItems")} icon={ <TableOutlined />}>
                     My Items
            </Menu.Item>

            <Menu.Item key="3" onClick={()=>setscreen("Add Items")} icon={<AppstoreAddOutlined />}>
                    Add Items
            </Menu.Item>
 
            <SubMenu key="sub2" icon={<FileTextOutlined />} title="Orders" onClick={()=>setscreen("Orders")} icon={<ShoppingCartOutlined />}>
           
          
            <Menu.Item key="4" onClick={()=>setOrdertype("Pending")}  >
            Pending
            </Menu.Item>
            
            <Menu.Item key="6" onClick={()=>setOrdertype("Delivered")}  >
            Delivered
            </Menu.Item>
            <Menu.Item key="7" onClick={()=>setOrdertype("Accepted")}  >
            Accepted
            </Menu.Item>
            <Menu.Item key="8" onClick={()=>setOrdertype("Declain")} >
            Declined
            </Menu.Item>

           </SubMenu>
           
          </Menu>

        </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          
          <ConTent page={screen} data={UserData} Ordertype={Ordertype}/>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          © Copyright 2023 Trigovex Technologies Pvt. Ltd. All Rights Reserved
        </Footer>
      </Layout>
    </Layout>
    </div>
     :
      <>
      {UserData.Role==="SuperAdmin"?
      
      
      <div className="d-md-block d-none"> 
      <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
         
          <Menu.Item   onClick={()=>setscreen("DashBoard")}   >
               
            </Menu.Item>
            <Menu.Item   onClick={()=>setscreen("DashBoard")}   >
               
               </Menu.Item>
            <Menu.Item key="1" onClick={()=>setscreen("DashBoard")} icon={ <PieChartOutlined />}>
                DashBoard
            </Menu.Item>

            <Menu.Item key="2" onClick={()=>setscreen("Profile")} icon={ <UserOutlined />}>
                    Profile
            </Menu.Item>

            <Menu.Item key="5" onClick={()=>setscreen("Add Admins")} icon={ <TableOutlined />}>
                      Add Admins
            </Menu.Item>

            
 
            <SubMenu key="sub2" icon={<FileTextOutlined />} title="Users" onClick={()=>setscreen("Users")} icon={<ShoppingCartOutlined />}>
           
          
            <Menu.Item key="4" onClick={()=>setOrdertype("Admins")}  >
            Admins
            </Menu.Item>
            
            <Menu.Item key="6" onClick={()=>setOrdertype("Customers")}  >
            Customers
            </Menu.Item>
           
           </SubMenu>

           <SubMenu key="sub3" icon={<FileTextOutlined />} title="Orders" onClick={()=>setscreen("Orders")} icon={<ShoppingCartOutlined />}>
           
          
           <Menu.Item key="10" onClick={()=>setOrdertype("Pending")}  >
           Pending
           </Menu.Item>
           
           <Menu.Item key="11" onClick={()=>setOrdertype("Delivered")}  >
           Delivered
           </Menu.Item>
           <Menu.Item key="12" onClick={()=>setOrdertype("Accepted")}  >
           Accepted
           </Menu.Item>
           <Menu.Item key="13" onClick={()=>setOrdertype("Declain")} >
           Declined
           </Menu.Item>

          </SubMenu>
           
          </Menu>

        </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          
          <ConTent page={screen} data={UserData} Ordertype={Ordertype}/>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          © Copyright 2023 Trigovex Technologies Pvt. Ltd. All Rights Reserved
        </Footer>
      </Layout>
    </Layout>
      
      </div>
      
      : <div>

      <h1>Admin error:- your are not an admin and you don't have any credential in this website . Please contact our Admins to get Access (eswarpavan5237@gmail.com)</h1>
      <button onClick={logout}>go back</button>
      </div>

            }
      </>


      }  

    
    </>
  );

}
else{
  return(  <Loader/>)
 
}
  

     
}  
    


function ConTent(props)
{
    
  let navigate = useNavigate();
  const  logout =()=>{
    localStorage.removeItem("token") 
     navigate('/Login')
   
 }

  if(props.page==="DashBoard"){
    return(
     /* <CChart
  type="line" 
  data={{
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(151, 187, 205, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
        data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
      },
    ],
  }}
/>*/
<h1>Dashboard</h1>
    )
  }
  if(props.page==="Profile")
  {
    return(
      <AdminProfile Data={props.data}/>
    )
  }
  if(props.page==="Add Items")
  {
    return(
      
   <AddItems id={props.data.AdminId} ShopName={props.data.ShopName}/>
    )
  }
  if(props.page==="Orders")
  {
    return(
      <Orders id={props.data.AdminId} Ordertype={props.Ordertype} userdata={props.data}/>
    )
  }
  if(props.page==="MyItems")
  {
    return(
      <MyItems id={props.data.AdminId}/>
    )
  }
  if(props.page==="Add Admins"){
    return(
       <AddAdmins id={props.data.AdminId}/>
    )
  }
  if(props.page==="Users" ){
    return(
       <Users page={props.Ordertype} id={props.data.AdminId}/>
    )
  }

  }
  
  export default Dashboard;

  /*<div>
          <h1>{props.Role.Role}</h1>
          <button onClick={logout}>Logout</button> 
          
        </div>*/