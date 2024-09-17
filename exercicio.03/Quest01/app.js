const button = document.querySelector('.button');
const cep = document.querySelector('.cep');
const logradouro = document.querySelector('.logradouro');
const bairro = document.querySelector('.bairro');
const cidade = document.querySelector('.cidade');
const uf = document.querySelector('.uf');
const mensagemErro = document.querySelector('.mensagemErro');

button.addEventListener('click', async () => {
    try {
        const cepRequisicao = document.querySelector('.cepRequisicao').value;
        const response = await fetch(`https://viacep.com.br/ws/${cepRequisicao}/json/`);
        const data = await response.json();
        cep.innerHTML = data.cep;
        logradouro.innerHTML = data.logradouro;
        bairro.innerHTML = data.bairro;
        cidade.innerHTML = data.localidade;
        uf.innerHTML = data.uf;
        mensagemErro.innerHTML = '';
    } catch (erro) {
        cep.innerHTML = '';
        logradouro.innerHTML = '';
        bairro.innerHTML = '';
        cidade.innerHTML = '';
        uf.innerHTML = '';
        mensagemErro.innerHTML = 'CEP INVÁLIDO!';
    }
});