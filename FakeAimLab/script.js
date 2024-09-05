let tempoInicio;
let tempoReacao;
const circulo = document.getElementById('circulo');
const tempoReacaoDisplay = document.getElementById('tempoReacao');

function aparecerCirculo() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 80);

    circulo.style.left = `${x}px`;
    circulo.style.top = `${y}px`;

    circulo.classList.add('aparecer');
    tempoInicio = new Date().getTime();
}

function esconderCirculo() {
    circulo.classList.remove('aparecer');
    tempoReacao = new Date().getTime() - tempoInicio;
    tempoReacaoDisplay.textContent = tempoReacao;

    setTimeout(aparecerCirculo, Math.random() * 200 + 1000);
}

circulo.addEventListener('click', esconderCirculo);

setTimeout(aparecerCirculo, Math.random() * 200 + 1000);