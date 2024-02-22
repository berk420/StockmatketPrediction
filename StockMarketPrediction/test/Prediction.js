const {By, Builder } = require("selenium-webdriver");
require("chromedriver"); 
const { describe, it } = require('mocha');
const addContext = require('mochawesome/addContext');

const stocks = ["TUPRS"];

describe("Stockmarket", async function () {
    //const browsers = ["chrome", "firefox", "MicrosoftEdge"];
    //const stocks = ["TUPRS","KCHOL","TKNSA","REEDR"];

    stocks.forEach(stock =>{
    describe(stock,async function() {
      let fiyatKazancOrani="aa";
      let ss = "dd";


      
    
      it("fiyatKazancOrani", async function(){

        let driver = await new Builder().forBrowser('chrome').build();

        try {

          await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 

          driver.manage().window().maximize();
      
          await new Promise(resolve => setTimeout(resolve, 1000));
      
          const toplam_ozkaynak=await driver.findElement(By.xpath(`//*[@id="TUPRS"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[5]/tr[12]/td[2]/div/span[2]`));
          toplam_ozkaynak.getText().then(result => {
            toplam_oazkayank_value=result;
              })
          await new Promise(resolve => setTimeout(resolve, 1000));
      
          let Dönem_Net_Kar_Zararı_value;
          const Dönem_Net_Kar_Zararı=await driver.findElement(By.xpath(`//*[@id="TUPRS"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[5]/tr[10]/td[2]/div/span[2]`));
          Dönem_Net_Kar_Zararı.getText().then(result => {
            Dönem_Net_Kar_Zararı_value=result;
              })
          await new Promise(resolve => setTimeout(resolve, 1000));
      
          let Toplam_Kısa_Vadeli_Yükümlülükler_value;
          const Toplam_Kısa_Vadeli_Yükümlülükler=await driver.findElement(By.xpath(`//*[@id="TUPRS"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[3]/tr[11]/td[2]/div/span[2]`));
          Toplam_Kısa_Vadeli_Yükümlülükler.getText().then(result => {
            Toplam_Kısa_Vadeli_Yükümlülükler_value=result;
              })
          await new Promise(resolve => setTimeout(resolve, 1000));
      
          let Toplam_Uzun_Vadeli_Yükümlülükler_value;
          const Toplam_Uzun_Vadeli_Yükümlülükler=await driver.findElement(By.xpath(`//*[@id="TUPRS"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[3]/tr[11]/td[2]/div/span[2]`));
          Toplam_Uzun_Vadeli_Yükümlülükler.getText().then(result => {
            Toplam_Uzun_Vadeli_Yükümlülükler_value=result;
              })
          await new Promise(resolve => setTimeout(resolve, 1000));
      
          let Nakit_ve_Nakit_Benzerleri_value;
          const Nakit_ve_Nakit_Benzerleri =await driver.findElement(By.xpath(`//*[@id="TUPRS"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[2]/td[2]/div/span[2]`));
          Nakit_ve_Nakit_Benzerleri.getText().then(result => {
            Nakit_ve_Nakit_Benzerleri_value=result;
              })
          await new Promise(resolve => setTimeout(resolve, 1000));
                          
          let ticari_alacaklar_value;
          const ticari_alacaklar=await driver.findElement(By.xpath(`//*[@id="TUPRS"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[4]/td[2]/div/span[2]`));
          ticari_alacaklar.getText().then(result => {
            ticari_alacaklar_value=result;
              })
          await new Promise(resolve => setTimeout(resolve, 1000));
      
      
          toplam_oazkayank_value=parseInt(toplam_oazkayank_value);
          Dönem_Net_Kar_Zararı_value=parseInt(Dönem_Net_Kar_Zararı_value);
          Toplam_Kısa_Vadeli_Yükümlülükler_value=parseInt(Toplam_Kısa_Vadeli_Yükümlülükler_value);
          Toplam_Uzun_Vadeli_Yükümlülükler_value=parseInt(Toplam_Uzun_Vadeli_Yükümlülükler_value);
          Nakit_ve_Nakit_Benzerleri_value=parseInt(Nakit_ve_Nakit_Benzerleri_value);
          ticari_alacaklar_value=parseInt(ticari_alacaklar_value)
      

          let tüm_borçlar=Toplam_Kısa_Vadeli_Yükümlülükler_value+Toplam_Uzun_Vadeli_Yükümlülükler_value;
          console.log("Toplam_Kısa_Vadeli_Yükümlülükler_value+Toplam_Uzun_Vadeli_Yükümlülükler_value=tümborçlar:",tüm_borçlar);
      
          fiyatKazancOrani = Nakit_ve_Nakit_Benzerleri_value / Dönem_Net_Kar_Zararı_value;
          console.log(" Nakit_ve_Nakit_Benzerleri_value / Dönem_Net_Kar_Zararı_value=fiyat kazanç oranı:",fiyatKazancOrani);
      
          const fiyatKazancOraniEsik = 15;//bu bence çok yüksek bir oran
          if (fiyatKazancOrani < fiyatKazancOraniEsik) { //düzenlenecek
            console.log();
            addContext(this, `fiyatKazancOrani < fiyatKazancOraniEsik true ${stock}`);

          }
          else{

            console.log(`fiyatKazancOrani < fiyatKazancOraniEsik false ${stock}`);

            fiyatKazancOrani=`fiyatKazancOrani < fiyatKazancOraniEsik false ${stock}`;
          }
      
          let borcOzkaynakOrani = Toplam_Kısa_Vadeli_Yükümlülükler_value + Toplam_Uzun_Vadeli_Yükümlülükler_value / toplam_oazkayank_value;
      
          const borcOzkaynakOraniEsik = 0.5;
      
          if (borcOzkaynakOrani < borcOzkaynakOraniEsik) {
            console.log(`borcOzkaynakOrani < borcOzkaynakOraniEsik true ${stock}`);
          }
          else{
            console.log(`borcOzkaynakOrani < borcOzkaynakOraniEsik false ${stock}`);
          }
      
          const likitOranEsik = 2;
          
          let likitoran=(Nakit_ve_Nakit_Benzerleri_value+ticari_alacaklar_value)/Toplam_Kısa_Vadeli_Yükümlülükler_value;
          
          //Likit oran, bir şirketin kısa vadeli borçlarını ödeme yeteneğini gösteren bir finansal orandır. 
          
          if(likitOranEsik < likitoran){
            console.log(`likitOranEsik < likitoran true ${stock}`);
          }
          else{
            console.log(`likitOranEsik < likitoran false${stock}`);
          }

          
         it(String("fiyatKazancOrani"), async function(){})
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

