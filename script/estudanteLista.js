'use strict'

import { getAlunoCurso } from './studentsListFetch.js';

import { getCurso } from './coursesFetch.js';

const curso = localStorage.getItem('curso');
const cursos = await getCurso();
let status = alunoStatus
let titleContent = '';

cursos.forEach(index => {
    if (index.sigla.toLowerCase() == curso) {
        titleContent = index.nome.split(' - ')[1].replace('Técnico em ', '');
    }
});

let estudanteLista = await getAlunoCurso(curso);

const mudarTitulo = () => {
    const titulo = document.querySelector('#nome-materia');
    titulo.textContent = titleContent;
}
mudarTitulo();

const criarEstudantesCards = async (index) => {
    const container = document.querySelector('.cards-container');
    const card = document.createElement('div');
    card.classList.add('card');

    if (index.status.toLowerCase() ==  'cursando') {
        card.classList.add('blue');
    } else if (index.status.toLowerCase() == 'finalizado') {
        card.classList.add('yellow');
    }
    
    card.innerHTML = `
        <img src="${index.foto}" alt="Foto do Estudante" class="estudante-foto">
        <span class="estudante-nome">${index.nome.toUpperCase()}</span>
    `;

    container.appendChild(card);

    card.addEventListener('click', (el) => {
        el.preventDefault();
        const estudanteMatricula = index.matricula;

        localStorage.setItem('matricula', estudanteMatricula);

        location.href = './alunos.html';
    });
}


const limparCards = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => card.remove())
}

// const sanitizeOptions = () => {
//     const option = document.querySelectorAll('.year-option');
//     option.forEach((option) => option.remove())
// }

const statusFiltro = document.querySelector('#status-select');
let statusSelectValue = document.querySelector('#status-select').value;
// const yearSelectInput = document.querySelector('#conclusion-select');
// let yearSelectInputValue = document.querySelector('#conclusion-select').value;

// if (statusSelectValue == 'status') {
//     statusSelectValue = undefined;
// }

// const createYearsOptions = async (year) => {
//     const yearOption = document.createElement('option');
//     yearOption.value = year;
//     yearOption.textContent = year;
//     yearOption.classList.add('year-option');
    
//     yearSelectInput.appendChild(yearOption);
// }

// let years = await getYears(course, statusSelectValue);
// years.forEach(createYearsOptions);

estudanteLista.forEach(criarEstudantesCards);

statusFiltro.addEventListener('change', async () => {
    statusSelectValue = document.querySelector('#status-select').value;
    yearSelectInputValue = document.querySelector('#conclusion-select').value;

    estudanteLista = await filterStudentsByStatusAndConclusionDate(curso, statusSelectValue, yearSelectInputValue);
    // years = await getYears(course, statusSelectValue);
    // sanitizeOptions();
    // years.forEach(createYearsOptions);


    limparCards(); // limpando o container dos cards

    if (estudanteLista) {
        estudanteLista.forEach((e) => criarEstudantesCards(e)) // popula
    }
});

// yearSelectInput.addEventListener('change', async () => {
//     yearSelectInputValue = document.querySelector('#conclusion-select').value;
//     statusSelectValue = document.querySelector('#status-select').value;
    
//     estudanteLista = await filterStudentsByStatusAndConclusionDate(course, statusSelectValue, yearSelectInputValue);
    
//     limparCards();
    
//     if (estudanteLista) {
//         estudanteLista.forEach((e) => criarEstudantesCards(e))
//     }
// });