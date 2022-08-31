const main = document.getElementById("main");
const placarTag = document.getElementById("placar");
let click1 = null;
let click2 = null;
let encontrados = 0;
let placar = 0;


renderCards();



function renderCards() {
  const arrDuplicado = [...personagens, ...personagens];
  const personagensEmbaralhados = shuffleArray(arrDuplicado);
  console.log(personagensEmbaralhados);

  for (let i = 0; i < personagensEmbaralhados.length; i++) {
    let card = document.createElement("img");

    card.id = personagensEmbaralhados[i].id

    card.addEventListener("click", clickCard)

    card.src = "./src/img/QuestionBlock.png";
    main.appendChild(card);
  }
}

function clickCard(event) {
  const imgClicada = event.target
  let idClicado = event.target.id;

  let personagemClicado = personagens.find((elemento) => elemento.id == idClicado);

  imgClicada.src = personagemClicado.img;

  if (click1 == null) {
    click1 = imgClicada
  }
  else {
    click2 = imgClicada;
    testPar()
  }

}
function testPar() {
  if (click1.id == click2.id) {
    console.log("encontrei um par");
    encontrados++
    click1 = null;
    click2 = null;


    if (encontrados == 4) {
      placar++;
      placarTag.innerHTML = placar;
      encontrados = 0;
      setTimeout(() => {
        main.innerHTML = "";
        renderCards();
      }, 2000);
    }

  } else {
    setTimeout(() => {


      click1.src = "./src/img/QuestionBlock.png";
      click2.src = "./src/img/QuestionBlock.png";
      click1 = null;
      click2 = null;
    }, 2000);

    console.log("Não é par")
  }
}


function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
