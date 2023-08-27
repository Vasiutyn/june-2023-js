const arr = ['0', '1000', '4', '21', '999', '2023'];
let max = arr[0]
for (let num of arr) {
    if (Number(max) < Number(num)) {
        max = num
    }
}
console.log(max);

