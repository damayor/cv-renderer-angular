

import { CvData } from "../interfaces/CVData";

import { frontend,seniorfrontend,frontend3d, graphicsEngineer as graphicsEngineer, seniorSoftware as seniorsoftware, fullStackEngineer as fullstackengineer, sre, contentcreator, supportAssistant, itSupport } from '../../assets/cv-data/en-EN.mock';
import { frontend as frontendDE,frontend3d as frontend3dDE, seniorfrontend as seniorfrontendDE, fullStackIngenieur , gameEntwickler, seniorSoftware as seniorSoftwareDE, sre as sreDE } from '../../assets/cv-data/de-DE.mock';
import { frontend as frontendES, seniorfrontend as seniorfrontendES, ingenieroFullStack , seniorSoftware as seniorSoftwareES, sre as sreES } from '../../assets/cv-data/es-CO.mock';

const files: any = {
  'EN':{ frontend, seniorfrontend, frontend3d, fullstackengineer, graphicsEngineer, seniorsoftware, sre, contentcreator, supportAssistant, itSupport},
  'DE':{ frontend: frontendDE, frontend3d:frontend3dDE, seniorfrontend : seniorfrontendDE,  graphicsEngineer: gameEntwickler, fullstackengineer: fullStackIngenieur,seniorsoftware: seniorSoftwareDE, sre:sreDE},
  'ES':{ frontend: frontendES, seniorfrontend : seniorfrontendES,       fullstackengineer: ingenieroFullStack, seniorsoftware: seniorSoftwareES, sre:sreES}

};


export function loadMockData(lang: string = 'EN', mockField? : string) {

  const cvFile = mockField ?? 'frontend'

  const data = files[lang][cvFile] as CvData;
  return data;
}