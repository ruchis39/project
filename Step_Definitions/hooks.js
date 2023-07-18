var {setDefaultTimeout} = require('cucumber');
    
setDefaultTimeout(60 * 1000);


After(async function(){

  

  let hook = this;
  
  return browser.takeScreenshot()
  
    .then(function(screenshot){
  
      const decodedImg = new Buffer (screenshot.replace(/^data:image\/png;base64,/, ''), 'base64')
  
      hook.attach(decodedImg,'image/png')
  
    })
  })