import { props } from 'bluebird';
import { defaultMinSockets } from 'forever-agent';
import React from 'react';

import ChartBar from './ChartBar';
import './ChartBar.css';

const Chart = () => {
    return <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value}/>)
    </div>
}

export default Chart;