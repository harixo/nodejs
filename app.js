const puppeteer = require('puppeteer');

(async()=> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://raddy.co.uk');

    page.setViewport({ width: 300, height: 2000 })
    await page.screenshot({ path: `screenshot${Date.now()}.png` });

    await browser.close();
})();