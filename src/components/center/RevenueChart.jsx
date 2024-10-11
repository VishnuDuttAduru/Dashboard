import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const RevenueChart = ({ isDarkMode }) => {
    const options = {
        chart: {
            type: 'spline',
            backgroundColor: 'transparent',
            width: 600,
            height: 250
        },
        title: {
            text: '',
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        },
        yAxis: {
            title: {
                text: 'Value (Millions)',
            },
            max: 30,
        },
        series: [
            {
                name: 'Projected',
                data: [10, 12, 18, 20, 23, 28],
                color: 'rgba(0, 102, 204, 1)',
                dashStyle: 'Solid',
            },
            {
                name: 'Actual',
                data: [8, 10, 15, 19, 25, 27],
                color: 'rgba(0, 102, 204, 0.6)',
                dashStyle: 'Solid',
                zones: [
                    {
                        value: 3,
                        dashStyle: 'Solid',
                    },
                    {
                        value: 4,
                        dashStyle: 'Dot',
                    },
                ],
            },
        ],
        plotOptions: {
            spline: {
                marker: {
                    enabled: false,
                },
            },
        },
        tooltip: {
            valueSuffix: ' millions',
        },
        credits: {
            enabled: false,
        }
    };
    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default RevenueChart
