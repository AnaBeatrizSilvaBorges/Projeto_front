'use strict'

const getCursos = async () => {
    const url = `https://localhost:8080/aluno/${sigla}`;
    const response = await fetch(url);
    const data = await response.json();

    return data
}

export { getCursos};