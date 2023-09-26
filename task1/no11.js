const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk melakukan pertambahan
function tambah(angka1, angka2) {
  return angka1 + angka2;
}

// Fungsi untuk melakukan pengurangan
function kurang(angka1, angka2) {
  return angka1 - angka2;
}

// Fungsi untuk melakukan pembagian
function bagi(angka1, angka2) {
  if (angka2 === 0) {
    return "Tidak dapat melakukan pembagian dengan nol.";
  }
  return angka1 / angka2;
}

// Fungsi untuk melakukan perkalian
function kali(angka1, angka2) {
  return angka1 * angka2;
}

// Meminta dua angka dari pengguna
rl.question('Masukkan angka pertama: ', (angka1) => {
  rl.question('Masukkan angka kedua: ', (angka2) => {
    // Menampilkan menu operasi
    console.log('Pilih operasi:');
    console.log('a. Pertambahan');
    console.log('b. Pengurangan');
    console.log('c. Pembagian');
    console.log('d. Perkalian');

    rl.question('Operasi yang dipilih: ', (operasi) => {
      let hasil;
      switch (operasi) {
        case 'a':
          hasil = tambah(parseFloat(angka1), parseFloat(angka2));
          break;
        case 'b':
          hasil = kurang(parseFloat(angka1), parseFloat(angka2));
          break;
        case 'c':
          hasil = bagi(parseFloat(angka1), parseFloat(angka2));
          break;
        case 'd':
          hasil = kali(parseFloat(angka1), parseFloat(angka2));
          break;
        default:
          hasil = 'Operasi tidak valid.';
      }

      console.log(`Hasil: ${hasil}`);
      rl.close();
    });
  });
});
