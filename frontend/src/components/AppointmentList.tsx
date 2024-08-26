import React, { useEffect, useState } from 'react';

interface Appointment {
  id: number;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
}

const AppointmentList: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const response = await fetch('/api/appointments');
      const data = await response.json();
      setAppointments(data);
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Consultas Marcadas</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            {appointment.patientName} - {appointment.doctorName} - {appointment.date} às {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;