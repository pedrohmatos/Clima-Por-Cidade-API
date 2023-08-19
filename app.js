// Variáveis e seleção de elementos
const apiWeatherKey = '0d456b92b1bbfaf3509d2c655e701a79';
const apiFlag = 'https://flagsapi.com';

const cidadeInput = document.querySelector('#inserir');
const pesquisarBttn = document.querySelector('.pesquisar');

const cidadeElemento = document.querySelector('#nomeDoLocal');
const bandeiraElemento = document.querySelector('#bandeiraDoLocal');
const tempElemento = document.querySelector('#grausTemp h1');
const ceuElemento = document.querySelector('#ceu');
const ceuIcone = document.querySelector('#ceuIcone');
const umidadeElemento = document.querySelector('#umidade');
const ventoElemento = document.querySelector('#vento');

// Eventos
pesquisarBttn.addEventListener('click', (e) => {
    e.preventDefault();

    const cidade = cidadeInput.value;

    mostrarClimaDados(cidade);
});

// Funcoes

const mostrarClimaDados = (cidade) => {
    console.log(cidade);
};

const pegarClimaDados = async (cidade) => {

    const apiWeather = fetch();
};