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

  for (let eleman of NakitveNakitBenzerleri_allss) {
    console.log(eleman);

  }

}

function postcire(){

  const{Client}=require('pg');
  const client = new Client({
    host:"localhost",
    user:"postgres",
    port:"5432",
    password:"0606",
    database:"dbstock"
  });

  client.connect();
  let  query = "INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zamani, degeri) VALUES ('Hisse1', 'Kalemi1', '2024-03-16 10:00:00', 100), ('Hisse2', 'Kalemi2', '2024-03-16 11:00:00', 150), ('Hisse3', 'Kalemi3', '2024-03-16 12:00:00', 200);"
  let  sildick="DELETE FROM bilanco";
  client.query(sildick, (err,res)=>{
    if(!err){
      console.log(res.rows);
    }else{
      console.log(err.message);
    }
    client.end;
  })



}

//postcire();

//testing();
async function gunder() {
  const { Client } = require('pg');
  const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "0606",
    database: "dbstock"
  });

  try {
    // Veritabanına bağlanma
    await client.connect();
    let driver = await new Builder().forBrowser('chrome').build();
    stock="TUPRS"
    await driver.get(`https://fintables.com/sirketler/TUPRS/finansal-tablolar/bilanco`);

    let  data =await NakitveNakitBenzerleri_all(driver,stock);

    // 2 boyutlu dizi

    // Her bir veriyi tabloya eklemek için döngü
    for (const item of data) {
      const hisse_adi = 'TUPRS'; // Hisse adı sabit olarak 'TUPRS' olarak belirtildi
      const bilanco_kalemi = 'Nakit ve Nakit Benzerleri'; // Bilanco kalemi sabit bir değer olarak belirtildi, gerçek veriye göre güncellenmeli
      const zamani = item[0]; // Dizinin ilk elemanı 'zamani' sütununa atanıyor
      const degeri = item[1]; // Dizinin ikinci elemanı 'degeri' sütununa atanıyor

      // SQL sorgusu
      const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;

      // Sorguyu çalıştırma
      await client.query(sql, [hisse_adi, bilanco_kalemi, zamani, degeri]);
      console.log("Veri başarıyla eklendi.");
    }
  } catch (err) {
    console.error("Veri eklenirken hata oluştu:", err.message);
  } finally {
    // Veritabanı bağlantısını kapatma
    await client.end();
  }
}

// Fonksiyonu çağır
gunder();









