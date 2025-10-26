
// ToDo Improve as an Angular service

import { CvData } from "../interfaces/CVData";

import { frontend, gameDeveloper as gamedeveloper, seniorSoftware as seniorsoftware, sre, contentcreator } from '../../assets/cv-data/en-EN.mock';
import { frontend as frontendDE, gameEntwickler, seniorSoftware as seniorSoftwareDE, sre as sreDE } from '../../assets/cv-data/de-DE.mock';


const files: any = { frontend, gamedeveloper, seniorsoftware, sre, contentcreator,
  frontendDE, gameEntwickler, seniorSoftwareDE, sreDE,
};


export function loadMockData(mockField? : string) {

  // const cvFile = 'frontendDE' //'seniorSoftware';

  const cvFile = mockField ?? 'sre';

  const data = files[cvFile] as CvData;
  return data;


}