let gemElement = document.getElementById("gems");
let gemButton = document.getElementById("gemButton");
let cartButton = document.getElementById("cartButton");
let cartAmmountElement = document.getElementById("cartElement");
let UpgradeCartAmmountElement = document.getElementById("upgradeCartElement")
let minerButton = document.getElementById("minerButton");
let saveButton = document.getElementById("saveFile");
let openButton = document.getElementById("openFile");
let minerAmmountElement = document.getElementById("minerElement");
let upgradeMinerAmmountElement = document.getElementById("upgradeMinerElement");
let cartPrice = document.getElementById("cartPrice");
let minerPrice = document.getElementById("minerPrice");
let resetButton = document.getElementById("resetButton");
let gemTitleElement = document.getElementById("gemTitleText");
let upgradeButton = document.getElementById("upgrade");
let gems = 0;
let clickValue = 1;
let cartValue = 1;
let cartAmmount = 7;
let cartBought = 0;
let cartBuy = false;
let minerValue = 3;
let minerAmmount = 10;
let minerBought = 0;
let minerBuy = false;
let minerCart = cartValue + minerValue;
let purchasePriceMCart = 1;
let upgrade = false;
let purchasePriceMMiner = 1;
let purchasePriceCart = 10;
let purchasePriceMiner = 20;
let totalPurchasePriceCart = purchasePriceCart;
let totalPurchasePriceMiner = purchasePriceMiner;
let upgradeCartValue = 6;
let upgradeCartAmmount = 7;
let upgradeCartBought = 0;
let upgradeCartBuy = false;
let upgradeMinerValue = 7;
let upgradeMinerAmmount = 11;
let upgradeMinerBought = 0;
let upgradeMinerBuy = false;
let diamondTitleElement = document.getElementById("diamondTitleText");
let diamondElement = document.getElementById("diamonds");
let upgradeMinerCart = upgradeCartValue + upgradeMinerValue;
let purchasePriceUMCart = 1;
let purchasePriceUMMiner = 1;
let purchasePriceUCart = 1000;
let purchasePriceUMiner = 5000;
let totalPurchasePriceUCart = purchasePriceUCart;
let totalPurchasePriceUMiner = purchasePriceUMiner;
let upgradePrice = 10000;
let diam = document.getElementById("diam");
resetButton.addEventListener('click',function(){
    window.location.reload();
})
gemButton.addEventListener('click', function() {
    if(cartBuy == true){
        console.log("click");
        MinerCart();
    } if(minerBuy == true){
        MinerGem();
        console.log("click");
    } else{
    MinerClick();
    console.log("click");
    }
});
cartButton.addEventListener('click', function(){
    if(gems >= totalPurchasePriceCart){
        if(cartAmmount > 0){
        ButtonCart();
        }
    } else{
        
    }
});

let div = document.getElementById('gangse');
let priceDiv = document.getElementById('price');

saveButton.addEventListener('click', function(){
    console.log("save gems " + gems);
    localStorage.setItem("gems", gems);

});

openButton.addEventListener('click', function(){
    if(upgrade == true){
        gems = parseInt(localStorage.getItem("gems"));
        console.log("load gems " + gems);
        diamondElement.textContent = "Gems: " + gems;
        diamondTitleElement.textContent = "Gems: " + gems;
    } else{
        gems = parseInt(localStorage.getItem("gems"));
        console.log("load gems " + gems);
        gemElement.textContent = "Gems: " + gems;
        gemTitleElement.textContent = "Gems: " + gems;
    }
});

upgradeButton.addEventListener('click', function(){
    if(gems >= upgradePrice){
        Upgrade();
    }
});
minerButton.addEventListener('click', function(){
    if(gems >= totalPurchasePriceMiner){
        if(minerAmmount > 0){
        ButtonMiner();
        }
    } else{

    }
});
function Upgrade(){
    upgrade = true;
    gems -= gems;
    priceDiv.innerHTML = '<h1 id="diamonds">Diamond: 0<h1> <button id="saveFile">Save</button>  <button id="openFile">Open</button>'
    div.innerHTML = '<input type="image" alt="Diamonder" src="images/diamond.png" id="gemButton">';
    diam.innerHTML = '<link href="https://fonts.googleapis.com/css?family=Gochi+Hand%7cWalter+Turncoat" rel="stylesheet"><script src="http://code.jquery.com/jquery-3.2.1.js" ></script><link rel="stylesheet" href="style.css"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title id="diamondTitleText">Diamonds: 0</title>'
    gemButton = document.getElementById("gemButton");
    diamondTitleElement = document.getElementById("diamondTitleText");
    diamondElement = document.getElementById("diamonds");
    gems += 0;
    cartValue += 16;
    diamondElement.textContent = "Diamonds: " + gems;
    diamondTitleText.textContent = "Diamonds: " + gems;
    gemButton.addEventListener('click', function() {
        if(cartBuy == true){
            MinerCart();
        } if(minerBuy == true){
            MinerGem();
        } else{
            MinerClick();
        }
    });
}

