const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function konversiDetikKeJamMenitDetik(detik) {
  const jam = Math.floor(detik / 3600);
  detik %= 3600;
  const menit = Math.floor(detik / 60);
  const detikSisa = detik % 60;

  const formatJam = jam < 10 ? `0${jam}` : jam.toString();
  const formatMenit = menit < 10 ? `0${menit}` : menit.toString();
  const formatDetik = detikSisa < 10 ? `0${detikSisa}` : detikSisa.toString();

  return `${formatJam}:${formatMenit}:${formatDetik}`;
}

rl.question('Masukkan jumlah detik: ', (input) => {
  const detikInput = parseInt(input);

  if (!isNaN(detikInput)) {
    const waktuFormat = konversiDetikKeJamMenitDetik(detikInput);
    console.log(`Waktu dalam format jam:menit:detik adalah: ${waktuFormat}`);
  } else {
    console.log("Input yang Anda masukkan bukan angka.");
  }

  rl.close();
});
