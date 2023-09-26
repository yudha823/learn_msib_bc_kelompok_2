function hitungFaktorial(n) {
    if (n < 0) {
      return "Faktorial hanya dapat dihitung untuk bilangan positif.";
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      let hasil = 1;
      for (let i = 2; i <= n; i++) {
        hasil *= i;
      }
      return hasil;
    }
  }
  
  // Contoh penggunaan
  const bilangan = 5;
  const faktorial = hitungFaktorial(bilangan);
  console.log(`Faktorial dari ${bilangan} adalah: ${faktorial}`);
  