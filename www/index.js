
var keyPhone = "Phone";
var valuePhone = "S7";
var keyWallet = "Wallet";
var valueWallet = "Money";
var keyTrainPass = "Train Pass";
var valueTrainPass = "Worcester";
var keyKeys = "Keys";
var valueKeys = "House";
var keySnack = "Snack";
var valueSnack = "Chocolate";

window.localStorage.setItem(keyPhone, valuePhone);
window.localStorage.setItem(keyWallet, valueWallet);
window.localStorage.setItem(keyTrainPass, valueTrainPass);
window.localStorage.setItem(keyKeys, valueKeys);
window.localStorage.setItem(keySnack, valueSnack);

var getPhone = window.localStorage.getItem(keyPhone);
var getWallet = window.localStorage.getItem(keyWallet);
var getTrainPass = window.localStorage.getItem(keyTrainPass);
var getKeys = window.localStorage.getItem(keyKeys);
var getSnack = window.localStorage.getItem(keySnack);

//function carryPhone() {
$("#myText").text("In my bag I always carry my" + keyPhone);
}

window.alert(keyPhone);

var chocBar = {
    "company" : "Cadbury",
    "brandName" : "Dairy Milk",
    "ingredients" : {
        "calaries" : "240 kcal",
        "fat" : "14g",
        "sugar" : "25g"
    }
}

console.log (
chocBar.company +
    " sell " + 
    chocBar.brandName);
)

var chocBarString = JSON.stringify(chocBar);
window.localStorage.setItem("ingredients",HTMLAnchorElement);

var getChoc = window.localStorage.getItem("ingredients");
var chocJSON = JSON.parse(getChoc);
