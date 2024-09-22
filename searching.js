function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return i;  
        }
    }
    return -1;  
}

let data = [3, 1, 4, 5, 8, 9, 7, 11, 20];
let targetElemen = 10;

let result = linearSearch(data, targetElemen)

if (result !== -1){
    console.log(`Elemen ${targetElemen} ditemukan pada indeks ${result}.`)
}else{
    console.log(`Elemen ${targetElemen} tidak ditemukan dalam array ${result}.`)
}