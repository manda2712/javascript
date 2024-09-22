function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++){
            //bandingkan dua elemen berturut turut
            if (arr[j] > arr[j + 1]) {
                //tukar elemen jika urutannya salah
                let temp = arr[j] //berfungsi apabila pertukaran iterasi salah
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                
            }
        }
    }
    return arr  
}

let data = [90, 34, 12, 16, 21, 11, 20, 90, 100]

console.log("Array Sebelum diurutkan " + data);
let sortedArray = bubbleSort(data.slice())
console.log("Array Sete;ah diurutkan " + sortedArray);