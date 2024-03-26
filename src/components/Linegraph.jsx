import React from "react";
import Chart from "react-apexcharts";

const Linegraph = (props) => {
  const options = {
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
    series: [
      {
        name: "sales",
        data: props.data,
      },
    ],
    xaxis: {
      categories: props.cate,
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
          color:"#FFFFFF",
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
    
  };
  return (
    <>
      <Chart
        options={options}
        series={options.series}
        type="line"
        width={200}
        height={150}
      />
    </>
  );
};

export default Linegraph;
