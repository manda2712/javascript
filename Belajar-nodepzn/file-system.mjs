import fs from "fs/promises"; //ini digunakann apabila kita menggunakan konsep promis apabila tidak kita cukup mengetikkan fs saja

const bufferd = await fs.readFile("path.mjs")

console.info(bufferd.toString());