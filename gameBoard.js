export default class gameBoard {
  constructor(pos) {
    this.pos = pos
    this.jogadas = 0
    this.jogador = 0
    this.fimDeJogo = false
    this.empate = false;
    this.iniciarNovoJogo()
  }
  get fimGame() {
    return this.fimDeJogo
  }
  get posicoes() {
    return this.pos
  }
  mudaJogador() {
    if (this.jogador == 0) this.jogador = 1
    else this.jogador = 0
  }
  inserirElemento(element) {
    if (element.innerHTML == ' ' && this.fimDeJogo == false) {
      if (this.jogadas % 2 == 0) {
        element.classList.add('xis')
        element.innerHTML = 'x'
      } else {
        element.classList.add('bolinha')
        element.innerHTML = 'o'
      }
      this.verificaJogo()
      this.jogadas++
      this.mudaJogador()
    }
  }
  preencherGameBoard() {
    this.posicoes.forEach((pos) => {
      pos.innerHTML = ' '
    })
  }

  iniciarNovoJogo() {
    this.jogadas = 0
    this.jogador = 0
    this.fimDeJogo = false
    this.empate = false
    this.preencherGameBoard()
    this.posicoes.forEach((pos) => {
      pos.classList.remove('bolinha')
      pos.classList.remove('xis')
      pos.innerHTML = ' '
    })
  }
  resultado() {
    let ganhador = this.jogador % 2 == 0 ? 'O' : 'X';
    console.log("caiu aqui");
    return this.empate ? "Empate" : `${ganhador} venceu`
  }
  verificaJogo() {
    // lado horizontal
    for (let i = 0; i < 9; i += 3) {
      if (
        this.posicoes[i].innerHTML == this.posicoes[i + 1].innerHTML &&
        this.posicoes[i + 2].innerHTML == this.posicoes[i].innerHTML &&
        this.posicoes[i].innerHTML != ' '
      ) {
        this.fimDeJogo = true
        break
      }
    }
    // lado vertical
    for (let i = 0; i < 3; i++) {
      if (
        this.posicoes[i].innerHTML == this.posicoes[i + 3].innerHTML &&
        this.posicoes[i].innerHTML == this.posicoes[i + 6].innerHTML &&
        this.posicoes[i].innerHTML != ' '
      ) {
        this.fimDeJogo = true
        break
      }
    }
    // diagonais primaria
    if (
      this.posicoes[0].innerHTML == this.posicoes[4].innerHTML &&
      this.posicoes[0].innerHTML == this.posicoes[8].innerHTML &&
      this.posicoes[0].innerHTML != ' '
    ) {
      this.fimDeJogo = true
    }
    // diagonal secundaria
    if (
      this.posicoes[2].innerHTML == this.posicoes[4].innerHTML &&
      this.posicoes[2].innerHTML == this.posicoes[6].innerHTML &&
      this.posicoes[2].innerHTML != ' '
    ) {
      this.fimDeJogo = true
    }
    if (this.jogadas >= 8 && this.fimDeJogo == false) {
      this.empate = true;
      this.fimDeJogo = true;
    }
    if (this.fimDeJogo || this.empate) this.resultado()
  }
}
