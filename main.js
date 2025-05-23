document.addEventListener('DOMContentLoaded', function() {
  const folhasContainer = document.getElementById('folhas');
  if (!folhasContainer) return;

  const folhasCount = 30;
  for (let i = 0; i < folhasCount; i++) {
    const folha = document.createElement('div');
    folha.classList.add('folha');

    const size = Math.random() * 20 + 10; // 10px a 30px
    folha.style.width = `${size}px`;
    folha.style.height = `${size}px`;
    folha.style.left = `${Math.random() * 100}%`;

    const duration = Math.random() * 10 + 10; // 10s a 20s
    const delay = Math.random() * 5; // 0s a 5s
    folha.style.animationDuration = `${duration}s`;
    folha.style.animationDelay = `${delay}s`;

    folha.style.transform = `rotate(${Math.random() * 360}deg)`;

    folhasContainer.appendChild(folha);
  }
});
