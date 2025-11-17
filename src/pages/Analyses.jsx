import React from 'react';
import Graph from '../components/Graph';

const sampleData = {
  labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
  datasets: [{ label: 'Engajamento', data: [12, 19, 3, 5, 2, 3, 9], borderColor: '#7047EB', backgroundColor: 'rgba(112,71,235,0.2)' }]
};

const Analyses = () => (
  <div style={{ padding: '20px' }}>
    <h2>Análises Semanais</h2>
    <Graph data={sampleData} />
  </div>
);

export default Analyses;
