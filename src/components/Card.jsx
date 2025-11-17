import React from 'react';

const Card = ({ title, content, image }) => (
  <div style={{ background: '#FFFFFF', borderRadius: '12px', padding: '15px', marginBottom: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
    {image && <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />}
    <h3 style={{ color: '#1C1C1C' }}>{title}</h3>
    <p style={{ color: '#1C1C1C' }}>{content}</p>
  </div>
);

export default Card;
