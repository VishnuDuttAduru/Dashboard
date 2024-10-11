import React from 'react';
import "./RevenueProgress.css";
import ProgressBar from '@ramonak/react-progress-bar';

const CityProgress = ({ city, progress, label }) => (
    <div style={{ display: 'flex', flexDirection: "column", marginBottom: '10px' }}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <span style={{ marginLeft: "0.4em", fontWeight: 400 }}>{city}</span>
            <span style={{ marginRight: "0.4em", fontWeight: 400 }}>{label}</span>
        </div>
        <div style={{ flexGrow: 1, marginRight: '10px' }}>
            <ProgressBar 
                completed={progress} 
                bgColor={"rgba(168, 197, 218, 1)"} 
                height="2px" 
                isLabelVisible={false}
                margin='10px'
                width='90%'
            />
        </div>
    </div>
);

const RevenueProgress = () => {
    const data = [
        { city: 'New York', progress: 90, label: '72K' },
        { city: 'San Francisco', progress: 50, label: '39K' },
        { city: 'Sydney', progress: 30, label: '25K' },
        { city: 'Singapore', progress: 80, label: '61K' },
    ];

    return (
        <div>
            {data.map((item, index) => (
                <CityProgress
                    key={index}
                    city={item.city}
                    progress={item.progress}
                    label={item.label}
                />
            ))}
        </div>
    );
};

export default RevenueProgress;
