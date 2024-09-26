import readline from "readline";
import process from "process";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question("Siapa Nama mu :", (name) => {
    console.info(`Terimakasih ${name}`);
    input.close(); // Menutup interface setelah pertanyaan dijawab
});

