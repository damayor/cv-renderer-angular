const puppeteer = require('puppeteer');
const { exec } = require('child_process');


(async () => {
  const args = process.argv.slice(2);
  console.log('All args:', args);

  const acronyms = {
    'frontend': 'SF',
    'seniorsoftware': 'SE',
    'gamedeveloper':'VC',
    'sre':'SR'
  };
  
  const role = args[0]; // 'seniorsoftware';
  const lang = args[1] ?? 'EN';
  const envir = args[2] ?? 'dev';

  console.log('role argument:', role);
  console.log('language argument:', lang);

  const url = `http://localhost:4200/?lang=${lang}&occupation=${role}` ;

  const prefix = lang == 'EN' ? 'CV' : 'LL'
  const namepdf = 'DavidMayorga'+acronyms[role];

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const now = new Date();
  const pad = n => n.toString().padStart(2, '0');

  const dateSuffix = envir == 'prd' ? '' : `-${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;

  const pdfFilename = `./buildCVs/${prefix}${pad(now.getMonth() + 1)}-${namepdf}${dateSuffix}.pdf`;

  await page.goto(url, { waitUntil: 'networkidle0' });

  await page.waitForSelector('sidebar');
  await page.waitForSelector('main-panel');

  const height = await page.evaluate(() => document.body.scrollHeight); //1940
  console.log('height to print letter ', height)

  await page.pdf({
    path: pdfFilename,
    // Se puede pero deja un bottom border
    width: '210mm',   // A4 width
    // format: 'A4',
    height: `${height}px`, // full content height
    printBackground: true
  });

  await browser.close();
  console.log(`PDF generated: ${pdfFilename}`);

    exec(`code ${pdfFilename}`);
})();