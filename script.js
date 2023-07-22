function changePage(pageIndex) {
    var pages = document.getElementsByClassName("page");
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
    }
    var selectedPage = document.getElementById("page" + pageIndex);
    selectedPage.style.display = "block";
  }
  
  // Exibe a página inicial por padrão ao carregar a página
  window.addEventListener('DOMContentLoaded', function() {
    changePage(1);
    
    // Adicione aqui os efeitos e funcionalidades adicionais
  });

  const rainbowBorder = document.querySelector('.rainbow-border');

function moveRainbowBorder() {
  let position = 0;
  const speed = 0.1;

  function updatePosition() {
    position += speed;
    if (position >= 100) {
      position = 0;
    }

    rainbowBorder.style.backgroundPosition = `${position}% 50%`;
    requestAnimationFrame(updatePosition);
  }

  updatePosition();
}

moveRainbowBorder();

function enviarDepoimento() {
  const depoimentoText = document.getElementById("depoimento").value;
  if (depoimentoText.trim() === "") {
    alert("Por favor, digite seu depoimento antes de enviar.");
    return;
  }

  const depoimentoDiv = document.createElement("div");
  depoimentoDiv.classList.add("depoimento");
  depoimentoDiv.textContent = depoimentoText;

  const depoimentosContainer = document.getElementById("depoimentos-container");
  depoimentosContainer.appendChild(depoimentoDiv);

  document.getElementById("depoimento").value = "";
}

