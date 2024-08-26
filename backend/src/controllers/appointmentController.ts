import { Request, Response } from 'express';
import { getAllAppointments, createAppointment, Appointment } from '../models/appointmentModel';

export const getAppointments = async (req: Request, res: Response) => {
  const appointments = await getAllAppointments();
  res.json(appointments);
};

export const addAppointment = async (req: Request, res: Response) => {
  const newAppointment: Appointment = req.body;
  await createAppointment(newAppointment);
  res.status(201).send('Consulta criada com sucesso');
};