const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menghasilkan angka acak antara 1 dan 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Menghasilkan dua angka acak
const angka1 = getRandomNumber();
const angka2 = getRandomNumber();

// Menghitung jawaban yang benar
const jawabanBenar = angka1 + angka2;

// Mengajukan pertanyaan penjumlahan kepada pengguna
rl.question(`Berapa hasil dari ${angka1} + ${angka2}? `, (jawabanPengguna) => {
  // Memeriksa jawaban pengguna
  if (parseInt(jawabanPengguna) === jawabanBenar) {
    console.log("Jawaban Anda benar!");
  } else {
    console.log(`Maaf, jawaban Anda salah. Jawaban yang benar adalah ${jawabanBenar}.`);
  }

  rl.close();
});
