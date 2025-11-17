import React from 'react';
import { Chart, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Graph = ({ data }) => (
  <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '15px', marginBottom: '15px' }}>
    <Line data={data} />
  </div>
);

export default Graph;
