import Appointment from '../models/Appointment';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppoinmentsRepository';
import { startOfHour } from 'date-fns';
import AppError from '../errors/AppError';
// O Service não tem acesso ao Request e Response
interface Request {
  provider_id: string;
  date: Date;
}

export default class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw AppError('This appointment is already booked');
    }

    const appointment: Appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}
