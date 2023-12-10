let randomNum1 = Math.floor(Math.random() * 6 + 1);
let randomNum2 = Math.floor(Math.random() * 6 + 1);

const diceImg1El = document.querySelector('.img1');
const diceImg2El = document.querySelector('.img2');
const h1El = document.querySelector('h1');

diceImg1El.setAttribute('src', `./images/dice${randomNum1}.png`);
diceImg2El.setAttribute('src', `./images/dice${randomNum2}.png`);

if (randomNum1 > randomNum2) {
	h1El.innerHTML = `🚩 Player 1 Wins!`;
} else if (randomNum2 > randomNum1) {
	h1El.innerHTML = `Player 2 Wins! 🚩`;
} else {
	h1El.innerHTML = `Draw`;
}
