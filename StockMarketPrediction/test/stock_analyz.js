//module.exportsconst { Base_URL, Second_URL, SuperAdmin_email, SuperAdmin_password, TenantAdmin_email, TenantAdmin_password, User_email, User_password} = require("./variables.js");

const {
    toplam_oazkayank,
    Dönem_Net_Kar_Zararı,
    Toplam_Kısa_Vadeli_Yükümlülükler,
    Toplam_Uzun_Vadeli_Yükümlülükler,
    Nakit_ve_Nakit_Benzerleri,
    ticari_alacaklar,
    NakitveNakitBenzerleri_all,
    test} 
    = require("./financial_statement_values.js");




    
    export function test() {
      console.log("first")
    }


    /*
module.exports = {

 nakitakisi_graph:async function() {



    return "hello";
},

  };

*/

console.log(test);