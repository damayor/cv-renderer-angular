
// ToDo Improve as an Angular service

import { CvData } from "../interfaces/CVData";
import { environment } from '@environments/environment.dev';

import { frontend, gameDeveloper, seniorSoftware, sre } from '../../assets/cv-data/en-EN.mock';
import { frontend as frontendDE, gameEntwickler, seniorSoftware as seniorSoftwareDE, sre as sreDE } from '../../assets/cv-data/de-DE.mock';


const files: any = { frontend, gameDeveloper, seniorSoftware, sre,
  frontendDE, gameEntwickler, seniorSoftwareDE, sreDE,
};


export function loadMockData() {

  // const cvFile = environment.mockDataFile;
  const cvFile = 'frontendDE' //'seniorSoftware';

  const data = files[cvFile] as CvData;
  return data;

  // try {
  //     // const path = `./../../assets/cv-data/frontend.mock`;
  //     console.log("Loaded CV string:", data);
  //     /* @vite-ignore */
  //     //const module = await import(data);
  //     // const module = await import('./../../assets/cv-data/${cvFile}.mock');
  //     // assuming each file exports one const named the same as the file
  //     console.log("Loaded mock data:", module);
  //     return Object.values(module)[0] as CvData;
  //   } catch (err) {
  //     console.error(`Error loading mock data file: ${cvFile}`, err);
  //     return null;
  //   }
  

}