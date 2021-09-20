const localInput = document.querySelector('#local-area');
const localTexto = document.querySelector('#local-texto');
const localContador = document.querySelector('#local-contador');
const gEstilo = ['newspaper', 'magazine1', 'magazine2'];
const gTamanho = ['medium', 'big', 'reallybig'];
const gRotacao = ['rotateleft', 'rotateright'];
const gInclicanacao = ['skewleft', 'skewright'];
let cont = 0;

function gerarClasses() {
  const gEstiloNew = gEstilo[Math.floor(Math.random() * gEstilo.length)];
  const gTamanhoNew = gTamanho[Math.floor(Math.random() * gTamanho.length)];
  const gRotacaoNew = gRotacao[Math.floor(Math.random() * gRotacao.length)];
  const gInclicanacaoNew = gInclicanacao[Math.floor(Math.random() * gInclicanacao.length)];
  return `${gEstiloNew} ${gTamanhoNew} ${gRotacaoNew} ${gInclicanacaoNew}`;
}

const inputText = document.createElement('input');
inputText.id = 'carta-texto';
inputText.className = 'form-control';
localInput.appendChild(inputText);

const createContador = document.createElement('p');
createContador.id = 'carta-contador';
localContador.appendChild(createContador);

const pTexto = document.createElement('p');
pTexto.id = 'carta-gerada';
localTexto.appendChild(pTexto);

function criarText() {
  cont = 0;
  if (inputText.value === '' || inputText.value === ' ') {
    pTexto.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  pTexto.innerHTML = '';
  const valorInput = inputText.value;
  const valorSeparado = valorInput.split(' ');
  for (let a = 0; a < valorSeparado.length; a += 1) {
    const sTexto = document.createElement('span');
    sTexto.className = gerarClasses();
    sTexto.innerHTML = valorSeparado[a];
    pTexto.appendChild(sTexto);
    cont += 1;
  }
  createContador.innerText = cont;
}

const bCriarCarta = document.createElement('button');
bCriarCarta.id = 'criar-carta';
bCriarCarta.className = 'btn btn-success'
bCriarCarta.innerText = 'Criar Carta';
localInput.appendChild(bCriarCarta);
bCriarCarta.addEventListener('click', criarText);
