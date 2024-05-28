"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const NotationsChart = ({ className }: { className?: string }) => {
  const inputSizes = Array.from({ length: 10 }, (_, i) => i + 1);
  const O1 = inputSizes.map((n) => 1);
  const OLogN = inputSizes.map((n) => Math.log(n));
  const ON = inputSizes.map((n) => n);
  const ONLogN = inputSizes.map((n) => n * Math.log(n));
  const ON2 = inputSizes.map((n) => n * n);

  const options: ApexOptions = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    grid: {
      show: false,
    },
    stroke: {
      curve: "smooth",
      lineCap: 'round',
      width: 2,
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      labels: {
        show: false, // Hide x-axis labels
      },
    },
    yaxis: {
      labels: {
        show: false, // Hide y-axis labels
      },
    },
  };

  const series = [
    {
      name: "O(1)",
      data: O1,
    },
    {
      name: "O(log n)",
      data: OLogN,
    },
    {
      name: "O(n)",
      data: ON,
    },
    {
      name: "O(n log n)",
      data: ONLogN,
    },
    {
      name: "O(n^2)",
      data: ON2,
    },
  ];

  return (
    <div className="w-full h-full -mx-[15px] -mt-6">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={175}
      />
    </div>
  );
};

export default NotationsChart;
