const puppeteer = require('puppeteer');
const { exec } = require('child_process');


(async () => {
  const url = 'http://localhost:4200'; // Change if your app runs on a different port

  //ToDo to param, url params
  const namepdf = 'DavidMayorga';

  const browser = await puppeteer.launch();
  const page = await browser.newPage();


  
  const now = new Date();
  const pad = n => n.toString().padStart(2, '0');
  const dateSuffix = `${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;
  const pdfFilename = `./buildCVs/CV-${namepdf}-${dateSuffix}.pdf`;

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