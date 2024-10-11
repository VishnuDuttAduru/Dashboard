import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const SalesChart = () => {
    const totalValue = 638.72;
    const chartOptions = {
        chart: {
            type: "pie",
            backgroundColor: "transparent",
            width: 250,
            height: 300,
        },
        title: {
            text: "",
        },
        tooltip: {
            pointFormat: "<b>{point.percentage:.1f}%</b>",
        },
        plotOptions: {
            pie: {
                innerSize: "60%",
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false,
                },
                showInLegend: true,
            },
        },
        series: [
            {
                name: "Revenue Sources",
                colorByPoint: true,
                data: [
                    {
                        name: "Direct",
                        y: 300, // Example value, adjust to reflect your data
                        color: "rgba(28, 28, 28, 1)",
                    },
                    {
                        name: "Affiliate",
                        y: 150, // Example value, adjust to reflect your data
                        color: "rgba(186, 237, 189, 1)",
                    },
                    {
                        name: "Sponsored",
                        y: 120, // Example value, adjust to reflect your data
                        color: "rgba(149, 164, 252, 1)",
                    },
                    {
                        name: "E-mail",
                        y: 68.72, // Example value, adjust to reflect your data
                        color: "rgba(177, 227, 255, 1)",
                    },
                ],
            },
        ],
        credits: {
            enabled: false,
        }
    };

    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default SalesChart;
