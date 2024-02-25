//module.exportsconst { Base_URL, Second_URL, SuperAdmin_email, SuperAdmin_password, TenantAdmin_email, TenantAdmin_password, User_email, User_password} = require("./variables.js");
const {By, Builder,sendKeys,Key, WebElement,until } = require("selenium-webdriver");
module.exports = {
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