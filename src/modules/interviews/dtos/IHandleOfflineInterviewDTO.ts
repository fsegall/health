import ICreateAddressDTO from '@modules/households/dtos/ICreateAddressDTO';
import ICreateHouseholdDTO from '@modules/households/dtos/ICreateHouseholdDTO';
import ICreatePersonDTO from '@modules/persons/dtos/ICreatePersonDTO';

import ICreateInterviewDTO from './ICreateInterviewDTO';

export interface IHandleOfflineInterviewDTO {
  person: ICreatePersonDTO;
  household: ICreateHouseholdDTO;
  address: ICreateAddressDTO;
  interview: ICreateInterviewDTO;
}
