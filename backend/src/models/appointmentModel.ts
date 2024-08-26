import pool from '../config/db';

export interface Appointment {
  id: number;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
}

export const getAllAppointments = async (): Promise<Appointment[]> => {
  const connection = await pool.getConnection();
  const rows = await connection.query('SELECT * FROM appointments');
  connection.release();
  return rows;
};

export const createAppointment = async (appointment: Appointment): Promise<void> => {
  const connection = await pool.getConnection();
  await connection.query('INSERT INTO appointments (patientName, doctorName, date, time) VALUES (?, ?, ?, ?)', 
    [appointment.patientName, appointment.doctorName, appointment.date, appointment.time]);
  connection.release();
};