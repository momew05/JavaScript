const output = document.getElementById('output');

function clearOutput() {
    output.innerHTML = '';
}

function renderValue(value, title = '') {
    const block = document.createElement('div');

    block.className = 'result-block';

    block.innerHTML = `
        <h2>${title}</h2>
        <div class="value">
            ${value}
        </div>`;

    output.append(block);
}

function task1() {
    clearOutput()

   let phones = [ 
    '590.423.4568', 
    '650.124.7234', 
    '650.507.9879', 
    '011.44.1343.529268', 
    '011.44.1344.478968', 
    '011.44.1644.429267', 
    '11.44.1343.52', 
    '11.44.1643.52' ];

    const hidden_phones = phones.map(num => num.replace(/.{4}$/, "****"));

    renderValue(hidden_phones[0], 'Задание 1');
    for (let i = 1; i <= phones.length - 1; i++) {
        renderValue(hidden_phones[i]);
    }
}

function task2() {
    clearOutput()

    let phones = [

     '4000 0012 0056 9499',

     '4000 0013 5456 7379',

     '4000 0014 1456 9869',

     '4000 0015 3466 7859',

     '4000 0016 3556 6899',

     '4000 0017 4456 4699'];

    const replacement = '*****';

    const hidden_phones = phones.map(num =>  num.slice(0,4) + replacement + num.slice(-4));
    renderValue(hidden_phones[0], 'Задание 2');
    for (let i = 1; i <= phones.length - 1; i++) {
        renderValue(hidden_phones[i]);
    }
}

function task3() {
    clearOutput()

    let prices = [ 
    'Цена товара - 1200$', 
    'Стоимость - 500$', 
    'Цена не определена', '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
    '150$'];

    function getInfo(prices) {
        let c1 = 0;
        let c2 = 0;

        prices.forEach(price => {
        if (price.search('Цена') != -1) {
            c1 = c1 + 1;
        }
        else if (price.search('$') != -1) {
            c2 = c2 + 1;
        }
        });

        return [c1 + ', ' + c2]
    }
    
    renderValue(getInfo(prices), 'Задание 3');
}

function task4() {
    clearOutput()

    function kingSaid(string) {
        if (string.search('Король сказал:') != -1) {
            return string
        }
        else {
            return 'Король сказал: ' + string
        }
    }

    renderValue(kingSaid('все распрощаются с тобой, и только ты увидишь чудо'), 'Задание 4');
}

function task5() {
    clearOutput()

    function isFriday() {
        let today = new Date()

        if(today.getDay() == 5) {
            return 'Сегодня пятница'
        } else if (today.getDay() == 6) {
            return 'Пятница была вчера'
        } else if (today.getDay() == 4) {
            return 'Завтра пятница'
        } else {
            n = (5 - today.getDay() + 7) % 7;
            let res;
            n <= 4? res = `${n} дня`: `${n} дней`
            return `Пятница будет через ${res}`
        }
    }

    renderValue(isFriday(), 'Задание 5')
}

const tasks = {
    task1,
    task2,
    task3,
    task4,
    task5,
};

for (let i = 1; i <= 9; i++) {
    const btn = document.getElementById('t' + i);

    btn.addEventListener('click', () => {
        tasks['task' + i]();
    });
}