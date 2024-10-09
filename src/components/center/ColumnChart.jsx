import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ColumnChart = () => {
    const options = {
        chart: {
            type: 'column',
            backgroundColor: 'transparent',
            height: 200
        },
        legend: {
            enabled: false
        },
        title: {
            text: '',
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            title: {
                text: null,
            },
        },
        yAxis: {
            min: 0,
            max: 30_000_000,
            title: {
                text: null,
            },
            labels: {
                formatter: function () {
                    return this.value / 1_000_000 + 'M';
                },
            },
        },
        tooltip: {
            shared: true,
            valueSuffix: 'M',
            formatter: function () {
                return `<strong>${this.x}</strong><br/>Projected: ${this.points[0].y / 1_000_000}M<br/>Actual: ${this.points[1].y / 1_000_000}M`;
            },
        },
        plotOptions: {
            column: {
                stacking: 'normal',
            },
        },
        series: [
            {
                name: 'Projected',
                data: [10_000_000, 15_000_000, 20_000_000, 25_000_000, 15_000_000, 20_000_000],
                color: 'rgba(0, 123, 255, 1)', 
            },
            {
                name: 'Actual',
                data: [8_000_000, 12_000_000, 22_000_000, 20_000_000, 17_000_000, 24_000_000],
                color: 'rgba(135, 206, 250, 1)',
            },
        ],
    };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ColumnChart;
