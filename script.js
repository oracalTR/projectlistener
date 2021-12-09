const btn = document.getElementById('btn');
const inputText = document.getElementById('text');
const square = document.getElementById('square');
const ebtn = square.querySelector('#e_btn');
const circle = square.querySelector('#circle');
const range = document.getElementById('range');
const rangeSpan = document.getElementById('range-span');

rangeSpan.textContent = range.value;

btn.addEventListener('click', () => {
    square.style.backgroundColor = inputText.value;
    ebtn.style.display = 'none';
});

range.addEventListener('input', () => {
    rangeSpan.textContent = range.value;
    circle.style.height = range.value + '%';
    circle.style.width = range.value + '%';
});

console.log(range);
console.log(rangeSpan);