function MinerClick(){
    if(upgrade == false){
        gems += clickValue;
        gemElement.textContent = "Gems: " + gems;
        gemTitleText.textContent = "Gems: " + gems;
        diamondElement.textContent = "Diamonds: " + gems;
        diamondTitleText.textContent = "Diamonds: " + gems;
    } else{
        gems += clickValue;
        diamondElement.textContent = "Diamonds: " + gems;
        diamondTitleText.textContent = "Diamonds: " + gems;
    }
}
function MinerCart(){
    if(minerBuy == true){
        if(upgrade == false){
            gems += clickValue * minerCart;
            gemElement.textContent = "Gems: " + gems;
            gemTitleText.textContent = "Gems: " + gems;
        } else{
            gems += clickValue * minerCart;    
            diamondElement.textContent = "Diamonds: " + gems;
            diamondTitleText.textContent = "Diamonds: " + gems;
            }
        } else
        if(upgrade == false){
            gems += clickValue * cartValue;
            gemElement.textContent = "Gems: " + gems;
            gemTitleText.textContent = "Gems: " + gems;
        } else{
            gems += clickValue * cartValue;    
            diamondElement.textContent = "Diamonds: " + gems;
            diamondTitleText.textContent = "Diamonds: " + gems;
            }
}
function MinerGem(){
    if(cartBuy == true){
        if(upgrade == false){
            gems += clickValue * minerCart;
            gemElement.textContent = "Gems: " + gems;
            gemTitleText.textContent = "Gems: " + gems;
        } else{
            clickValue = 1;
            gems += clickValue * minerCart;    
            diamondElement.textContent = "Diamonds: " + gems;
            diamondTitleText.textContent = "Diamonds: " + gems;
            }   
        } else{
            if(upgrade == false){
                gems += clickValue * minerValue;
                gemElement.textContent = "Gems: " + gems;
                gemTitleText.textContent = "Gems: " + gems;
            } else{
                clickValue = 1;
                gems += clickValue * minerValue;    
                diamondElement.textContent = "Diamonds: " + gems;
                diamondTitleText.textContent = "Diamonds: " + gems;
                }
        }
}
function ButtonCart(){
    cartBuy = true;
    clickValue = 1;
        cartValue += 3;
        minerCart = cartValue + minerValue;
        gems -= purchasePriceCart * purchasePriceMCart;
        cartAmmount -= 1;
        cartBought += 1;
        cartAmmountElement.textContent = "CartAmmount: " + cartBought + "/7";
        gemElement.textContent = "Gems: " + gems;
        diamondElement.textContent = "Diamonds: " + gems;
        diamondTitleText.textContent = "Diamonds: " + gems;
        purchasePriceMCart += 2;
        totalPurchasePriceCart = purchasePriceCart * purchasePriceMCart;
        cartPrice.textContent = "Price: " + totalPurchasePriceCart;
}
function ButtonMiner(){
    minerBuy = true;
    clickValue = 1;
        minerValue += 6;
        minerCart = cartValue + minerValue;
        gems -= purchasePriceMiner *purchasePriceMMiner;
        minerAmmount -= 1;
        minerBought += 1;
        minerAmmountElement.textContent = "MinerAmmount: " + minerBought + "/10";
        gemElement.textContent = "Gems: " + gems;
        diamondElement.textContent = "Diamonds: " + gems;
        diamondTitleText.textContent = "Diamonds: " + gems;
        purchasePriceMMiner += 2;
        totalPurchasePriceMiner = purchasePriceMiner * purchasePriceMMiner;
        minerPrice.textContent = "Price: " + totalPurchasePriceMiner;
}