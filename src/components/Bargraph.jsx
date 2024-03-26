import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Bargraph = (props) => {
  const text = props.text;
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
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: {
        fontSize: "8px",
      },
    },
    xaxis: {
      categories: props.cate,
      title: {
        text: text,
        style: {
          fontSize: "14px",
          color: "#FFFFFF",
        },
      },
      labels: {
        style: {
          fontSize: "10px",
          colors: "#FFFFFF",
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
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
  };
  const series = [
    {
      name: props.text,
      data: props.data,
    },
  ];

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="bar"
        width={200}
        height={150}
      />
    </>
  );
};

export default Bargraph;
