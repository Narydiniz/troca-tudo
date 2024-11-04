// Função para exibir o modal de login
function mostrarModal() {
  document.getElementById('login-modal').style.display = 'block';
}

// Função para fechar o modal de login
function fecharModal() {
  document.getElementById('login-modal').style.display = 'none';
}

// Fecha o modal ao clicar fora do conteúdo
window.onclick = function(event) {
  const modal = document.getElementById('login-modal');
  if (event.target === modal) {
      fecharModal();
  }
};