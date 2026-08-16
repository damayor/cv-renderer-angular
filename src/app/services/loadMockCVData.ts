import { CvData } from '../interfaces/CVData';

import {
  frontend,
  seniorfrontend,
  frontend3d,
  graphicsEngineer as graphicsEngineer,
  seniorSoftware as seniorsoftware,
  fullStackEngineer as fullstackengineer,
  sre,
  contentcreator,
  supportAssistant,
  itSupport,
  juniorfrontend,
} from '../../assets/cv-data/en-EN.mock';
import {
  frontend as frontendDE,
  frontend3d as frontend3dDE,
  seniorfrontend as seniorfrontendDE,
  fullStackIngenieur,
  graphicsEntwickler,
  seniorSoftware as seniorSoftwareDE,
  sre as sreDE,
  juniorfrontend as juniorfrontendDE,
  salesAssistant,
  itSupport as itSupportDE,
  qaDataAnnotation as qaDataAnnotationDE,
} from '../../assets/cv-data/de-DE.mock';
import {
  frontend as frontendES,
  frontend3d as frontend3dES,
  seniorfrontend as seniorfrontendES,
  ingenieroFullStack,
  seniorSoftware as seniorSoftwareES,
  sre as sreES,
  juniorfrontend as juniorfrontendES,
} from '../../assets/cv-data/es-ES.mock';

const files: any = {
  EN: {
    frontend,
    seniorfrontend,
    frontend3d,
    fullstackengineer,
    graphicsEngineer,
    seniorsoftware,
    sre,
    contentcreator,
    supportAssistant,
    itSupport,
    juniorfrontend,
  },
  DE: {
    frontend: frontendDE,
    frontend3d: frontend3dDE,
    seniorfrontend: seniorfrontendDE,
    graphicsEngineer: graphicsEntwickler,
    fullstackengineer: fullStackIngenieur,
    seniorsoftware: seniorSoftwareDE,
    sre: sreDE,
    juniorfrontend: juniorfrontendDE,
    salesAssistant,
    itSupport: itSupportDE,
    qaDataAnnotation: qaDataAnnotationDE,
  },
  ES: {
    frontend: frontendES,
    seniorfrontend: seniorfrontendES,
    frontend3d: frontend3dES,
    fullstackengineer: ingenieroFullStack,
    seniorsoftware: seniorSoftwareES,
    sre: sreES,
    juniorfrontend: juniorfrontendES,
  },
};

export function loadMockData(lang: string = 'EN', mockField?: string) {
  const cvFile = mockField ?? 'frontend';

  const data = files[lang][cvFile] as CvData;
  return data;
}
