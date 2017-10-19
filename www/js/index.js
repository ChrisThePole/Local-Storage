
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

var keyDrink = "drink";
var valueDrink = window.localStorage.getItem(keyDrink);