import { ICreateDiscriminationDTO } from '@modules/discriminations/dtos/ICreateDiscriminationDTO';
import { ICreateMentalHealthDTO } from '@modules/discriminations/dtos/ICreateMentalHealthDTO';
import { ICreateViolenceDTO } from '@modules/discriminations/dtos/ICreateViolenceDTO';
import ICreateAddressDTO from '@modules/households/dtos/ICreateAddressDTO';
import ICreateHouseholdDTO from '@modules/households/dtos/ICreateHouseholdDTO';
import ICreatePersonDTO from '@modules/persons/dtos/ICreatePersonDTO';

import ICreateInterviewDTO from './ICreateInterviewDTO';

export interface IHandleOfflineInterviewDTO {
  person: ICreatePersonDTO;
  household: ICreateHouseholdDTO;
  address: ICreateAddressDTO;
  discrimination?: ICreateDiscriminationDTO;
  violence?: ICreateViolenceDTO;
  mental_health?: ICreateMentalHealthDTO;
  interview: ICreateInterviewDTO;
}
