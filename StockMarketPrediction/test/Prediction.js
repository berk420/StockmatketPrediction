const {By, Builder } = require("selenium-webdriver");
require("chromedriver"); 
const { describe, it } = require('mocha');
const addContext = require('mochawesome/addContext');
const {toplam_oazkayank,Dönem_Net_Kar_Zararı,Toplam_Kısa_Vadeli_Yükümlülükler,Toplam_Uzun_Vadeli_Yükümlülükler,Nakit_ve_Nakit_Benzerleri,ticari_alacaklar} = require("./financial_statement_values.js");



const stocks_petrol = ["TUPRS"];
const stocks_demirçelik = ["KCAER"];


describe("Petrol", async function () {

    stocks_petrol.forEach(stock =>{
    describe(stock,async function() {

      it("make sure the data", async function(){

        let driver = await new Builder().forBrowser('chrome').build();

        await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 

        driver.manage().window().maximize();

        let toplam_oazkayank=parseInt(await toplam_oazkayank_value(driver));
        
        await driver.quit();
      })


      it("fiyatKazancOrani", async function(){

        let driver = await new Builder().forBrowser('chrome').build();

        await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 

        let toplam_oazkayank_value=parseInt(await toplam_oazkayank(driver));
        let Dönem_Net_Kar_Zararı_value=parseInt(await Dönem_Net_Kar_Zararı(driver));
        let Toplam_Kısa_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Kısa_Vadeli_Yükümlülükler(driver));
        let Toplam_Uzun_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Uzun_Vadeli_Yükümlülükler(driver));
        let Nakit_ve_Nakit_Benzerleri_value=parseInt(await Nakit_ve_Nakit_Benzerleri(driver));
        let ticari_alacaklar_value=parseInt(await ticari_alacaklar(driver));

        let tüm_borçlar=Toplam_Kısa_Vadeli_Yükümlülükler_value+Toplam_Uzun_Vadeli_Yükümlülükler_value;
        console.log("Toplam_Kısa_Vadeli_Yükümlülükler_value+Toplam_Uzun_Vadeli_Yükümlülükler_value=tümborçlar:",tüm_borçlar);
    
        let fiyatKazancOrani = Nakit_ve_Nakit_Benzerleri_value / Dönem_Net_Kar_Zararı_value;
        console.log(" Nakit_ve_Nakit_Benzerleri_value / Dönem_Net_Kar_Zararı_value=fiyat kazanç oranı:",fiyatKazancOrani);
    
        const fiyatKazancOraniEsik = 15;//bu bence çok yüksek bir oran
        if (fiyatKazancOrani < fiyatKazancOraniEsik) { //düzenlenecek
          addContext(this, `fiyatKazancOrani < fiyatKazancOraniEsik true ${stock}`);


        }
        else{
          fiyatKazancOrani=`fiyatKazancOrani < fiyatKazancOraniEsik false ${stock}`;
        }
    
      
        await driver.quit();

          
      })

      it("borcOzkaynakOrani", async function(){

        let driver = await new Builder().forBrowser('chrome').build();


          await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 

          driver.manage().window().maximize();

          await toplam_oazkayank_value(driver);
          await Toplam_Kısa_Vadeli_Yükümlülükler_value(driver);
          await Toplam_Uzun_Vadeli_Yükümlülükler_value (driver);
      
          let toplam_oazkayank_value=parseInt(await toplam_oazkayank(driver));
          let Toplam_Kısa_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Kısa_Vadeli_Yükümlülükler(driver));
          let Toplam_Uzun_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Uzun_Vadeli_Yükümlülükler(driver));
          let Nakit_ve_Nakit_Benzerleri_value=parseInt(await Nakit_ve_Nakit_Benzerleri(driver));

          let borcOzkaynakOrani = Toplam_Kısa_Vadeli_Yükümlülükler_value + Toplam_Uzun_Vadeli_Yükümlülükler_value / toplam_oazkayank_value;
      
          const borcOzkaynakOraniEsik = 0.5;
      
          if (borcOzkaynakOrani < borcOzkaynakOraniEsik) {
            console.log(`borcOzkaynakOrani < borcOzkaynakOraniEsik true ${stock}`);
          }
          else{
            console.log(`borcOzkaynakOrani < borcOzkaynakOraniEsik false ${stock}`);
          }
      
          await driver.quit();
          
      })

      it("likitoran", async function(){

        let driver = await new Builder().forBrowser('chrome').build();

        await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 

        driver.manage().window().maximize();

        let toplam_oazkayank_value=parseInt(await toplam_oazkayank(driver));
        let Toplam_Kısa_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Kısa_Vadeli_Yükümlülükler(driver));
        let Toplam_Uzun_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Uzun_Vadeli_Yükümlülükler(driver));
        let Nakit_ve_Nakit_Benzerleri_value=parseInt(await Nakit_ve_Nakit_Benzerleri(driver));

        const likitOranEsik = 2;
        
        let likitoran=(Nakit_ve_Nakit_Benzerleri_value+ticari_alacaklar_value)/Toplam_Kısa_Vadeli_Yükümlülükler_value;
        addContext(`Likit oran, bir şirketin kısa vadeli borçlarını ödeme yeteneğini gösteren bir finansal orandır`);
        
        if(likitOranEsik < likitoran){
          console.log(`likitOranEsik < likitoran true ${stock}`);
        }
        else{
          console.log(`likitOranEsik < likitoran false${stock}`);
        }

        await driver.quit();
          
      })
   
    })
  })
})


