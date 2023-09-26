const crypto = require('crypto');

// Fungsi untuk melakukan enkripsi teks dengan kunci
function enkripsi(teks, kunci) {
  const cipher = crypto.createCipher('aes-256-cbc', kunci);
  let teksTerenkripsi = cipher.update(teks, 'utf8', 'hex');
  teksTerenkripsi += cipher.final('hex');
  return teksTerenkripsi;
}

// Fungsi untuk melakukan dekripsi teks dengan kunci
function dekripsi(teksTerenkripsi, kunci) {
  const decipher = crypto.createDecipher('aes-256-cbc', kunci);
  let teksDekripsi = decipher.update(teksTerenkripsi, 'hex', 'utf8');
  teksDekripsi += decipher.final('utf8');
  return teksDekripsi;
}

// Contoh penggunaan
const kunciRahasia = 'kuncirahasia123456'; // Ubah kunci sesuai kebutuhan Anda
const teksRahasia = 'Ini adalah teks rahasia';

const teksTerenkripsi = enkripsi(teksRahasia, kunciRahasia);
console.log(`Teks Terenkripsi: ${teksTerenkripsi}`);

const teksDekripsi = dekripsi(teksTerenkripsi, kunciRahasia);
console.log(`Teks Terdekripsi: ${teksDekripsi}`);
