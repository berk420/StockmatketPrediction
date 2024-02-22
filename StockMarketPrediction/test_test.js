const {By, Builder,sendKeys,Key, WebElement,until } = require("selenium-webdriver");
//require("chromedriver"); 
const { describe, it } = require('mocha');
const assert = require("assert");
const { debug, Console } = require("console");
const { waitForDebugger } = require("inspector");



async function combobox_verileri(){
  try {
    let driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();

    await driver.get("https://fintables.com/sirketler/TUPRS/finansal-tablolar/bilanco");
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    ////*[@id="TUPRS"]/div[5]/div[1]/div/main/div/div/div[3]/div[3]/table[2]/tbody[5]/tr[12]/td[2]/div/span[2]
    //buranın verisi lazım


    let toplam_oazkayank_value;
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

    console.log();

    
    let ticari_alacaklar_value;
    const ticari_alacaklar=await driver.findElement(By.xpath(`//*[@id="TUPRS"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[4]/td[2]/div/span[2]`));
    ticari_alacaklar.getText().then(result => {
      ticari_alacaklar_value=result;
        })
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log();


    toplam_oazkayank_value=parseInt(toplam_oazkayank_value);
    Dönem_Net_Kar_Zararı_value=parseInt(Dönem_Net_Kar_Zararı_value);
    Toplam_Kısa_Vadeli_Yükümlülükler_value=parseInt(Toplam_Kısa_Vadeli_Yükümlülükler_value);
    Toplam_Uzun_Vadeli_Yükümlülükler_value=parseInt(Toplam_Uzun_Vadeli_Yükümlülükler_value);
    Nakit_ve_Nakit_Benzerleri_value=parseInt(Nakit_ve_Nakit_Benzerleri_value);
    ticari_alacaklar_value=parseInt(ticari_alacaklar_value)


    let tüm_borçlar=Toplam_Kısa_Vadeli_Yükümlülükler_value+Toplam_Uzun_Vadeli_Yükümlülükler_value;
    console.log("Toplam_Kısa_Vadeli_Yükümlülükler_value+Toplam_Uzun_Vadeli_Yükümlülükler_value=tümborçlar:",tüm_borçlar);

    let fiyatKazancOrani = Nakit_ve_Nakit_Benzerleri_value / Dönem_Net_Kar_Zararı_value;
    console.log(" Nakit_ve_Nakit_Benzerleri_value / Dönem_Net_Kar_Zararı_value=fiyat kazanç oranı:",fiyatKazancOrani);

    const fiyatKazancOraniEsik = 15;//bu bence çok yüksek bir oran
    if (fiyatKazancOrani < fiyatKazancOraniEsik) { //düzenlenecek
      console.log("fiyatKazancOrani < fiyatKazancOraniEsik true");
    }
    else{
      console.log("fiyatKazancOrani < fiyatKazancOraniEsik false");
    }

    let borcOzkaynakOrani = Toplam_Kısa_Vadeli_Yükümlülükler_value + Toplam_Uzun_Vadeli_Yükümlülükler_value / toplam_oazkayank_value;

    const borcOzkaynakOraniEsik = 0.5;

    if (borcOzkaynakOrani < borcOzkaynakOraniEsik) {
      console.log("borcOzkaynakOrani < borcOzkaynakOraniEsik true");
    }
    else{
      console.log("borcOzkaynakOrani < borcOzkaynakOraniEsik false");
    }



const likitOranEsik = 2;

let likitoran=(Nakit_ve_Nakit_Benzerleri_value+ticari_alacaklar_value)/Toplam_Kısa_Vadeli_Yükümlülükler_value;

//Likit oran, bir şirketin kısa vadeli borçlarını ödeme yeteneğini gösteren bir finansal orandır. 

if(likitOranEsik < likitoran){
  console.log("likitOranEsik < likitoran true");
}
else{
  console.log("likitOranEsik < likitoran false");
}



    //tüm valueleri long değişkenine ata
/*
    let _value;
    const =await driver.findElement(By.xpath(``));
    .getText().then(result => {
      =result;
        })
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log();

*/



/*
function isSenediAlinabilir(bilanco) {
  // Finansal oranları hesapla
  const fiyatKazancOrani = bilanco.dondurulenVarliklar.nakitVeNakitBenzerleri / bilanco.ozkaynaklar.dondurulenKar;
  const borcOzkaynakOrani = bilanco.yukumluluklar.kisaVadeliYukumlulukler + bilanco.yukumluluklar.uzunVadeliYukumlulukler / bilanco.ozkaynaklar.toplamOzkaynaklar;
  const likitOran = (bilanco.dondurulenVarliklar.nakitVeNakitBenzerleri + bilanco.dondurulenVarliklar.ticariAlacaklar) / bilanco.yukumluluklar.kisaVadeliYukumlulukler;

  // Eşik değerleri tanımla
  const fiyatKazancOraniEsik = 15;
  const borcOzkaynakOraniEsik = 0.5;
  const likitOranEsik = 2;

  // Oranları eşik değerlerle karşılaştır
  if (fiyatKazancOrani > fiyatKazancOraniEsik) {
    return false;
  }
  if (borcOzkaynakOrani > borcOzkaynakOraniEsik) {
    return false;
  }
  if (likitOran < likitOranEsik) {
    return false;
  }

  // Tüm kriterler karşılanırsa, hisse senedi alınabilir
  return true;
}

// Örnek bilanço
const bilanco = {
  dondurulenVarliklar: {
    nakitVeNakitBenzerleri: 100000000,
    ticariAlacaklar: 50000000,
    stoklar: 30000000,
  },
  duranVarliklar: {
    maddiDuranVarliklar: 200000000,
    maddiOlmayanDuranVarliklar: 50000000,
  },
  yukumluluklar: {
    kisaVadeliYukumlulukler: 75000000,
    uzunVadeliYukumlulukler: 100000000,
  },
  ozkaynaklar: {
    dondurulenKar: 20000000,
    toplamOzkaynaklar: 150000000,
  },
};

// Hesaplama sonucunu yazdır
const alinabilir = isSenediAlinabilir(bilanco);
console.log(`Hisse senedi alınabilir mi? ${alinabilir}`);

*/


    
}
catch(err) {
    console.log(err);
    driver.quit();
}
}

combobox_verileri();
