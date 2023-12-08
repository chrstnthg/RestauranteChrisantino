// Retorne no console todas as imagens do site

const img = document.querySelectorAll("img");
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagensMassas = document.querySelectorAll('img[src^="img/imagem"]');

console.log(imagensMassas);

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#massas"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const h2Massas = document.querySelector(".massas-descricao h2");
const h2Massasmassas = massas.querySelector("h2");
console.log(h2Massas);
console.log(massas);

// Selecione o último p do site

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[--paragrafos.length]);
