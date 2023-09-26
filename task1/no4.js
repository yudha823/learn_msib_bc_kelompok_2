const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput(prompt) {
    return new Promise((resolve, reject) => {
        rl.question(prompt, (input) => {
            const value = parseFloat(input);
            if (!isNaN(value)) {
                resolve(value);
            } else {
                reject(new Error("Input tidak valid. Masukkan angka yang valid."));
            }
        });
    });
}

async function main() {
    try {
        const angka1 = await getInput("Masukkan angka pertama: ");
        const angka2 = await getInput("Masukkan angka kedua: ");

        if (angka1 < angka2) {
            console.log(`${angka1} kurang dari ${angka2}`);
        } else if (angka1 > angka2) {
            console.log(`${angka1} lebih besar dari ${angka2}`);
        } else {
            console.log(`${angka1} sama dengan ${angka2}`);
        }
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
}

main();
