'use strict'

import {getAlunoMatricula} from './estudabteFetch.js';
import {criarIniciaisMaterias} from './iniciais'

const matricula = localStorage.getItem('matricula');

const estudanteInformacoes = await getAlunoMatricula(matricula);


const carregarPerfil= () => {
    const perfilContainer = document.querySelector('.perfil');

    const foto = document.createElement('img');
    photo.classList.add('perfil-foto');
    photo.src = estudanteInformacoes.photo;
    photo.alt = 'Foto do Estudante';

    const name = document.createElement('span');
    name.classList.add('perfil-nome');
    name.textContent = estudanteInformacoes.name.toUpperCase();

    perfilContainer.appendChild(photo);
    perfilContainer.appendChild(name);
}

const criarGrafico = (index) => {
    const container = document.querySelector('.notas');

    const graficoContainer = document.createElement('div');
    graficoContainer.classList.add('materias-notas');

    const grafico = document.createElement('span');
    grafico.classList.add('nota');
    grafico.textContent = index.media;
    
    const progressBar = document.createElement('progresso');
    progressBar.classList.add('progresso-notas');
    progressBar.max = '100';
    progressBar.value = index.media;

    if (index.media < 70 && index.media >= 50) {
        progressBar.classList.add('exame');
        grade.classList.add('exame-notas');
    } else if (index.media < 50) {
        progressBar.classList.add('reprovado');
        grade.classList.add('reprovado-nota');
    }
    
    const InicialMaterias = document.createElement('span');
    InicialMaterias.classList.add('inicial-materias');
    InicialMaterias.textContent = criarIniciaisMaterias(index.nome);

    graficoContainer.appendChild(grafico);
    graficoContainer.appendChild(progressBar);
    graficoContainer.appendChild(InicialMaterias);
    
    container.appendChild(graficoContainer)
}

carregarPerfil()
estudanteMaterias.forEach(criarGrafico)