const puppeteer = require('puppeteer');
const { exec } = require('child_process');


(async () => {
  const rawArgs = process.argv.slice(2);

  // Pull `--suffix <value>` (or `--suffix=<value>`) out before reading the
  // positional args, so the flag can sit anywhere in the command line.
  let customSuffix = '';
  const args = [];
  for (let i = 0; i < rawArgs.length; i++) {
    const arg = rawArgs[i];
    if (arg === '--suffix') {
      customSuffix = rawArgs[++i] ?? '';
    } else if (arg.startsWith('--suffix=')) {
      customSuffix = arg.slice('--suffix='.length);
    } else {
      args.push(arg);
    }
  }

  console.log('All args:', args);

  const role = args[0];
  const lang = args[1] ?? 'EN';

  // Generated from the mock files: `npm run acronyms`
  const acronyms = require('./scripts/acronyms.json')[lang] ?? {};
  const envir = args[2] ?? 'dev';
  const scope = args[3] ?? ''; //EU, ES, CO

  console.log('role argument:', role);
  console.log('language argument:', lang);

  const url = `http://localhost:4200/?lang=${lang}&occupation=${role}` ;

  const prefix = lang == 'EN'
    ? 'CV' 
    : lang == 'DE' ? 'LL' : 'HV'
  const country = scope == 'EU' ? 'E': scope =='ES' ? 'S': scope == 'CO' ? 'A' : ''; 
  const namepdf = 'DavidMayorga'+(acronyms[role] ?? role);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const now = new Date();
  const pad = n => n.toString().padStart(2, '0');

  const dateSuffix = envir == 'prd' ? '' : `-${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;
  // Both --suffix adidas and --suffix=adidas work. 
  const extraSuffix = customSuffix ? `-${customSuffix}` : '';

  const pdfFilename = `${prefix}${country}${pad(now.getMonth() + 1)}-${namepdf}${dateSuffix}${extraSuffix}.pdf`;

  await page.goto(url, { waitUntil: 'networkidle0' });

  await page.waitForSelector('user-header');
  await page.waitForSelector('sidebar');
  await page.waitForSelector('main-panel');
  // const height = await page.evaluate(() => document.body.scrollHeight) + 20; //1930

  await page.evaluate((name) => {
    document.title = name;
  }, pdfFilename);

  await page.pdf({
    path: `./buildCVs/${pdfFilename}`,
    width: '210mm', 
    format: 'A4',
    // height:  `${height}px`, 
    printBackground: true
  });

  await browser.close();
  console.log(`PDF generated: ${pdfFilename}`);

    exec(`code buildCVs/${pdfFilename}`);
})();