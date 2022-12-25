function numOfSides() {
    let sides;
    do {
        sides = prompt("enter number of sides not bigger than 100");
        number = true;
        if (isNaN(Number(sides)) || Number(sides) > 100) {
            number = false;
        }
    } while (!number);
    return Number(sides);
}

function createBoxes(sides) {
    for (let i = 0; i < sides * sides; i++) {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        container.appendChild(box);
    }
}

const container = document.querySelector('#container');
const btn = document.querySelector('#btn');

let sides = 16;
createBoxes(sides);
container.setAttribute('style', `grid-template-columns: repeat(${sides}, 2fr); grid-template-rows: repeat(${sides}, 2fr);`);

container.addEventListener('mouseover', e => {
    e.target.classList.add('black');
})

btn.addEventListener('click', () => {
    sides = numOfSides();
    container.setAttribute('style', `grid-template-columns: repeat(${sides}, 2fr); grid-template-rows: repeat(${sides}, 2fr);`);
    container.replaceChildren();
    createBoxes(sides);
})