import React,{useMemo} from 'react'
 

import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);

function MainDashBoardScreen() {

 
    return(
        <div className='container-fluid col-md-6 mt-5'>
        <div className='row justify-content-evenly'>
            <div className='col-md-6 mt-5'>
            <h2 className='mt-3'>Last 6 Months Analytics</h2>
               <BarChart/>
            </div>
            <div className='col-md-6 mt-5'>
            <h2 className='mt-3'>Last 6 Months Analytics</h2>
                <PieChart/>
            </div>
        </div>
        </div>
    )
}




function PieChart(){
  const colorCode = '#1478BD';
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  return(
    <Chart type='pie'   
        
    height={80}
    width={80}
        data={data}
     
     />
 
  )
}


function BarChart(props){

  
  const colorCode = '#1478BD';
  const state = {
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          fill: true,
          label: null,
          backgroundColor: colorCode,
          borderColor: colorCode,
          borderWidth: 2,
          data: [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 40, 56]
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          beginAtZero: false,
          ticks: {
            color: colorCode,
          }
        },
        y: {
          grid: {
            display: false,
          },
          beginAtZero: true,
          ticks: {
            color: colorCode,
          }
        }
      },
    }
  }

  return(
    <Chart type='bar'   
        
        height={80}
    width={80}
        data={state.data}
        options={state.options}
     />
 
  )
}

export default MainDashBoardScreen;