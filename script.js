var cep;
function consultar() {
    cep = document.getElementById('cep').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
        .then((response) => response.json())
        .then(function (json) {
            
            if (json.uf === undefined){
                alert("CEP INVÁLIDO");
            }
            else{
            document.getElementById('cp').innerHTML = (json.cep);
            document.getElementById('estado').innerHTML = (json.uf);
            document.getElementById('cidade').innerHTML = (json.localidade);
            document.getElementById('bairro').innerHTML = (json.bairro);
            document.getElementById('logradouro').innerHTML = (json.logradouro);
            }
        })
        .catch((erro) => {
            console.log(erro)
            console.log("erro")
            document.getElementById('cp').innerHTML = ("Inexistente");
        })
};