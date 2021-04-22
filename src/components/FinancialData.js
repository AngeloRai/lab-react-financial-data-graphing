import React from "react";
import { Chart } from "chart.js";
import axios from "axios";


export class FinancialData extends React.Component {
  state = {
    financialData: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "http://api.coindesk.com/v1/bpi/historical/close.json"
      );
      console.log(response);
      this.setState({ financialData: { ...response.data } });
      this.renderGraph()
    } catch (err) {
      console.error(err);
    }
  };

  renderGraph = () => {
    let ctx = document.getElementById("myChart").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [1,2,3],
        datasets: [
          {
            label: "Transactions in the period",
            data: [1,2,3],
            backgroundColor: "#5EBA7D",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    // this.setState({ chart: myChart });
  };


  render() {
    console.log("hello")
    return (
        
      <canvas id="myChart" width="400" height="400"></canvas>
      
    );
  }
}

export default FinancialData;