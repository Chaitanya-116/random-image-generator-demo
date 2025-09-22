const container = document.querySelector('.container');
const rows = 5;

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img');
    img.src = `https://picsum.photos/${getRandomNr()}/${getRandomNr()}?random=${Date.now() + i}`;
    img.alt = 'Random Image';
    container.appendChild(img);
}

function getRandomNr() {
    return Math.floor(Math.random() * 300) + 300; // sizes 300-600
}