describe("demir çelik", async function () {
  //const browsers = ["chrome", "firefox", "MicrosoftEdge"];
  //const stocks = ["TUPRS","KCHOL","TKNSA","REEDR"];

  stocks_demirçelik.forEach(stock =>{
  describe(stock,async function() {

    it("fiyatKazancOrani", async function(){

      let driver = await new Builder().forBrowser('chrome').build();

      await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 

      let toplam_oazkayank_value=parseInt(await toplam_oazkayank(driver));
      let Dönem_Net_Kar_Zararı_value=parseInt(await Dönem_Net_Kar_Zararı(driver));
      let Toplam_Kısa_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Kısa_Vadeli_Yükümlülükler(driver));
      let Toplam_Uzun_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Uzun_Vadeli_Yükümlülükler(driver));
      let Nakit_ve_Nakit_Benzerleri_value=parseInt(await Nakit_ve_Nakit_Benzerleri(driver));
      let ticari_alacaklar_value=parseInt(await ticari_alacaklar(driver));

      let tüm_borçlar=Toplam_Kısa_Vadeli_Yükümlülükler_value+Toplam_Uzun_Vadeli_Yükümlülükler_value;
      console.log("Toplam_Kısa_Vadeli_Yükümlülükler_value+Toplam_Uzun_Vadeli_Yükümlülükler_value=tümborçlar:",tüm_borçlar);
  
      let fiyatKazancOrani = Nakit_ve_Nakit_Benzerleri_value / Dönem_Net_Kar_Zararı_value;
      console.log(" Nakit_ve_Nakit_Benzerleri_value / Dönem_Net_Kar_Zararı_value=fiyat kazanç oranı:",fiyatKazancOrani);
  
      const fiyatKazancOraniEsik = 15;//bu bence çok yüksek bir oran
      if (fiyatKazancOrani < fiyatKazancOraniEsik) { //düzenlenecek
        addContext(this, `fiyatKazancOrani < fiyatKazancOraniEsik true ${stock}`);


      }
      else{
        fiyatKazancOrani=`fiyatKazancOrani < fiyatKazancOraniEsik false ${stock}`;
      }
  
    
      await driver.quit();

        
    })

    it("borcOzkaynakOrani", async function(){

      let driver = await new Builder().forBrowser('chrome').build();


        await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 

        driver.manage().window().maximize();

        await toplam_oazkayank_value(driver);
        await Toplam_Kısa_Vadeli_Yükümlülükler_value(driver);
        await Toplam_Uzun_Vadeli_Yükümlülükler_value (driver);
    
        let toplam_oazkayank_value=parseInt(await toplam_oazkayank(driver));
        let Toplam_Kısa_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Kısa_Vadeli_Yükümlülükler(driver));
        let Toplam_Uzun_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Uzun_Vadeli_Yükümlülükler(driver));
        let Nakit_ve_Nakit_Benzerleri_value=parseInt(await Nakit_ve_Nakit_Benzerleri(driver));

        let borcOzkaynakOrani = Toplam_Kısa_Vadeli_Yükümlülükler_value + Toplam_Uzun_Vadeli_Yükümlülükler_value / toplam_oazkayank_value;
    
        const borcOzkaynakOraniEsik = 0.5;
    
        if (borcOzkaynakOrani < borcOzkaynakOraniEsik) {
          console.log(`borcOzkaynakOrani < borcOzkaynakOraniEsik true ${stock}`);
        }
        else{
          console.log(`borcOzkaynakOrani < borcOzkaynakOraniEsik false ${stock}`);
        }
    
        await driver.quit();
        
    })

    it("likitoran", async function(){

      let driver = await new Builder().forBrowser('chrome').build();

      await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 

      driver.manage().window().maximize();

      let toplam_oazkayank_value=parseInt(await toplam_oazkayank(driver));
      let Toplam_Kısa_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Kısa_Vadeli_Yükümlülükler(driver));
      let Toplam_Uzun_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Uzun_Vadeli_Yükümlülükler(driver));
      let Nakit_ve_Nakit_Benzerleri_value=parseInt(await Nakit_ve_Nakit_Benzerleri(driver));

      const likitOranEsik = 2;
      
      let likitoran=(Nakit_ve_Nakit_Benzerleri_value+ticari_alacaklar_value)/Toplam_Kısa_Vadeli_Yükümlülükler_value;
      addContext(`Likit oran, bir şirketin kısa vadeli borçlarını ödeme yeteneğini gösteren bir finansal orandır`);
      
      if(likitOranEsik < likitoran){
        console.log(`likitOranEsik < likitoran true ${stock}`);
      }
      else{
        console.log(`likitOranEsik < likitoran false${stock}`);
      }

      await driver.quit();
        
    })
})
})

})