import React from 'react';
import avatar from '../assets/avatar.png';

const Profile = () => (
  <div style={{ padding: '20px' }}>
    <h2>Perfil</h2>
    <img src={avatar} alt="Avatar" style={{ width: '100px', borderRadius: '50%' }} />
    <p>Bio do usuário</p>
    <p>Links: site, redes sociais</p>
  </div>
);

export default Profile;
