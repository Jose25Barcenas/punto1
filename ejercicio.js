const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];

function sumarCuadros(arrayNumeros) {
    let SumaArray = "";
    arrayNumeros.forEach(num => {
        const numLength = num.toString().length;
        SumaArray += `+ ${"-".repeat(numLength)} +\n`;
        SumaArray += `| ${num} |\n`;
        SumaArray += `+ ${"-".repeat(numLength)} +\n`;
    });

    const sumaTotal = arrayNumeros.reduce((a, b) => a + b, 0);
    SumaArray += `+ ${"=".repeat(sumaTotal.toString().length)} +\n`;
    SumaArray += `| ${sumaTotal} |\n`;
    SumaArray += `+ ${"=".repeat(sumaTotal.toString().length)} +`;

    console.log(SumaArray);
}

// Llamada a la función sumarCuadros
sumarCuadros(arrayNumeros);

