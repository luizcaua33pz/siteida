// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ nome: nome, preco: preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(nome + " foi adicionado ao carrinho!");
}

// Função para exibir o carrinho
function exibirCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let listaCarrinho = document.getElementById('listaCarrinho');
    let totalCarrinho = document.getElementById('totalCarrinho');
    let carrinhoVazio = document.getElementById('carrinhoVazio');

    listaCarrinho.innerHTML = '';
    let total = 0;

    if (carrinho.length === 0) {
        carrinhoVazio.style.display = 'block';
    } else {
        carrinhoVazio.style.display = 'none';
        carrinho.forEach(item => {
            let li = document.createElement('li');
            li.textContent = item.nome + ' - R$ ' + item.preco.toFixed(2);
            listaCarrinho.appendChild(li);
            total += item.preco;
        });
        totalCarrinho.textContent = total.toFixed(2);
    }
}

// Chama a função para exibir o carrinho assim que a página for carregada
if (document.getElementById('itensCarrinho')) {
    exibirCarrinho();
}
function adicionarMetodo() {
    let metodo = prompt("Digite um novo método de pagamento:");
    if (metodo) {
        let lista = document.getElementById("lista-pagamento");
        let novoItem = document.createElement("li");
        novoItem.textContent = metodo;
      
    }
}
function mostrarFormasPagamento() {
    document.getElementById("lista-pagamento").style.display = "block";
}
