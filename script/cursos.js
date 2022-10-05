'use strict'

import { getCursos } from '../script/cursosFetch';


let courses = await getCursos();

const criarCards = async (array) => {
    const container = document.querySelector('#subjects-selection');
    const div = document.createElement('div');
    div.classList.add('subject');
    div.id = array.sigla.toLowerCase()
    div.innerHTML = `
        <img src="${array.icone}" class="subject-icon"></img>
        <span class="subject-title">${array.sigla}</span>
    `
    container.appendChild(div);

    div.addEventListener('click', (el) => {
        el.preventDefault(); 
        const curso = div.id;

        localStorage.setItem('course', curso);

        location.href = './Front/alunos/index.html';
    })

}

cursos.forEach(criarCards)