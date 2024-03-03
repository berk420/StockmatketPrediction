//module.exportsconst { Base_URL, Second_URL, SuperAdmin_email, SuperAdmin_password, TenantAdmin_email, TenantAdmin_password, User_email, User_password} = require("./variables.js");
const {By, Builder,sendKeys,Key, WebElement,until } = require("selenium-webdriver");

module.exports = {

  toplam_oazkayank_all:async function(driver,stock) {
    await driver.manage().window().maximize();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await driver.navigate().refresh();
    await new Promise(resolve => setTimeout(resolve, 1000));



    const element = await driver.findElement(By.xpath(`//*[@id="TUPRS"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[2]/div/div`));
    const tumStringler = element.innerHTML;
    
    const regex = /(<.*?>)(.*?)(<.*?>)/g;
    const matches = tumStringler.match(regex);
    
    for (const match of matches) {
      console.log(match[2]); // Her bir stringi ayrı ayrı ekrana yazdırır.
    }
    



    let toplam_oazkayank_all_son_tarih_time;

    const toplam_ozkaynak_all_sontarih=await driver.findElement(By.xpath(`//*[@id="TUPRS"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[2]/div/div`));
    //const toplam_ozkaynak_all_sontarih=await driver.findElement(By.xpath(`//*[@id="TUPRS"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[2]/div/div`));
    
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log(toplam_ozkaynak_all_sontarih.textContent);
    console.log(toplam_ozkaynak_all_sontarih.allData);
    console.log(toplam_ozkaynak_all_sontarih.getText);
    //debugger;
    console.log(toplam_ozkaynak_all_sontarih.WebElement);
    console.log(toplam_ozkaynak_all_sontarih.exports);
    console.log(toplam_ozkaynak_all_sontarih.result);

    console.log(toplam_ozkaynak_all_sontarih.module);

    console.log(toplam_ozkaynak_all_sontarih.then);
    console.log(toplam_ozkaynak_all_sontarih.resolve);




    

    const allData = await toplam_ozkaynak_all_sontarih.innerHTML;

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("sdf",allData);


    toplam_ozkaynak_all_sontarih.innerHTML.then(result => {
      toplam_oazkayank_all_son_tarih_time=result;
    })

    console.log("---");
    console.log(toplam_oazkayank_all_son_tarih_time)


    let toplam_oazkayank_all_sontarih_value;
    const toplam_ozkaynak_all_sontarihh=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[2]/td[2]/div/span[2]`));
    toplam_ozkaynak_all_sontarihh.getText().then(result => {
      toplam_oazkayank_all_sontarih_value=result;
    })

    await new Promise(resolve => setTimeout(resolve, 1000));

    return toplam_oazkayank_all_son_tarih_time;
},



    toplam_oazkayank:async function(driver,stock) {
        driver.manage().window().maximize();
      
        let toplam_oazkayank_value;
        await new Promise(resolve => setTimeout(resolve, 1000));
    
        const toplam_ozkaynak=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[5]/tr[12]/td[2]/div/span[2]`));
        toplam_ozkaynak.getText().then(result => {
            toplam_oazkayank_value=result;
        })

        await new Promise(resolve => setTimeout(resolve, 1000));

        return toplam_oazkayank_value;
    },

    Dönem_Net_Kar_Zararı:async function(driver,stock) {
        driver.manage().window().maximize();

        let Dönem_Net_Kar_Zararı_value;

        const Dönem_Net_Kar_Zararı=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[5]/tr[10]/td[2]/div/span[2]`));
        Dönem_Net_Kar_Zararı.getText().then(result => {
          Dönem_Net_Kar_Zararı_value=result;
            })
        await new Promise(resolve => setTimeout(resolve, 1000));       

        return Dönem_Net_Kar_Zararı_value;
    },

    
    Toplam_Kısa_Vadeli_Yükümlülükler:async function(driver,stock) {
        driver.manage().window().maximize();
        let Toplam_Kısa_Vadeli_Yükümlülükler_value;
        const Toplam_Kısa_Vadeli_Yükümlülükler=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[3]/tr[11]/td[2]/div/span[2]`));
        Toplam_Kısa_Vadeli_Yükümlülükler.getText().then(result => {
          Toplam_Kısa_Vadeli_Yükümlülükler_value=result;
            })
        await new Promise(resolve => setTimeout(resolve, 1000));

        return Toplam_Kısa_Vadeli_Yükümlülükler_value;
    },

    Toplam_Uzun_Vadeli_Yükümlülükler:async function(driver,stock) {
        driver.manage().window().maximize();
        let Toplam_Uzun_Vadeli_Yükümlülükler_value;
        const Toplam_Uzun_Vadeli_Yükümlülükler=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[3]/tr[11]/td[2]/div/span[2]`));
        Toplam_Uzun_Vadeli_Yükümlülükler.getText().then(result => {
          Toplam_Uzun_Vadeli_Yükümlülükler_value=result;
            })
        await new Promise(resolve => setTimeout(resolve, 1000));

        return Toplam_Uzun_Vadeli_Yükümlülükler_value;
    },

    Nakit_ve_Nakit_Benzerleri:async function(driver,stock) {
        driver.manage().window().maximize();

        let Nakit_ve_Nakit_Benzerleri_value;
        const Nakit_ve_Nakit_Benzerleri =await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[2]/td[2]/div/span[2]`));
        Nakit_ve_Nakit_Benzerleri.getText().then(result => {
          Nakit_ve_Nakit_Benzerleri_value=result;
            })
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        return Nakit_ve_Nakit_Benzerleri_value;
    },

    ticari_alacaklar:async function(driver,stock) {
        driver.manage().window().maximize();

        let ticari_alacaklar_value;
        const ticari_alacaklar=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[4]/td[2]/div/span[2]`));
        ticari_alacaklar.getText().then(result => {
          ticari_alacaklar_value=result;
            })
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        return ticari_alacaklar_value;
    },


  };