import React, { useState } from 'react';

const AppointmentForm: React.FC = () => {
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const appointment = { patientName, doctorName, date, time };

    await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointment)
    });

    alert('Consulta marcada com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome do Paciente" value={patientName} onChange={e => setPatientName(e.target.value)} required />
      <input type="text" placeholder="Nome do Médico" value={doctorName} onChange={e => setDoctorName(e.target.value)} required />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
      <button type="submit">Marcar Consulta</button>
    </form>
  );
};

export default AppointmentForm;