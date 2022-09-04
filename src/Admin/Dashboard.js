/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable import/first */
  
  import React, { useState,useEffect } from 'react';
  import { useNavigate } from 'react-router-dom';
 
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
import { Breadcrumb, Layout, Menu } from 'antd';
import AddItems from '../components/AddItems';  
import Orders from '../components/Orders';
import MyItems from './MyItems';
import { Ip } from '../constants/Ip';
import AdminProfile from './AdminProfile';
  
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
 
  const  GetData = async ()=>{
     const token = await  localStorage.getItem("token")
     console.log("Dashboard = "+token)
   fetch(Ip+'/GetAdmin',{
   headers:new Headers({
     Authorization:"Bearer "+token
   })
   }).then(res=>res.json())
   
   .then(data=>{ 
   
      
     setData(data);
     
          console.log(data);
    
   }
   )
  }
useEffect(()=>{
 
  GetData();

},[])
const [Ordertype,setOrdertype] = useState("Pending");
  return (
    <> 
     {UserData.Role==="Admin"?

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
          copyright ©2023 Created by TRIGOVEX
        </Footer>
      </Layout>
    </Layout>
    
     :
      <>
      {UserData.Role==="SuperAdmin"?<h1>k</h1>: <div>

      <h1>Admin error:- your are not an admin and you don't have any credential in this website . Please contact our Admins to get Access (eswarpavan5237@gmail.com)</h1>
      <button onClick={logout}>go back</button>
      </div>

            }
      </>


}  

    
    </>
  );

     
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
      <div
      className="site-layout-background"
      style={{
        padding: 24,
        minHeight: 360,
      }}
    >
       <div>
       <h1>Dashboard</h1>
       
        
      </div>
    </div>
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
      <Orders id={props.data.AdminId} Ordertype={props.Ordertype}/>
    )
  }
  if(props.page==="MyItems")
  {
    return(
      <MyItems id={props.data.AdminId}/>
    )
  }
  }
  
  export default Dashboard;

  /*<div>
          <h1>{props.Role.Role}</h1>
          <button onClick={logout}>Logout</button> 
          
        </div>*/