// Fungsi untuk menghitung luas segitiga
function hitungLuasSegitiga(alas, tinggi) {
    return (alas * tinggi) / 2;
  }
  
  // Fungsi untuk menghitung panjang sisi miring (hipotenusa)
  function hitungSisiMiring(alas, tinggi) {
    return Math.sqrt(alas * alas + tinggi * tinggi);
  }
  
  // Contoh penggunaan
  const alas = 5;
  const tinggi = 4;
  
  const luasSegitiga = hitungLuasSegitiga(alas, tinggi);
  const sisiMiring = hitungSisiMiring(alas, tinggi);
  
  console.log(`Luas segitiga dengan alas ${alas} dan tinggi ${tinggi} adalah: ${luasSegitiga}`);
  console.log(`Panjang sisi miring (hipotenusa) adalah: ${sisiMiring}`);
  