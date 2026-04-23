console.log("Задание 1");

function checkNum(num){
    num % 7 == 0? console.log("True"): console.log("False");
}

checkNum(49);
checkNum(50);

console.log("Задание 2");

function changeElem(arr, n){
    let newarr = arr.map(i => {i*n});
    return newarr;
};

const array = [1, 2, 3, 4];
const result = changeElem(array, 2);
console.log(result);
console.log(array);

console.log("Задание 3");

function sumElems(array){
    let sum = 0;
    array.map(i => {
        if (isNaN(i)) sum += Number(i)
    });
    return sum;
}

const arr = ['10','Строка','5g','15','05'];
const resul = sumElems(arr);
console.log(resul);

console.log("Задание 4");

function reverseIndex(array) {
    let newarr = array.reduceRight((newarr, i) => {
        newarr.push(i)
        return newarr;
    }, [])
    return newarr;
}

const resu = reverseIndex(array);
console.log(resu);

console.log("Задание 5");

function checkElem(array, callback) {
    let check = array.some(i => callback(i));
    return check;
}

const res = checkElem(array, (elem) => elem == 3 );
console.log(res);