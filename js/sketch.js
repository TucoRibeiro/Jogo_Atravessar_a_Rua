

function setup() {
  createCanvas(640, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentoCarro();
  movimentoAtor();
  loopCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}
