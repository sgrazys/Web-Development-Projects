let lastLi = document.querySelector('ul').lastElementChild;
lastLi.innerHTML = '<strong>Tauras</strong> ir <em>Jokubas</em>';

let linkedListItem = (document.querySelector('li a').style.color = 'red');

let btnEl = document.querySelector('button');
btnEl.style.backgroundColor = 'yellow';
btnEl.style.border = 'none';
btnEl.style.outline = 'solid 1px purple';
btnEl.style.borderRadius = '8px';
btnEl.style.padding = '0.5rem 1.2rem';

let h1El = document.querySelector('h1');
h1El.classList.toggle('huge');
