const querystring = require('querystring')

//contoh querystring menjadi stringfy
const queryString = 'nama=Amanda&usia=20&kota=Palu&kampus=universitas Tadulako';

//parse querystring menjadi objek
const parsedQuery = querystring.parse(queryString);

//tampilkan objek yang telah diparse
console.log(parsedQuery);

//stringify objek menjadi query string
const objekString = querystring.stringify(
    {nama: 'lala',
    kota : 'Malang',
    pekerjaan : 'barista'
    }
);

//tampilkan query string yang dihasilkan
console.log(objekString);
console.log(parsedQuery)