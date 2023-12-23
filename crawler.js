const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const launchBrowser = async () => {
  const browser = await puppeteer.launch({headless: 'new'})
  const page = await browser.newPage()
  return { browser, page }
}

const getList = async (page) => {
  const url = 'https://www.voeazul.com.br/br/pt/home/selecao-voo?c[0].ds=CGB&c[0].std=05/09/2024&c[0].as=CNF&c[1].ds=CNF&c[1].std=05/14/2024&c[1].as=CGB&p[0].t=ADT&p[0].c=1&p[0].cp=false&f.dl=3&f.dr=3&cc=PTS'
  // const url = 'https://www.voeazul.com.br'
  console.log('[ 🤖 ] navigating to voeAzul')
  // await page.goto('https://www.google.com');
  await page.goto(url,{timeout: 0})
  console.log('[ 🤖 ] waiting for page content')
  await page.screenshot({path: './t1.png'});
  // await page.waitForSelector('.card-list')
}

module.exports = {
  launchBrowser,
  getList
}