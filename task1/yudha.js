const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput() {
    return new Promise((resolve, reject) => {
        rl.question("Masukkan angka pertama: ", (angka1) => {
            rl.question("Masukkan angka kedua: ", (angka2) => {
                resolve([parseFloat(angka1), parseFloat(angka2)]);
            });
        });
    });
}

function perkalian() {
    getInput().then((input) => {
        const angka1 = input[0];
        const angka2 = input[1];
    
        if (!isNaN(angka1) && !isNaN(angka2)) {
            const hasil = angka1 * angka2;
            console.log("Hasil perkalian: " + hasil);
        } else {
            console.log("Mohon masukkan angka yang valid.");
        }

        rl.close();
    }).catch((error) => {
        console.error("Terjadi kesalahan: " + error);
        rl.close();
    });
}

perkalian();
