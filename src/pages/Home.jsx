import React from 'react';
import Card from '../components/Card';
import avatar from '../assets/avatar.png';

const Home = () => (
  <div style={{ padding: '20px' }}>
    <h2>Feed de Insights e Postagens</h2>
    <Card title="Crescimento Diário" content="+5% seguidores" image={avatar} />
    <Card title="Postagens Recomendadas" content="Veja conteúdos que seu público gosta" />
  </div>
);

export default Home;
