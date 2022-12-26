import React,{useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,ArcElement
} from 'chart.js';
import faker from 'faker'
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      margin:"100px"
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const barData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const pieData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const App = () => {

  const [heads,setHeads] = useState(["S.No","First","Last","Roll"])
  const [data,setData] = useState([
    {id:1,fname:"Ganesh",lname:"Reddy",reg:546},
    {id:2,fname:"Haneef",lname:"Shaik",reg:558},
    {id:3,fname:"Madhu",lname:"Varma",reg:504},
    {id:4,fname:"Madhu",lname:"Kiran",reg:564},
    {id:5,fname:"Pavaneswar",lname:"Kothalanka",reg:534}
  ])

  return (
    <div className='container-fluid py-3 px-5' style={{height:"auto",background:"rgba(0,0,0,0.07)"}}>
      <div className='row align-items-center d-flex justify-content-center bg-light m-0 p-0'>
        <div className='col-7 m-0 p-0'>
          <Bar options={options} data={barData}  />
        </div>
        <div className='col-5 text-center m-0 p-0 ' style={{maxHeight:"500px",minHeight:"500px",paddingLeft:"100px"}}>
          <Pie data={pieData} />
        </div>
      </div>
      <div className='bg-light m-0 mt-5 p-3 ' style={{width:"100%"}}>
        <table class="table table-sm p-x-1 m-0">
          <thead>
            <tr>
              {heads.map((items)=>(
                <>
                  <th scope="col">{items}</th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>

            {data.map((items)=>(
              <tr>
                <td>{items.id}</td>
                <td>{items.fname}</td>
                <td>{items.lname}</td>
                <td>{items.reg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default App;