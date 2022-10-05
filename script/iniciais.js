const criarIniciaisMaterias = (name) => {
    let nomeMateria = name;
    let inicialMateria = [];

    let nomeInteiro = nomeMateria.split(' ');
    nomeInteiro.forEach(index => {
        // console.log(splitedName);
        inicialMateria.push(index[0].toUpperCase());
        // console.log(index[0].toUpperCase());
        // splitedName = index[0].toUpperCase();
    });

    return inicialMateria.join('');
}

export default criarIniciaisMaterias;