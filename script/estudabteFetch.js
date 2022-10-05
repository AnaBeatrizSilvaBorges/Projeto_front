'use strict'

const getAlunoMatricula = async (matricula) => {
    const url = `http://localhost:8080/aluno/${matricula}`;
    const response = await fetch(url);
    const { estudanteInformacoes } = await response.json();

    return estudanteInformacoes;
}