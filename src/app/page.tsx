'use client';

import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { callAI } from "@/lib/function";
import NavBar from "@/components/dashboard";

const ApexChart = () => {
  const [state, setState] = useState({
    series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 4.0, 3.6, 3.2, 2.3, 6.4, 2.8, 3.5, 2.0, 10.1]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      },
      title: {
        text: 'Monthly Sales Report 2024',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    }
  });

  return (
    <div style={{ width: '80%', margin: '7% 20% ' }}>
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default function Home() {
  const handleClick = async () => {
    await callAI("generated a finance report and give some suggestion to improve the finance report.");
  }

  return (
    <div>
      <NavBar />
      <ApexChart />
    </div>
  );
}
