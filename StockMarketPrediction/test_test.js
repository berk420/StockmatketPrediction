const {By, Builder,sendKeys,Key, WebElement,until } = require("selenium-webdriver");
//require("chromedriver"); 
const { describe, it } = require('mocha');
const assert = require("assert");
const { debug, Console } = require("console");
const { waitForDebugger } = require("inspector");
const {
  toplam_oazkayank,
  Dönem_Net_Kar_Zararı,
  Toplam_Kısa_Vadeli_Yükümlülükler,
  Toplam_Uzun_Vadeli_Yükümlülükler,
  Nakit_ve_Nakit_Benzerleri,
  ticari_alacaklar,
  toplam_oazkayank_all,

  NakitveNakitBenzerleri_all} 
  = require("./test/financial_statement_values.js");


async function testing(){

  let driver = await new Builder().forBrowser('chrome').build();
  stock="TUPRS"
  await driver.get(`https://fintables.com/sirketler/TUPRS/finansal-tablolar/bilanco`);



  let NakitveNakitBenzerleri_allss=await NakitveNakitBenzerleri_all(driver,stock);

  console.log(NakitveNakitBenzerleri_allss);
  for (let eleman of NakitveNakitBenzerleri_allss) {
    console.log(eleman);
  }

  NakitveNakitBenzerleri_allss.forEach((satir) => {
    let satirYazisi = "";
    satir.forEach((eleman) => {
      satirYazisi += eleman + " ";
    });
    console.log(satirYazisi);
  });


}

testing();