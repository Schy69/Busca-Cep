function coletarcep() {
    const cep = document.querySelector("#cep").value;
    dados(cep);
}

async function dados(cep) {
    const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json());
    console.log(dados)
    dadostela(dados);
    
}

function dadostela(dados) {
    document.querySelector("#endereco").innerHTML = dados.logradouro;
    document.querySelector("#bairro").innerHTML = dados.bairro;
    document.querySelector("#cidade").innerHTML = dados.localidade;
    document.querySelector("#estado").innerHTML = `${dados.estado} (${dados.uf})`;
    document.querySelector("#regiao").innerHTML = dados.regiao;
}
