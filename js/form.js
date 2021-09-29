const pesquisaCep = () => {

    const cep = inputcep.value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    return fetch(url)
        .then(responseData => {
            return responseData.json();
        })
        .then(data => {
            preencherCampos(data)
        })

}

const preencherCampos = (data) => {

    //console.log(data);

    const endereco = document.querySelector('#endereco');
    const bairro = document.querySelector('#bairro');
    const cidade = document.querySelector('#cidade');
    const estado = document.querySelector('#estado');

    endereco.value = data.logradouro;
    bairro.value = data.bairro;
    cidade.value = data.localidade;
    estado.value = data.uf;
}

const inputcep = document.querySelector('#cep');
inputcep.addEventListener('blur', pesquisaCep);



const btnSubmit = document.querySelector('[data-submit]');
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const template = `<h3 class="bg-success text-white mt-4">Seu Pedido foi realizado com sucesso</h3>`

    const alert = document.querySelector('#alert');
    alert.innerHTML = template

    document.querySelector('#nome').value = ''
    document.querySelector('#sobrenome').value = ''
    document.querySelector('#email').value = ''
    document.querySelector('#pedido').value = ''
    document.querySelector('#complemento').value = ''
    inputcep.value = ''

});

