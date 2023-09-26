const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertCelciusToFahrenheit(celcius) {
    return (celcius * 9/5) + 32;
}

function getInput() {
    return new Promise((resolve, reject) => {
        rl.question("Masukkan suhu dalam Celcius: ", (input) => {
            const celcius = parseFloat(input);
            if (!isNaN(celcius)) {
                resolve(celcius);
            } else {
                reject(new Error("Input tidak valid. Masukkan angka Celcius yang valid."));
            }
        });
    });
}

function konversi() {
    getInput().then((celcius) => {
        const fahrenheit = convertCelciusToFahrenheit(celcius);
        console.log(`Suhu dalam Fahrenheit: ${fahrenheit.toFixed(2)}`);
        rl.close();
    }).catch((error) => {
        console.error(error.message);
        rl.close();
    });
}

konversi();
