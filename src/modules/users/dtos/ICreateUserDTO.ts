import { Roles } from '../authorization/constants';

export default interface ICreateUserDTO {
  name: string;
  organization_name: string;
  telephone_number: string;
  email: string;
  password: string;
  role: Roles.VISITOR;
}
