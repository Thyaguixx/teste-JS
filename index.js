const calculadora = (n1, n2, tipoConta) => {
    if (tipoConta == 'soma'){
        const resultado = n1 + n2;
        console.log(`Resultado: ${resultado}`);
    };

    if (tipoConta == 'subtracao'){
        const resultado = n1 - n2;
        console.log(`Resultado: ${resultado}`);
    };

    if (tipoConta == 'multiplicacao'){
        const resultado = n1 * n2;
        console.log(`Resultado: ${resultado}`);
    };

    if (tipoConta == 'divisao'){
        const resultado = n1 / n2;
        console.log(`Resultado: ${resultado}`);
    };
};

exports.calcular = calculadora;
