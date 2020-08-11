import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderDayAvailabilityService from './ListProviderDayAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderDayAvailability: ListProviderDayAvailabilityService;

describe('ListProviderDayAvailabilityService', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderDayAvailability = new ListProviderDayAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the day availabitily from providers', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 11, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 11, 10, 0, 0),
    });

    const availabitily = await listProviderDayAvailability.execute({
      provider_id: 'user',
      day: 11,
      year: 2020,
      month: 5,
    });

    expect(availabitily).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 10, available: false },
        { hour: 12, available: true },
        { hour: 13, available: true },
      ]),
    );
  });
});
