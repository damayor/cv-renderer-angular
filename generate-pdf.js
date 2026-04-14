const puppeteer = require('puppeteer');
const { exec } = require('child_process');


(async () => {
  const args = process.argv.slice(2);
  console.log('All args:', args);

  const acronyms = {
    'frontend': 'FE',
    'frontend3d': 'F3D',
    'fullstackengineer': 'FSE',
    'seniorfrontend': 'SF',
    'juniorfrontend': 'JF',
    'seniorsoftware': 'SE',
    'graphicsEngineer':'VC',
    'sre':'DO',
    'supportAssistant': 'SA',
    'itSupport':'ITS'
  };
  
  const role = args[0]; 
  const lang = args[1] ?? 'EN';
  const envir = args[2] ?? 'dev';
  const inEU = args[3] ?? '';

  console.log('role argument:', role);
  console.log('language argument:', lang);

  const url = `http://localhost:4200/?lang=${lang}&occupation=${role}` ;

  const prefix = lang == 'EN'
    ? 'CV' 
    : lang == 'DE' ? 'LL' : 'HV'
  const allEU = inEU == 'EU' ? 'E': '' 
  const namepdf = 'DavidMayorga'+acronyms[role];

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const now = new Date();
  const pad = n => n.toString().padStart(2, '0');

  const dateSuffix = envir == 'prd' ? '' : `-${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;

  const pdfFilename = `${prefix}${allEU}${pad(now.getMonth() + 1)}-${namepdf}${dateSuffix}.pdf`;

  await page.goto(url, { waitUntil: 'networkidle0' });

  await page.waitForSelector('user-header');
  await page.waitForSelector('sidebar');
  await page.waitForSelector('main-panel');

  await page.evaluate((name) => {
    document.title = name;
  }, pdfFilename);

  await page.pdf({
    path: `./buildCVs/${pdfFilename}`,
    width: '210mm', 
    format: 'A4',
    printBackground: true
  });

  await browser.close();
  console.log(`PDF generated: ${pdfFilename}`);

    exec(`code ./buildCVs/${pdfFilename}`);
})();