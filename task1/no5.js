const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput(prompt) {
    return new Promise((resolve, reject) => {
        rl.question(prompt, (input) => {
            const value = parseInt(input);
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
        const range = await getInput("Masukkan rentang: ");
        let sumOfOdds = 0;

        for (let i = 1; i <= range; i++) {
            if (i % 2 !== 0) {
                sumOfOdds += i;
            }
        }

        console.log(`Jumlah bilangan ganjil dari 1 sampai ${range} adalah: ${sumOfOdds}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
}

main();
