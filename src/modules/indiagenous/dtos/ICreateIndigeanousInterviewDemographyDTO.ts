import { BasicAnswers } from '@modules/indiagenous/enums';

export interface IResidents {
  name: string;
  chiefRelation: string;
  age: number;
  gender: string;
  indigeanous: boolean;
  ethnicity: string;
  indigeanousLanguage: string;
  speakPortuguese: boolean;
  readOrWritePortuguese: boolean;
  religion: string;
  goToSchool: boolean;
  schoolGrade: string;
  workStatus: string;
  profession: string;
  roleComunity: string;
}

export interface ICreateIndigeanousInterviewDemographyDTO {
  indigeanousInterviewId: string;
  totalResidents: number;
  residents: IResidents[];
  workedHarvest: BasicAnswers;
}
