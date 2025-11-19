
// ToDo Improve as an Angular service

import { CvData } from "../interfaces/CVData";

import { frontend,seniorfrontend, gameDeveloper as gamedeveloper, seniorSoftware as seniorsoftware, fullStackEngineer as fullstackengineer, sre, contentcreator, supportAssistant } from '../../assets/cv-data/en-EN.mock';
import { frontend as frontendDE, seniorfrontend as seniorfrontendDE, fullStackIngenieur , gameEntwickler, seniorSoftware as seniorSoftwareDE, sre as sreDE } from '../../assets/cv-data/de-DE.mock';

const files: any = {
  'EN':{ frontend, seniorfrontend, fullstackengineer, gamedeveloper, seniorsoftware, sre, contentcreator, supportAssistant},
  'DE':{ frontend: frontendDE, seniorfrontend : seniorfrontendDE,  gamedeveloper: gameEntwickler, fullstackengineer: fullStackIngenieur,seniorsoftware: seniorSoftwareDE, sre:sreDE}
};


export function loadMockData(lang: string = 'EN', mockField? : string) {

  const cvFile = mockField ?? 'frontend'

  const data = files[lang][cvFile] as CvData;
  return data;
}