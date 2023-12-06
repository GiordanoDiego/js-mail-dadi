/*
console.log('nomeVariabile', nomeVariabile, typeof nomeVariabile);

document.getElementById('idHtml').innerHTML = noveVariabileJS;

//valore input 
    userName = document.getElementById('userName');
    userNameValue = userName.value;

//controllare se il valore è Nan
    if(isNaN(kmValue))

*/

/*
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
 */





// console.log('dicePlayer', dicePlayer, typeof dicePlayer);
// console.log('diceBank', diceBank, typeof diceBank);

// scrivo i dadi nell'html

const containerResult = document.querySelector('.result');
const containerBancDice = document.querySelector('.bank_dice');
const containerPlayerDice = document.querySelector('.player_dice');



const myButton = document.querySelector('.myButton');
const myButton2 = document.querySelector('.myButton2');

myButton.addEventListener('click', function(){
    const dicePlayer = Math.floor(Math.random() * (6- 1 + 1)) + 1 ;
    const diceBank = Math.floor(Math.random() * (6 - 1 + 1)) + 1 ;
    containerPlayerDice.innerHTML = dicePlayer;
    containerBancDice.innerHTML = diceBank; 
    
    if (diceBank > dicePlayer){
        console.log('Il banco ha vinto!');
        containerResult.innerHTML = 'Il banco ha vinto';
    }
    else if (diceBank < dicePlayer){
        console.log('Hai vinto!!!');
        containerResult.innerHTML = 'Hai vinto!!!';
    }
    else{
        console.log('Drawn!');
        containerResult.innerHTML = 'Drawn!';
    }
})

myButton2.addEventListener('click', function(){
    containerResult.innerHTML = '';
    containerPlayerDice.innerHTML = '';
    containerBancDice.innerHTML = '';
})