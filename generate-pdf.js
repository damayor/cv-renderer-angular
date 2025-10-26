const puppeteer = require('puppeteer');
const { exec } = require('child_process');


(async () => {
  const args = process.argv.slice(2); // skip 'node' and 'generate.js'
  console.log('All args:', args);

  //Roles 
  // SF: Senior Frontend Engineer, 
  // VC: Game deveeloper,
  // SR: SRE, 
  // SE: Senior (C++)

  const role = args[0]; // 'seniorsoftware';
  const acronym = args[1]; //toDo creese un map...
  // const lang = args[2] ?? 'EN';
  const envir = args[2] ?? 'dev';

  console.log('role argument:', role);
  // console.log('lang uage argument:', lang);



  const url = 'http://localhost:4200/?occupation='+role; // Change if your app runs on a different port

  const namepdf = 'DavidMayorga'+acronym;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();


  
  const now = new Date();
  const pad = n => n.toString().padStart(2, '0');

  //todo Si esta en produccion sobreescriba
  const dateSuffix = envir == 'prd' ? '' : `-${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;

  const pdfFilename = `./buildCVs/CV${pad(now.getMonth() + 1)}-${namepdf}${dateSuffix}.pdf`;

  await page.goto(url, { waitUntil: 'networkidle0' });

  await page.waitForSelector('sidebar');
  await page.waitForSelector('main-panel');

  const height = await page.evaluate(() => document.body.scrollHeight);
  console.log('height to print letter ', height)

  // Define the PDF options (A4 size, landscape/portrait, etc.)
  await page.pdf({
    path: pdfFilename,
    // Se puede pero deja un bottom border
    // format: 'A4',
    width: '210mm',   // A4 width
    height: `${height}px`, // full content height
    printBackground: true
  });

  await browser.close();
  console.log(`PDF generated: ${pdfFilename}`);

    exec(`code ${pdfFilename}`);
})();