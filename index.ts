//Tabata  é um treino de exercicios intervalados que consistem em 8 ciclos com 20 segundos de atividade e 10 segundos de descanso. Crie uma aplicação que ofereça ao usuário um temporizador com essas caracteristicas

import './style.css';

let counter: number = 21;

let tabataTimer = document.getElementById('title');
tabataTimer.innerHTML = `<h1>Tabata Timer</h1>`;
function startTimer() {
  let intervalId = setInterval(() => {
    counter = counter - 1;
    console.log(counter);
    document.getElementById('timer').innerHTML = `${counter}`;
    if (counter === 0) clearInterval(intervalId);
  }, 1000);
  counter = 21;
}

function stopTimer() {
  console.log(`chegou`);
}

document.getElementById(`start-button`).addEventListener(`click`, () => {
  startTimer();
});

document.getElementById(`stop-button`).addEventListener(`click`, () => {
  stopTimer();
});
