const calculator = require(`./calculator`)

const resultPenjumlahan = calculator.penjumlahan(2,6);
const resultPengurangan = calculator.pengurangan(7,3);
const resultPerkalian = calculator.perkalian(2,6);

console.log(`Hasil penjumlaahan:  ${resultPenjumlahan}`)
console.log(`Hasil pengurangan :  ${resultPengurangan}`)
console.log(`Hasil perkalian :  ${resultPerkalian}`)