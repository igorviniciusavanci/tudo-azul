const {getList,launchBrowser} = require('./crawler');

async function init() {
  const a = await launchBrowser();
  await getList(a.page);
  await a.page.screenshot({path: './screenshot.png'});
  
}

init();