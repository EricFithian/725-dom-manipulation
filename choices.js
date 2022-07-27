let choice = prompt('Please choose A, B or C');
let secondChoice = prompt('This is also here');

console.log(choice);

let domManipulation = document.querySelector('h1');
if(choice.toUpperCase() === 'A' || choice.toUpperCase() === 'B' || choice.toUpperCase() === 'C') {
    domManipulation.innerHTML = `You chose ${choice}`
    domManipulation.classList.add('orange')
} else {
    domManipulation.innerHTML = "You're a jerk, stop ignoring my instructions!!!!"
}

