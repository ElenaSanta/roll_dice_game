document.getElementById("rollButton").addEventListener("click",function() {
function rollDice() {
    return Math.ceil(Math.random() * 6);
}

var number=1
function diceimage(num) {
    switch(num){
        case 1:
            number=1
            return "num1.png";
        case 2:
            number=2
            return "num2.png";
        case 3:
            number=3
            return "num3.png";
        case 4:
            number=4
            return "num4.png";
        case 5:
            number=5
            return "num5.png";
        case 6:
            number=6
            return "num6.png";
        default: return "num1.png";
    
    }
}
    
var dice1=document.getElementById("dice1");
var dice2=document.getElementById("dice2");
var resultText = document.getElementById("result");

dice1.src="dice-game.gif";
dice2.src="dice-game.gif";

setTimeout(function() {
    var roll1 = rollDice();
    var roll2 = rollDice();

    dice1.src = diceimage(roll1);
    dice2.src = diceimage(roll2);
    var sum=roll1+roll2

    if (sum%2===0) {
        resultText.textContent = "Κέρδισες!";
        resultText.style.color = "green";
    } else {
        resultText.textContent = "Έχασες!";
        resultText.style.color = "red";
    }
}, 1000);
});