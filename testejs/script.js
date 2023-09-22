// Obtém referências aos elementos HTML
var imagem = document.getElementById("minhaImagem");
var guia = document.getElementById("minhaGuia");

// Adiciona um evento de clique à imagem
imagem.addEventListener("click", function(event) {
  // Evita que o clique na imagem se propague para o documento
  event.stopPropagation();
  
  // Alterna a visibilidade da mini guia
  if (guia.style.display === "none") {
    guia.style.display = "block";
  } else {
    guia.style.display = "none";
  }
});

// Adiciona um evento de clique ao documento
document.addEventListener("click", function() {
  // Oculta a mini guia quando clicar em qualquer lugar da página
  guia.style.display = "none";
});

var imagem = document.getElementById("minhaImagem");
var guia = document.getElementById("minhaGuia");
var overlay = document.getElementById("overlay");

imagem.addEventListener("click", function(event) {
  event.stopPropagation();
  
  // Exibe o overlay
  overlay.style.display = "block";
  
  // Exibe a mini guia
  guia.style.display = "block";
});

overlay.addEventListener("click", function() {
  // Oculta a mini guia e o overlay
  guia.style.display = "none";
  overlay.style.display = "none";
});
