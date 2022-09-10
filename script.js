const body = document.querySelector("body");

// HEADER
const header = document.createElement("header");
body.appendChild(header);

// CABEÇALHO == VIRTUAL MARKET
const h1 = document.createElement("h1");
header.appendChild(h1);
h1.classList.add("title1");
h1.innerText = "Virtual Market";
h1.classList.add("container");

// MAIN
const main = document.createElement("main");
main.classList.add("container");
body.appendChild(main);

// ITEM E VALOR - CABEÇAHO
const sectionName = document.createElement("section");
sectionName.classList.add("sectionName")
main.append(sectionName);
const pItem = document.createElement("p");
const pValue = document.createElement("p");
sectionName.append(pItem, pValue);
pItem.innerText = "Item";
pValue.innerText = "Valor";

// UL
const ul = document.createElement("ul");
ul.classList.add("productsList");
main.appendChild(ul);

function somaCart(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i].price;
  }
  return sum;
}
let somaTotal = somaCart(productsCart);

function renderItems(a) {
  for (let i = 0; i < a.length; i++) {
    const li = document.createElement("li");
    li.classList.add("productLine");
    const p = document.createElement("p");
    const span = document.createElement("span");
    p.innerText = a[i].name;
    span.innerText = "R$ " + a[i].price;
    li.append(p, span);
    ul.appendChild(li);
  }
}
renderItems(productsCart);

// SESSÃO FINAL VALOR TOTAL E BOTÃO DE FINALIZAR COMPRA
const section = document.createElement("section");
section.classList.add("sectionTotal")
main.appendChild(section);
const pSoma = document.createElement("p");
const spanSoma = document.createElement("span");
const divTotal = document.createElement("div");
divTotal.classList.add("divTotal")
const button = document.createElement("button");
section.append(divTotal, button);
divTotal.append(pSoma, spanSoma);
pSoma.innerText = "Total";
spanSoma.innerText = "R$ " + somaTotal;
// console.log(spanSoma)
button.innerText = "Finalizar compra";
