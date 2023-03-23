function adicionaMsg(nomeItem) {
    const divSent = document.createElement("div")
    divSent.className = 'message sent'
    divSent.innerHTML = `<p>${nomeItem}</p>`
 
    const msgbubbles = document.querySelector("#message-bubbles");
    msgbubbles.appendChild(divSent);

  }

function formAdicionaMSG(event) {
    event.preventDefault();
  
    const Mensagem = document.querySelector("#text");
  
    if (Mensagem.value === "") {
      return;
    }

    adicionaMsg(Mensagem.value);
  
  }

const formAdd = document.querySelector("#Form_sent_msg");
formAdd.addEventListener("submit", formAdicionaMSG);