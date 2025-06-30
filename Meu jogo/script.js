const dino = document.querySelector(".dino");
const terra = document.querySelector('.terra');
const star = document.querySelector('.star'); 
const pontuacaoElement = document.getElementById('pontuacao');
const terra2 = document.querySelector('.terra2');


let pontuacao = 0;
let jogoAtivo = true;

const pular = () => {
    if (!jogoAtivo) return;
    dino.classList.add('pular');

    setTimeout(() => {
        dino.classList.remove('pular');
    }, 500);
};

const pontuar = setInterval(() => {
    pontuacao += 1;
    pontuacaoElement.innerText = `Pontuação: ${pontuacao}`;
}, 100);

const loop = setInterval(() => {
    const terraposicao = terra.offsetLeft;
    const terra2posicao = terra2.offsetLeft;
    const dinoposicao = parseFloat(window.getComputedStyle(dino).bottom.replace('px', ''));
    const starposicao = terra.offsetLeft;

    if ((terraposicao <= 125 && terraposicao > 0 && dinoposicao < 60) ||
       (terra2posicao <= 125 && terra2posicao > 0 && dinoposicao < 60)) {
        dino.style.animation = 'none';
        terra.style.animation = 'none';
        star.style.animation = 'none';

        terra.style.left = `${terraposicao}px`;
        star.style.right = `${starposicao}px`;
        dino.style.bottom = `${dinoposicao}px`;

        dino.src = 'images/over.png';
        dino.style.width = '120px';
        dino.style.marginLeft = '35px';
        
        clearInterval(loop);
        clearInterval(pontuar);
        jogoAtivo = false;
        terra2.style.animation = 'none';
        terra2.style.left = `${terra2posicao}px`;
        document.getElementById('restartBtn').style.display = 'block';
    }
}, 10);

document.addEventListener("keydown", pular);
