//module.exportsconst { Base_URL, Second_URL, SuperAdmin_email, SuperAdmin_password, TenantAdmin_email, TenantAdmin_password, User_email, User_password} = require("./variables.js");
const {By, Builder,sendKeys,Key, WebElement,until } = require("selenium-webdriver");

async function pass_click(driver,stock) {
  let zaman_butonu=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/button`));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await zaman_butonu.click();
  console.log("object");
}
module.exports = {

 NakitveNakitBenzerleri_all:async function(driver,stock) {
    await driver.manage().window().maximize();
    await new Promise(resolve => setTimeout(resolve, 1000));
    await driver.navigate().refresh();
    await new Promise(resolve => setTimeout(resolve, 1000));


    //#region zaman verilerini aldık 

    let NakitveNakitBenzerleri_all_sontarih_value_1_2;
    const NakitveNakitBenzerleri_all_sontarihh_1_2=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[2]/div/div`));
    NakitveNakitBenzerleri_all_sontarihh_1_2.getText().then(result => {               
      NakitveNakitBenzerleri_all_sontarih_value_1_2=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_all_sontarih_value_1_3;
    const NakitveNakitBenzerleri_all_sontarihh_1_3=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div`));
    NakitveNakitBenzerleri_all_sontarihh_1_3.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
      NakitveNakitBenzerleri_all_sontarih_value_1_3=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));


    let NakitveNakitBenzerleri_all_sontarih_value_1_4;
    const NakitveNakitBenzerleri_all_sontarihh_1_4=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[4]/div/div`));
    NakitveNakitBenzerleri_all_sontarihh_1_4.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
      NakitveNakitBenzerleri_all_sontarih_value_1_4=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_all_sontarih_value_1_5;
    const NakitveNakitBenzerleri_all_sontarihh_1_5=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[5]/div/div`));
    NakitveNakitBenzerleri_all_sontarihh_1_5.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
      NakitveNakitBenzerleri_all_sontarih_value_1_5=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_all_sontarih_value_1_6;
    const NakitveNakitBenzerleri_all_sontarihh_1_6=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/div`));
    NakitveNakitBenzerleri_all_sontarihh_1_6.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
      NakitveNakitBenzerleri_all_sontarih_value_1_6=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    await pass_click(driver,stock);
    await pass_click(driver,stock);
    await pass_click(driver,stock);
    await pass_click(driver,stock);
    await pass_click(driver,stock);

    let NakitveNakitBenzerleri_all_sontarih_value_2_2;
    const NakitveNakitBenzerleri_all_sontarihh_2_2=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[2]/div/div`));
    NakitveNakitBenzerleri_all_sontarihh_2_2.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
      NakitveNakitBenzerleri_all_sontarih_value_2_2=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let NakitveNakitBenzerleri_all_sontarih_value_2_3;
    const NakitveNakitBenzerleri_all_sontarihh_2_3=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div`));
    NakitveNakitBenzerleri_all_sontarihh_2_3.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
      NakitveNakitBenzerleri_all_sontarih_value_2_3=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_all_sontarih_value_2_4;
    const NakitveNakitBenzerleri_all_sontarihh_2_4=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[4]/div/div`));
    NakitveNakitBenzerleri_all_sontarihh_2_4.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
      NakitveNakitBenzerleri_all_sontarih_value_2_4=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_all_sontarih_value_2_5;
    const NakitveNakitBenzerleri_all_sontarihh_2_5=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[5]/div/div`));
    NakitveNakitBenzerleri_all_sontarihh_2_5.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
      NakitveNakitBenzerleri_all_sontarih_value_2_5=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_all_sontarih_value_2_6;
    const NakitveNakitBenzerleri_all_sontarihh_2_6=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/div`));
    NakitveNakitBenzerleri_all_sontarihh_2_6.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
      NakitveNakitBenzerleri_all_sontarih_value_2_6=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));


    await pass_click(driver,stock);
    await pass_click(driver,stock);
    await pass_click(driver,stock);
    await pass_click(driver,stock);
    await pass_click(driver,stock);


    let NakitveNakitBenzerleri_all_sontarih_value_3_2;
    const NakitveNakitBenzerleri_all_sontarihh_3_2=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[2]/div/div`));
    NakitveNakitBenzerleri_all_sontarihh_3_2.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
      NakitveNakitBenzerleri_all_sontarih_value_3_2=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_all_sontarih_value_3_3;
    const NakitveNakitBenzerleri_all_sontarihh_3_3=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div`));
    NakitveNakitBenzerleri_all_sontarihh_3_3.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
      NakitveNakitBenzerleri_all_sontarih_value_3_3=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_all_sontarih_value_3_4;
    const NakitveNakitBenzerleri_all_sontarihh_3_4=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[4]/div/div`));
    NakitveNakitBenzerleri_all_sontarihh_3_4.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
      NakitveNakitBenzerleri_all_sontarih_value_3_4=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_all_sontarih_value_3_5;
    const NakitveNakitBenzerleri_all_sontarihh_3_5=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[5]/div/div`));
    NakitveNakitBenzerleri_all_sontarihh_3_5.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
      NakitveNakitBenzerleri_all_sontarih_value_3_5=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_all_sontarih_value_3_6;
    const NakitveNakitBenzerleri_all_sontarihh_3_6=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/div`));
    NakitveNakitBenzerleri_all_sontarihh_3_6.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
      NakitveNakitBenzerleri_all_sontarih_value_3_6=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));
    //#endregion

    await driver.navigate().refresh();
    await new Promise(resolve => setTimeout(resolve, 1000));


    let NakitveNakitBenzerleri_value_1_2;
    const NakitveNakitBenzerleri_value_html_1_2=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[2]/td[2]/div/span[2]`));
    NakitveNakitBenzerleri_value_html_1_2.getText().then(result => { 
      NakitveNakitBenzerleri_value_1_2=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_value_1_3;
    const NakitveNakitBenzerleri_value_html_1_3=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[2]/td[3]/div/span[2]`));
    NakitveNakitBenzerleri_value_html_1_3.getText().then(result => { 
      NakitveNakitBenzerleri_value_1_3=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_value_1_4;
    const NakitveNakitBenzerleri_value_html_1_4=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[2]/td[4]/div/span[2]`));
    NakitveNakitBenzerleri_value_html_1_4.getText().then(result => { 
      NakitveNakitBenzerleri_value_1_4=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_value_1_5;
    const NakitveNakitBenzerleri_value_html_1_5=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[2]/td[5]/div/span[2]`));
    NakitveNakitBenzerleri_value_html_1_5.getText().then(result => { 
      NakitveNakitBenzerleri_value_1_5=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_value_1_6;
    const NakitveNakitBenzerleri_value_html_1_6=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[6]/td[6]/div/span[2]`));
    NakitveNakitBenzerleri_value_html_1_6.getText().then(result => { 
      NakitveNakitBenzerleri_value_1_6=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    await pass_click(driver,stock);
    await pass_click(driver,stock);
    await pass_click(driver,stock);
    await pass_click(driver,stock);
    await pass_click(driver,stock);

    let NakitveNakitBenzerleri_value_2_2;
    const NakitveNakitBenzerleri_value_html_2_2=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[2]/td[2]/div/span[2]`));
    NakitveNakitBenzerleri_value_html_2_2.getText().then(result => { 
      NakitveNakitBenzerleri_value_2_2=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_value_2_3;
    const NakitveNakitBenzerleri_value_html_2_3=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[2]/td[3]/div/span[2]`));
    NakitveNakitBenzerleri_value_html_2_3.getText().then(result => { 
      NakitveNakitBenzerleri_value_2_3=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_value_2_4;
    const NakitveNakitBenzerleri_value_html_2_4=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[2]/td[4]/div/span[2]`));
    NakitveNakitBenzerleri_value_html_2_4.getText().then(result => { 
      NakitveNakitBenzerleri_value_2_4=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_value_2_5;
    const NakitveNakitBenzerleri_value_html_2_5=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[2]/td[5]/div/span[2]`));
    NakitveNakitBenzerleri_value_html_2_5.getText().then(result => { 
      NakitveNakitBenzerleri_value_2_5=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_value_2_6;
    const NakitveNakitBenzerleri_value_html_2_6=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[6]/td[6]/div/span[2]`));
    NakitveNakitBenzerleri_value_html_2_6.getText().then(result => { 
      NakitveNakitBenzerleri_value_2_6=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    await pass_click(driver,stock);
    await pass_click(driver,stock);
    await pass_click(driver,stock);
    await pass_click(driver,stock);
    await pass_click(driver,stock);

    let NakitveNakitBenzerleri_value_3_2;
    const NakitveNakitBenzerleri_value_html_3_2=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[2]/td[2]/div/span[2]`));
    NakitveNakitBenzerleri_value_html_3_2.getText().then(result => { 
      NakitveNakitBenzerleri_value_3_2=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_value_3_3;
    const NakitveNakitBenzerleri_value_html_3_3=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[2]/td[3]/div/span[2]`));
    NakitveNakitBenzerleri_value_html_3_3.getText().then(result => { 
      NakitveNakitBenzerleri_value_3_3=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_value_3_4;
    const NakitveNakitBenzerleri_value_html_3_4=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[2]/td[4]/div/span[2]`));
    NakitveNakitBenzerleri_value_html_3_4.getText().then(result => { 
      NakitveNakitBenzerleri_value_3_4=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_value_3_5;
    const NakitveNakitBenzerleri_value_html_3_5=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[2]/td[5]/div/span[2]`));
    NakitveNakitBenzerleri_value_html_3_5.getText().then(result => { 
      NakitveNakitBenzerleri_value_3_5=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));

    let NakitveNakitBenzerleri_value_3_6;
    const NakitveNakitBenzerleri_value_html_3_6=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[1]/tr[6]/td[6]/div/span[2]`));
    NakitveNakitBenzerleri_value_html_3_6.getText().then(result => { 
      NakitveNakitBenzerleri_value_3_6=result;
    })
    await new Promise(resolve => setTimeout(resolve, 1000));


    let arr_time=[
      [NakitveNakitBenzerleri_all_sontarih_value_1_2,NakitveNakitBenzerleri_value_1_2],
      [NakitveNakitBenzerleri_all_sontarih_value_1_3,NakitveNakitBenzerleri_value_1_3],
      [NakitveNakitBenzerleri_all_sontarih_value_1_4,NakitveNakitBenzerleri_value_1_4],
      [NakitveNakitBenzerleri_all_sontarih_value_1_5,NakitveNakitBenzerleri_value_1_5],
      [NakitveNakitBenzerleri_all_sontarih_value_1_6,NakitveNakitBenzerleri_value_1_6],
      [NakitveNakitBenzerleri_all_sontarih_value_2_2,NakitveNakitBenzerleri_value_2_2],
      [NakitveNakitBenzerleri_all_sontarih_value_2_3,NakitveNakitBenzerleri_value_2_3],
      [NakitveNakitBenzerleri_all_sontarih_value_2_4,NakitveNakitBenzerleri_value_2_4],
      [NakitveNakitBenzerleri_all_sontarih_value_2_5,NakitveNakitBenzerleri_value_2_5],
      [NakitveNakitBenzerleri_all_sontarih_value_2_6,NakitveNakitBenzerleri_value_2_6],
      [NakitveNakitBenzerleri_all_sontarih_value_3_2,NakitveNakitBenzerleri_value_3_2],
      [NakitveNakitBenzerleri_all_sontarih_value_3_3,NakitveNakitBenzerleri_value_3_3],
      [NakitveNakitBenzerleri_all_sontarih_value_3_4,NakitveNakitBenzerleri_value_3_4],
      [NakitveNakitBenzerleri_all_sontarih_value_3_5,NakitveNakitBenzerleri_value_3_5],
      [NakitveNakitBenzerleri_all_sontarih_value_3_6,NakitveNakitBenzerleri_value_3_6],
      ];


    return arr_time;
},


toplam_oazkayank_all:async function(driver,stock) {
  await driver.manage().window().maximize();
  await new Promise(resolve => setTimeout(resolve, 1000));
  await driver.navigate().refresh();
  await new Promise(resolve => setTimeout(resolve, 1000));


  let toplam_oazkayank_all_sontarih_value_1_2;
  const toplam_ozkaynak_all_sontarihh_1_2=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[2]/div/div`));
  toplam_ozkaynak_all_sontarihh_1_2.getText().then(result => {               
    toplam_oazkayank_all_sontarih_value_1_2=result;
  })
  await new Promise(resolve => setTimeout(resolve, 1000));


  let toplam_oazkayank_all_sontarih_value_1_3;
  const toplam_ozkaynak_all_sontarihh_1_3=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div`));
  toplam_ozkaynak_all_sontarihh_1_3.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
    toplam_oazkayank_all_sontarih_value_1_3=result;
  })
  await new Promise(resolve => setTimeout(resolve, 1000));


  let toplam_oazkayank_all_sontarih_value_1_4;
  const toplam_ozkaynak_all_sontarihh_1_4=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[4]/div/div`));
  toplam_ozkaynak_all_sontarihh_1_4.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
    toplam_oazkayank_all_sontarih_value_1_4=result;
  })
  await new Promise(resolve => setTimeout(resolve, 1000));

  let toplam_oazkayank_all_sontarih_value_1_5;
  const toplam_ozkaynak_all_sontarihh_1_5=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[5]/div/div`));
  toplam_ozkaynak_all_sontarihh_1_5.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
    toplam_oazkayank_all_sontarih_value_1_5=result;
  })
  await new Promise(resolve => setTimeout(resolve, 1000));

  let toplam_oazkayank_all_sontarih_value_1_6;
  const toplam_ozkaynak_all_sontarihh_1_6=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/div`));
  toplam_ozkaynak_all_sontarihh_1_6.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
    toplam_oazkayank_all_sontarih_value_1_6=result;
  })
  await new Promise(resolve => setTimeout(resolve, 1000));

  let zaman_butonu_1=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/button`));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await zaman_butonu_1.click();
  let zaman_butonu_2=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/button`));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await zaman_butonu_2.click();
  let zaman_butonu_3=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/button`));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await zaman_butonu_3.click();
  let zaman_butonu_4=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/button`));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await zaman_butonu_4.click();
  let zaman_butonu_5=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/button`));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await zaman_butonu_5.click();



  //yana geçme butonuna 5 defa click et 


  let toplam_oazkayank_all_sontarih_value_2_2;
  const toplam_ozkaynak_all_sontarihh_2_2=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[2]/div/div`));
  toplam_ozkaynak_all_sontarihh_2_2.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
    toplam_oazkayank_all_sontarih_value_2_2=result;
  })
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  let toplam_oazkayank_all_sontarih_value_2_3;
  const toplam_ozkaynak_all_sontarihh_2_3=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div`));
  toplam_ozkaynak_all_sontarihh_2_3.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
    toplam_oazkayank_all_sontarih_value_2_3=result;
  })
  await new Promise(resolve => setTimeout(resolve, 1000));

  let toplam_oazkayank_all_sontarih_value_2_4;
  const toplam_ozkaynak_all_sontarihh_2_4=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[4]/div/div`));
  toplam_ozkaynak_all_sontarihh_2_4.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
    toplam_oazkayank_all_sontarih_value_2_4=result;
  })
  await new Promise(resolve => setTimeout(resolve, 1000));

  let toplam_oazkayank_all_sontarih_value_2_5;
  const toplam_ozkaynak_all_sontarihh_2_5=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[5]/div/div`));
  toplam_ozkaynak_all_sontarihh_2_5.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
    toplam_oazkayank_all_sontarih_value_2_5=result;
  })
  await new Promise(resolve => setTimeout(resolve, 1000));

  let toplam_oazkayank_all_sontarih_value_2_6;
  const toplam_ozkaynak_all_sontarihh_2_6=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/div`));
  toplam_ozkaynak_all_sontarihh_2_6.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
    toplam_oazkayank_all_sontarih_value_2_6=result;
  })
  await new Promise(resolve => setTimeout(resolve, 1000));


  let zaman_butonu_6=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/button`));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await zaman_butonu_6.click();
  let zaman_butonu_7=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/button`));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await zaman_butonu_7.click();
  let zaman_butonu_8=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/button`));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await zaman_butonu_8.click();
  let zaman_butonu_9=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/button`));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await zaman_butonu_9.click();
  let zaman_butonu_10=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/button`));
  await new Promise(resolve => setTimeout(resolve, 1000));
  await zaman_butonu_10.click();

  let toplam_oazkayank_all_sontarih_value_3_2;
  const toplam_ozkaynak_all_sontarihh_3_2=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[2]/div/div`));
  toplam_ozkaynak_all_sontarihh_3_2.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
    toplam_oazkayank_all_sontarih_value_3_2=result;
  })
  await new Promise(resolve => setTimeout(resolve, 1000));

  let toplam_oazkayank_all_sontarih_value_3_3;
  const toplam_ozkaynak_all_sontarihh_3_3=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div`));
  toplam_ozkaynak_all_sontarihh_3_3.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
    toplam_oazkayank_all_sontarih_value_3_3=result;
  })
  await new Promise(resolve => setTimeout(resolve, 1000));

  let toplam_oazkayank_all_sontarih_value_3_4;
  const toplam_ozkaynak_all_sontarihh_3_4=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[4]/div/div`));
  toplam_ozkaynak_all_sontarihh_3_4.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
    toplam_oazkayank_all_sontarih_value_3_4=result;
  })
  await new Promise(resolve => setTimeout(resolve, 1000));

  let toplam_oazkayank_all_sontarih_value_3_5;
  const toplam_ozkaynak_all_sontarihh_3_5=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[5]/div/div`));
  toplam_ozkaynak_all_sontarihh_3_5.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
    toplam_oazkayank_all_sontarih_value_3_5=result;
  })
  await new Promise(resolve => setTimeout(resolve, 1000));

  let toplam_oazkayank_all_sontarih_value_3_6;
  const toplam_ozkaynak_all_sontarihh_3_6=await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/div`));
  toplam_ozkaynak_all_sontarihh_3_6.getText().then(result => {               //*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[3]/div/div
    toplam_oazkayank_all_sontarih_value_3_6=result;
  })
  await new Promise(resolve => setTimeout(resolve, 1000));



  let arr_time=[
    toplam_oazkayank_all_sontarih_value_1_2,
    toplam_oazkayank_all_sontarih_value_1_3,
    toplam_oazkayank_all_sontarih_value_1_4,
    toplam_oazkayank_all_sontarih_value_1_5,
    toplam_oazkayank_all_sontarih_value_1_6,
    toplam_oazkayank_all_sontarih_value_2_2,
    toplam_oazkayank_all_sontarih_value_2_3,
    toplam_oazkayank_all_sontarih_value_2_4,
    toplam_oazkayank_all_sontarih_value_2_5,
    toplam_oazkayank_all_sontarih_value_2_6,
    toplam_oazkayank_all_sontarih_value_3_2,
    toplam_oazkayank_all_sontarih_value_3_3,
    toplam_oazkayank_all_sontarih_value_3_4,
    toplam_oazkayank_all_sontarih_value_3_5,
    toplam_oazkayank_all_sontarih_value_3_6,
    ];


  return arr_time;
},



  

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