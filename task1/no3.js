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
    let total = 0;

    for (let i = 1; i <= 3; i++) {
        try {
            const value = await getInput(`Masukkan nilai item ke-${i}: `);
            total += value;
        } catch (error) {
            console.error(error.message);
            i--; // Mengulangi iterasi jika terjadi kesalahan input
        }
    }

    console.log(`Total nilai dari 3 item barang adalah: ${total.toFixed(2)}`);
    rl.close();
}

main();
