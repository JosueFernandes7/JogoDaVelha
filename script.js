import gameBoard from './gameBoard.js';

const posicoes = document.querySelectorAll('.defaultElement')
let vencedor = document.querySelector('.winner')
let novoJogo = document.querySelector('.novoJogo');
let jogo = new gameBoard(posicoes);

posicoes.forEach((pos) => {
  pos.addEventListener('click', comecarJogo)
})


let jogar = document.querySelector('.sim')
let naoJogar = document.querySelector('.nao')

let possibilidadesFinais = [jogar, naoJogar];
possibilidadesFinais.forEach((e) => {
  e.addEventListener('click', (e) => {
    let alvo = e.target

    if (alvo == jogar) {
      jogo.iniciarNovoJogo()
      vencedor.innerText = ' ';
    } else if (alvo == naoJogar) {
      vencedor.innerText = 'Que pena :C'
      posicoes.forEach((pos) => {
        pos.removeEventListener('click',comecarJogo)
      })
    }
    novoJogo.style.display = 'none'
  })
})

  function comecarJogo(e) {
    let pos = e.target
    jogo.inserirElemento(pos)
    if (jogo.fimGame) {
      vencedor.style.opacity = 1
      vencedor.innerText = jogo.resultado()
  
      let time = 0
      // passar 2 segundos
      let timer = setInterval(() => {
        if (time > 1000) {
          clearInterval(timer)
          novoJogo.style.display = 'block'
        }
        time += 1000
      }, 1000)
    }
  }