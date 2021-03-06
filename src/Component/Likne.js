import React from "react";
import { fetchData } from "./Api";
// import "./GolobalData.css";
import {Pie, HorizontalBar } from "react-chartjs-2";
const resource = fetchData();

function Charts() {
  const global = resource.global.read();
  const {
    active,
    cases,
    deaths,
    recovered,

  } = global;

    // todayCases,
    // todayDeaths,
    // todayRecovered,
    // updated,
// critical

  const data = {
    labels: ["Total Cases", "Active", "Recovered", "Deaths"],
    datasets: [
      {
        label: 'HorizontalBar Chart',
        data: [cases, active, recovered, deaths],
        borderColor: ["#faa422", "#1c7ad1", "#026e26", "#e73d1f"],
        backgroundColor: ["#faa422", "#1c7ad1", "#026e26", "#e73d1f"],
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
      }, 
    ],
  };


  const options = {
  
    legend: false,
    tooltip: true,
    plugins: {
      datalabels: {
        align: "end",
        anchor: "end",
        backgroundColor: '#1a1919',
        borderColor: null,
        borderRadius: 2,
        borderWidth: 1,
        color: "white",
        font: {
          size: 10,
          weight: 600,
        },
        offset: -10,
        padding: 0,
        formatter: 5,
      },
    },
  };


  const HBar = {
    labels: ["Total Cases", "Active", "Recovered", "Deaths"],
    datasets: [
      {
        label: 'HorizontalBar Chart',
        data: [cases, active, recovered, deaths],
        borderColor: ["#faa422", "#1c7ad1", "#026e26", "#e73d1f"],
        backgroundColor: ["#faa422", "#1c7ad1", "#026e26", "#e73d1f"],
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
      },
    ],
  };


  const pieoptions = {
    title: {
      display: true,
      fontSize: 24,
      fontColor: "White",
            text: 'Global Data Chart',
    },
    legend: false,
    plugins: {
      datalabels: {
        align: "end",
        anchor: "end",
        backgroundColor: '#1a1919',
        borderColor: null,
        borderRadius: 2,
        borderWidth: 1,
        color: "white",
        font: {
          size: 11,
          weight: 800,
        },
        offset: -35,
        padding: 2,
        formatter: 15,
      },
    },
  };





  return (
    <div className="global">
      <Pie data={data} 
      options={pieoptions}
      width={50}
      height={10}   
      />
      <HorizontalBar data={HBar}
       options={options}
       width={70}
       height={16}
        />
    </div>
  );
}




export default Charts;