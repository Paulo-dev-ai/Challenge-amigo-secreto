let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    console.log("Amigo adicionado:", nome);
    atualizarListaAmigos();
    input.value = "";
}

function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ''; 
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
    console.log("Lista atualizada:", amigos);
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 nomes antes de sortear!");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `O amigo secreto é: <b>${sorteado}</b>`;
    resultadoDiv.style.display = "block";
}    
