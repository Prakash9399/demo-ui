import React from "react";
import Chart from "react-apexcharts";

const AreaSingle = (props) => {
  const chartData = {
    series: [
      {
        name: props.text,
        data: props.Data,
      },
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
}
  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        width={200}
        height={150}
      />
    </div>
  );
};

export default AreaSingle;
