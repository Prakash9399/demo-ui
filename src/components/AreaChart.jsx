import React,{useState,useEffect} from 'react'
import Chart from 'react-apexcharts'
const AreaChart = (props) => {
  const chartData = {
    series: [
      {
        name: "new",
        data: props.series1
      },
      {
        name: "installed",
        data: props.series2
      },
      {
        name: 'active',
        data: props.series3
      },
      {
        name: 'total',
        data: props.series4
      }
    ],
    options: {  
      xaxis:{
        categories:props.cate,
        labels: {
          style: {
            fontSize: "10px",
            colors: "#FFFFFF",
          },
        },
        title: {
          text: props.text,
          style: {
            fontSize: "14px",
            color: "#FFFFFF",
            fontWeight: 'normal',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "10px",
            colors: "#FFFFFF",
          },
        },
      },
   
      stroke: {
        curve: 'smooth'
      },
      grid: {
        show: false,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
    }
  };
  return (
    <div>
      <Chart options={chartData.options} series={chartData.series} type="area" /> 
    </div>
  );
};
    

export default AreaChart