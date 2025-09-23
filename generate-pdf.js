const puppeteer = require('puppeteer');
const { exec } = require('child_process');


(async () => {
  const url = 'http://localhost:4200'; // Change if your app runs on a different port

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  
  const now = new Date();
  const pad = n => n.toString().padStart(2, '0');
  const dateSuffix = `${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;
  const pdfFilename = `./build/cv-demo_${dateSuffix}.pdf`;

  await page.goto(url, { waitUntil: 'networkidle0' });

  await page.waitForSelector('sidebar');
  await page.waitForSelector('main-panel');

  // Define the PDF options (A4 size, landscape/portrait, etc.)
  await page.pdf({
    path: pdfFilename,
    format: 'A4',
    printBackground: true
  });

  await browser.close();
  console.log(`PDF generated: ${pdfFilename}`);

    exec(`code ${pdfFilename}`);
})();