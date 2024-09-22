class Stack{
    constructor(){
        this.items = [] //array untuk menyimpan elemen-elemen stack
    }
    // menambahkan elemen ke atas stack
    push(element){
        this.items.push(element);

    }
    // menghapus elemen dari atas stack dan mengembalikannya
    pop(){
        if (this.items.length === 0) {
            return null //stack kosong    
        }
        return this.items.pop()
    }

    //melihat elemen teratas dari stack tanpa menghapusnya
    peek(){
        if (this.items.length === 0) {
            return null
            
        }
        return this.items[this.items.length - 1]
    }

    //memeriksa apakah stack kosong

    isEmpty(){
        return this.items.length === 0
    }

    // mengembalikan panjang stack
    size(){
        return this.items.length
    }

}

let stack = new Stack();

console.log("Apakah stack kosong?" + stack.isEmpty());

stack.push(100)
stack.push(200)
stack.push(300)

console.log("Eleemen teratas: " + stack.peek());
console.log("Ukuran stack: " + stack.size());
console.log("Eleemen yang dihapus: " + stack.pop());
console.log("Apakah stack kosong? : " + stack.isEmpty());
 