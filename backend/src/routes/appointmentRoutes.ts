import express from 'express';
import { getAppointments, addAppointment } from '../controllers/appointmentController';

const router = express.Router();

router.get('/appointments', getAppointments);
router.post('/appointments', addAppointment);

export default router;