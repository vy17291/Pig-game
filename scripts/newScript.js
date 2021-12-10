let player = 1;

const newGame = document.querySelector('.new-game'); 
const dice = document.querySelector('.dice'); 
const roll = document.querySelector('.roll-dice'); 
const hold = document.querySelector('.hold'); 
const result = document.querySelector('#popup');

let playerGround = document.querySelector(`#player-${player}`);
let playerScore = document.querySelector(`#player${player}score`);
let playerCurrent = document.querySelector(`#player${player}current`); 

console.log(playerGround);

let randomNumber;
function getElemen(player) {
    playerGround = document.querySelector(`#player-${player}`);
    playerScore = document.querySelector(`#player${player}score`);
    playerCurrent = document.querySelector(`#player${player}current`); 
}
function changePlayer() {
    if (player == 1) {
        player = 2;
    } else { 
        player = 1 
    }
}
const rollFunc = function(play) {
    getElemen(play);
    
    let current = parseInt(playerCurrent.textContent);
    //change active playground
    playerGround.classList.add('active');
    console.log(`Player ${player}`,playerGround.classList);

    //Get random number
    randomNumber = Math.trunc(Math.random() * 6) + 1;

    //show dice content
    dice.textContent = randomNumber;

    if (randomNumber != 1) {
        current += randomNumber;
        playerCurrent.textContent = current;
    } else {
        playerGround.classList.toggle("active");
        console.log(`Player ${player}`,playerGround.classList);
        current = 0;
        playerCurrent.textContent = current;
        changePlayer();
         //change active playground
    }
}
const holdFunc = function(play) {
    getElemen(play);

    //Set current score add to total score
    let playerInt = parseInt(playerScore.textContent) + parseInt(playerCurrent.textContent);
    playerScore.textContent = playerInt;
    console.log(`player ${play}, playerInt${playerInt}, playerCurrent ${playerCurrent}`);

    //check score 100 is win     //if not change player
    if (parseInt(playerScore.textContent)>= 100) {
        console.log(`player ${player} win`);
        result.classList.remove('hidden');
        result.textContent = `Player ${player} win`;
        roll.disabled = true;
        hold.disabled = true;
    }   else {
        changePlayer();
        playerGround.classList.toggle("active");
        playerCurrent.textContent = 0;
        playerInt = 0;
        current = 0;
    }
}    

const restart = function() {
    result.classList.add('hidden');
    dice.textContent = "?";
    playerScore.textContent = 0;
    playerCurrent.textContent = 0;
    changePlayer();
    getElemen(player);
    playerScore.textContent = 0;
    playerCurrent.textContent = 0;
    roll.disabled = false;
    hold.disabled = false;

}
roll.addEventListener('click', function() {
    rollFunc(player)
})

hold.addEventListener('click', function() {
    holdFunc(player);
})
newGame.addEventListener('click', function() {
    restart();
})