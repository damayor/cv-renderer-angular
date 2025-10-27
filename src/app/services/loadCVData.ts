
// ToDo Improve as an Angular service

import { CvData } from "../interfaces/CVData";

import { frontend, gameDeveloper as gamedeveloper, seniorSoftware as seniorsoftware, sre, contentcreator } from '../../assets/cv-data/en-EN.mock';
import { frontend as frontendDE, gameEntwickler, seniorSoftware as seniorSoftwareDE, sre as sreDE } from '../../assets/cv-data/de-DE.mock';


const files: any = {
  'EN':{ frontend, gamedeveloper, seniorsoftware, sre, contentcreator},
  'DE':{ frontend: frontendDE, gamedeveloper: gameEntwickler, seniorsoftware: seniorSoftwareDE, sre:sreDE}
};


export function loadMockData(lang: string = 'EN', mockField? : string) {

  const cvFile = mockField ?? 'frontend'

  const data = files[lang][cvFile] as CvData;
  return data;
}