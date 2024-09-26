import {EventEmitter} from "events";

const emitter = new EventEmitter();

emitter.addListener("hello", (name) => {
    console.info(`Hello ${name}`);
})

emitter.addListener("benda", (benda) => {
    console.info(`Ambilkan saya ${benda}`);
})

emitter.emit("hello", "Amanda")
emitter.emit("benda", "kursi")