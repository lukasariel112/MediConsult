import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentList from '../components/AppointmentList';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Sistema de Marcação de Consultas</h1>
      <AppointmentForm />
      <AppointmentList />
    </div>
  );
};

export default HomePage;