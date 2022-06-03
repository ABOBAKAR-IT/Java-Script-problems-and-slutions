let lenth = 10;
let arr1 = [1, 1];
let arr2 = [];
let arr3 = [];
let check = 0;
for (let i = 0; i < lenth; i++) {
    for (let j = 0; j < lenth - i; j++) {
        process.stdout.write(" ");
    }
    for (let z = 0; z < i - 1; z++) {
        if (i >= 0) {
            let v = arr1[z] + arr1[z + 1];
            arr2.push(v);
            arr3 = [1, ...arr2, 1];
        }
    }

    arr2 = [];
    if (i > 1) arr1 = [...arr3];
    for (let k = 0; k <= i; k++) {
        process.stdout.write(arr1[k] + " ");
    }

    console.log();
}