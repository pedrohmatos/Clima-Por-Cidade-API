// Variáveis e seleção de elementos
const apiWeatherKey = '0d456b92b1bbfaf3509d2c655e701a79';
const apiWeatherIcones = 'https://openweathermap.org/img/wn/';
const apiFlag = 'https://flagsapi.com/';

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

const mostrarClimaDados = async (cidade) => {
    try {
        const dados = await pegarClimaDados(cidade);
        
        cidadeElemento.textContent = dados.name;
        bandeiraElemento.src = `${apiFlag}${dados.sys.country}/flat/32.png`;
        tempElemento.textContent = dados.main.temp;
        ceuElemento.textContent = dados.weather[0].description;
        ceuIcone.src = `${apiWeatherIcones}${dados.weather[0].icon}@2x.png`;
        umidadeElemento.textContent = dados.main.humidity;
        ventoElemento.textContent = dados.wind.speed;
    } catch (error) {
        console.log('linha 40, aqui Ocorreu um erro: ' + error);
    }
};

const pegarClimaDados = async (cidade) => {
    try {
        const apiWeatherDados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiWeatherKey}&units=metric&lang=pt_br`);
    
        const weatherDados = await apiWeatherDados.json();
        return weatherDados;
    } catch(error) {
        console.log('linha 51, aqui Ocorreu um erro: ' + error);
    }
};