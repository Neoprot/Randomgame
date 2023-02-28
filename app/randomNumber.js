const min = 0;
const max = 1000;
const minElement = document.getElementById('menor-valor');
const maxElement = document.getElementById('maior-valor');

const rand = randomGen();

function randomGen(){
    return parseInt(Math.random() * (max + 1));
}

console.log(rand);


minElement.innerHTML = min;
maxElement.innerHTML = max;