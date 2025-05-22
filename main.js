// Script para gerar folhas dinamicamente
document.addEventListener('DOMContentLoaded', function() {
  const folhasContainer = document.getElementById('folhas');
  if (!folhasContainer) return;

  const folhasCount = 15;
  for (let i = 0; i < folhasCount; i++) {
    const folha = document.createElement('div');
    folha.classList.add('folha');
    // Tamanho aleatório entre 10px e 30px
    const size = Math.random() * 20 + 10;
    folha.style.width = `${size}px`;
    folha.style.height = `${size}px`;
    // Posição inicial aleatória
    folha.style.left = `${Math.random() * 100}%`;
    // Duração da animação aleatória
    folha.style.animationDuration = `${Math.random() * 10 + 10}s`;
    // Atraso inicial aleatório
    folha.style.animationDelay = `${Math.random() * 5}s`;
    folhasContainer.appendChild(folha);
  }
});

// Validação do formulário antes de enviar
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function(e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        alert("Por favor, preencha todos os campos corretamente!");
      }
    });
  }
});