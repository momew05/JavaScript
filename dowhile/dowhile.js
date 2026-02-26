// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// let sum = 0, num = 1;
// while (num <= 10) {
//     sum += num;
//     num++;
// }
// console.log('сумма:', sum); 

// let n = 0;
// while (n < 10) {
//     if (n % 2 === 0) console.log(n);
//     n++;
// }

// let guess = 0;
// do {
//     guess = Math.floor(Math.random() * 3) + 1;
//     console.log('Угадал:', guess);
// } while (guess !== 2);

// let chars = 'abc123';
// let randomString = '';

// do {
//     let randomIndex = Math.floor(Math.random() * chars.length);
//     randomString += chars[randomIndex];
//     console.log('Текущая строка: ' + randomString);
// } while (randomString.length < 5);

// console.log('Готовая строка: ' + randomString);

let timer = +prompt("Добро пожаловать на ракетную станцию! Введите время до запуска ракеты");
let sure = 10;
for (let i = timer; i > 0; i--) {
    alert(`До запуска ракеты ${i} сек.`);
    if (i == timer - sure) {
        sure = sure + 10;
        let yn = +prompt("Вы точно хотите запустить ракету? (Y/N)").trim().toUpperCase();;
             if (yn === "N") {
            break;
        } else if (yn === "Y") {
            continue;
        }
    }
}

