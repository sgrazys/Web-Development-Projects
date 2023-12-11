const drumsBtnEl = document.querySelectorAll('.drum');

for (const drum of drumsBtnEl) {
	drum.addEventListener('click', function () {
		makeSound(drum.innerHTML);
		btnAnimation(drum.innerHTML);
	});
}

document.addEventListener('keydown', function (e) {
	makeSound(e.key);
	btnAnimation(e.key);
});

function makeSound(letter) {
	switch (letter) {
		case 'w':
			let crash = new Audio('sounds/crash.mp3');
			crash.play();
			break;

		case 'a':
			let kick = new Audio('sounds/kick-bass.mp3');
			kick.play();
			break;

		case 's':
			let snare = new Audio('sounds/snare.mp3');
			snare.play();
			break;

		case 'd':
			let tom1 = new Audio('sounds/tom-1.mp3');
			tom1.play();
			break;

		case 'j':
			let tom2 = new Audio('sounds/tom-2.mp3');
			tom2.play();
			break;

		case 'k':
			let tom3 = new Audio('sounds/tom-3.mp3');
			tom3.play();
			break;

		case 'l':
			let tom4 = new Audio('sounds/tom-4.mp3');
			tom4.play();
			break;

		default:
			console.log(letter);
	}
}

function btnAnimation(currentKey) {
	let activeBtn = document.querySelector('.' + currentKey);

	activeBtn.classList.add('pressed');

	setTimeout(function () {
		activeBtn.classList.remove('pressed');
	}, 100);
}

// class HouseKeeper {
// 	constructor(yearsOfExperience, name, cleaningRepertoire) {
// 		(this.yearsOfExperience = yearsOfExperience),
// 			(this.name = name),
// 			(this.cleaningRepertoire = cleaningRepertoire),
// 			(this.clean = function () {
// 				alert('Cleaning in progress...');
// 			});
// 	}
// }

// let huoseKeeper1 = new HouseKeeper(12, 'Samantha', ['bedroom', 'lobby']);

// console.log(huoseKeeper1.name);
// huoseKeeper1.clean();
