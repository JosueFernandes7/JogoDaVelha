const ganhador = document.querySelector('.winner')
const positions = document.querySelectorAll(".defaultElement");

positions.forEach((pos) => {
  pos.addEventListener("click", insertElement);
});

let jogadas = 0;
let jogador = 0;
function insertElement(event) {
  jogadas++
  const item = event.target;
  let winner = false;
  let empate = false;
  if (jogadas == 9) empate = true;

  if (!item.classList.contains("ativo")) {
    if (jogador % 2 == 0) {
      item.classList.add("equix", "ativo");
      jogador = 1;
    } else {
      item.classList.add("circle", "ativo");
      jogador = 0;
    }
    // Eixo X
    for (let i = 0; i < positions.length; i += 3) {
      if (
        (positions[i].classList.contains("circle") &&
          positions[i + 1].classList.contains("circle") &&
          positions[i + 2].classList.contains("circle")) ||
        (positions[i].classList.contains("equix") &&
          positions[i + 1].classList.contains("equix") &&
          positions[i + 2].classList.contains("equix"))
      ) {
        winner = true;
        if(winner) break;
      }
    }
    // Eixo Y
    for (let i = 0; i < 3; i ++) {
      if (
        (positions[i].classList.contains("circle") &&
          positions[i + 3].classList.contains("circle") &&
          positions[i + 6].classList.contains("circle")) ||
        (positions[i].classList.contains("equix") &&
          positions[i + 3].classList.contains("equix") &&
          positions[i + 6].classList.contains("equix"))
      ) {
        winner = true;
        if(winner) break;
      }
    }
    // vertical left
    if (
      (positions[0].classList.contains("circle") &&
        positions[4].classList.contains("circle") &&
        positions[8].classList.contains("circle")) ||
      (positions[0].classList.contains("equix") &&
        positions[4].classList.contains("equix") &&
        positions[8].classList.contains("equix"))
    ) {
      winner = true;
    }
    // vertical right
    if (
      (positions[2].classList.contains("circle") &&
        positions[4].classList.contains("circle") &&
        positions[6].classList.contains("circle")) ||
      (positions[2].classList.contains("equix") &&
        positions[4].classList.contains("equix") &&
        positions[6].classList.contains("equix"))
    ) {
      winner = true;
    }

    if(winner) {
      if(jogador == 0) {
        ganhador.innerText = 'O VENCEU';
        ganhador.classList.add('ativo');
      } else {
        ganhador.innerText = 'X VENCEU';
        ganhador.classList.add('ativo');
      }
      // remove o event
      positions.forEach(pos => {
        pos.removeEventListener('click',insertElement);
      })
    }
    if(empate) {
      ganhador.innerText = 'EMPATE';
      ganhador.classList.add('ativo');
      // remove o event
      positions.forEach(pos => {
        pos.removeEventListener('click',insertElement);
      })

    }
  }
}
