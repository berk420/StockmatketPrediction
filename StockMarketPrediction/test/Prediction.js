const {By, Builder } = require("selenium-webdriver");
require("chromedriver"); 
const { describe, it } = require('mocha');

describe("Stockmarket", function () {
    //const browsers = ["chrome", "firefox", "MicrosoftEdge"];
    //const stocks = ["TUPRS","KCHOL","TKNSA","REEDR"];
    const stocks = ["TUPRS"];


    describe("prediction", function() {
        stocks.forEach(stock =>{
            
                let driver =  new Builder().forBrowser('chrome').build();
                it("Analyz of"+stock, async function(){
                    try {
                        await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 
                
                        await new Promise(resolve => setTimeout(resolve, 1000));


                        await driver.quit();
                    }
                    catch(err) {
                        console.log(err);
                        driver.quit();
                    }
                
            })
            
        })
    })
})

