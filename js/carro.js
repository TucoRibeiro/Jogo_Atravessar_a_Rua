let yCarros = [40, 96, 150, 210, 270, 318];
let xCarros = [650, 650, 650, 650, 650, 650];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
 for(let i = 0; i < imagemCarros.length; i = i + 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

function movimentoCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function loopCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    if(verificaSePassou(xCarros[i])){
    xCarros[i] = 650;
    }
  }
}

function verificaSePassou(xCarros){
  return xCarros < -40;
}