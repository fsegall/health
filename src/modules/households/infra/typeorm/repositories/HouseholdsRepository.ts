import { getRepository, Repository } from 'typeorm';

import ICreateHouseholdDTO from '@modules/households/dtos/ICreateHouseholdDTO';
import Household from '@modules/households/infra/typeorm/entities/Household';
import IHouseholdsRepository from '@modules/households/repositories/IHouseholdsRepository';
import AppError from '@shared/errors/AppError';

class HouseholdsRepository implements IHouseholdsRepository {
  private ormRepository: Repository<Household>;

  constructor() {
    this.ormRepository = getRepository(Household);
  }

  public async create(data: ICreateHouseholdDTO): Promise<Household> {
    const household = this.ormRepository.create(data);
    await this.ormRepository.save(household);
    return household;
  }

  public async findById(household_id: string): Promise<Household | undefined> {
    const household = await this.ormRepository.findOne(household_id);
    return household;
  }

  public async list(): Promise<Household[]> {
    const households = this.ormRepository.find();
    return households;
  }

  public async save(household: Household): Promise<Household> {
    return this.ormRepository.save(household);
  }

  public async delete(household_id: string): Promise<void> {
    const household = await this.ormRepository.findOne(household_id);

    if (!household) {
      throw new AppError('There is no Household with this id.');
    }
    await this.ormRepository.remove(household);
  }

  public async findByPerson(person_id: string): Promise<Household | undefined> {
    const household = await this.ormRepository.findOne({
      where: {
        person_id,
      },
    });
    return household;
  }
}

export default HouseholdsRepository;
