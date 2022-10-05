'use strict'

const getAlunoCurso = async (curso) => {
    const url = `http://localhost:8080/alunos/${curso}`;
    const response = await fetch(url);
    const { estudanteLista } = await response.json();

    return estudanteLista;
}

const getAlunoStatus = async (curso) => {
    const url = `http://localhost:8080/alunos/status/${status}`;
    const response = await fetch(url);
    const { estudanteLista } = await response.json();

    return estudanteLista;
}


export {
    getAlunoCurso,
    getAlunoStatus
    
};

