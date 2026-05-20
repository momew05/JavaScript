const output = document.getElementById('output');

function clearOutput() {
    output.innerHTML = '';
}

function renderValue(title, value) {
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

    const obj = {
        price1: 100,
        price2: 150,
        price3: 200,
        price4: 100,
        price5: 150,
    };

    const sum = Object.values(obj)
        .reduce((acc, curr) => acc + curr, 0);

    renderValue('Задание 1', sum)
}

function task2() {
    clearOutput()

    const array = [
        {id: 1, name: 'apple'},
        {id: 2, name: 'watermelon'},
        {id: 3, name: 'qiwi'},
        {id: 4, name: 'lemon'}
    ];

    const newArr = array.map(obj => ' ' + Object.values(obj));
    renderValue('Задание 2', newArr)
}

function task3() {
    clearOutput()

    function logString(...args) {
        return args.join(' ');
    }

    const result = logString('save', 'our', 'souls');
    renderValue('Задание 3', result)
}

function task4() {
    clearOutput()

    function checkObj(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'particle');
    }

    const result = [checkObj({id: 1, particle: 10}), checkObj({id: 2, name: "tag"})];
    renderValue('Задание 4', result)
}

function task5() {
    console.log('Задание 5');
    clearOutput()

    function generateArray(array) {
        return array.map(elem =>
            Array.isArray(elem) ? ' ' + elem : ' ' + Object.values(elem)
        );
    }

    const array = [[1], {id: 40}, [100], [300], {part: 10}];
    const result = generateArray(array);

    renderValue('Задание 5', result)
}

function task6() {
    clearOutput()

    const users = [
        {id: 1, name: 'Alex', lastname: 'Wilyam', age: 20},
        {id: 2, name: 'Steven', lastname: 'King', age: 34}
    ];

    function addUser(name, lastname, age) {
        const newId = users.at(-1).id + 1;

        users.push({
            id: newId,
            name,
            lastname,
            age
        });
    }

    function deleteUser(id) {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) users.splice(index, 1);
    }

    function renderUsers(title, users) {
        const block = document.createElement('div');

        block.className = 'result-block';

        const uss = users.map(user => `
            <div class="card">

                <div class="name">
                    ID: ${user.id}
                </div>

                <div class="info">
                    Имя: ${user.name}
                </div>

                <div class="info">
                    Фамилия: ${user.lastname}
                </div>

                <div class="info">
                    Возраст: ${user.age}
                </div>

            </div>`).join('');

        block.innerHTML = `
            <h2>${title}</h2>

            <div class="cards">
                ${uss}
            </div>`;

        output.append(block);
    }

    renderUsers('Исходный массив', users)
    addUser('mo', 'mewo', 18);
    renderUsers('Добавляем пользователя', users)
    deleteUser(1);
    renderUsers('Удаляем пользователя', users)
    addUser('pun', 'pun', 118);
    renderUsers('ID не повторяются', users)

}

let products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000,
        count: 3, // количество на складе
        marks: [4, 3, 5, 3] // оценки товара от 4х покупателей
    },
    {
        id: 2,
        title: 'ролики',
        price: 25000,
        count: 5,
        marks: [4, 3, 5, 5]
    },
    {
        id: 3,
        title: 'арбалет',
        price: 1700,
        count: 9,
        marks: [3, 3, 4, 5]
    },
    {
        id: 4,
        title: 'коньки',
        price: 4500,
        count: 3,
        marks: [4, 3, 4, 3]
    },
    {
        id: 5,
        title: 'ракетки',
        price: 900,
        count: 15,
        marks: [5, 3, 5, 3]
    },
    {
        id: 6,
        title: 'штанги',
        price: 14000,
        count: 5,
        marks: [3, 3, 3, 2]
    },
    {
        id: 7,
        title: 'стрелы',
        price: 1200,
        count: 55,
        marks: [3, 2, 4, 5]
    },
    {
        id: 8,
        title: 'мячи',
        price: 500,
        count: 49,
        marks: [5, 4, 4, 4]
    },
    {
        id: 9,
        title: 'сетка',
        price: 5000,
        count: 6,
        marks: [4, 5, 2, 5]
    },
    {
        id: 10,
        title: 'гантели',
        price: 3400,
        count: 12,
        marks: [3, 2, 4, 2]
    },
    {
        id: 11,
        title: 'маты',
        price: 16500,
        count: 7,
        marks: [4, 4, 4, 5]
    }
  ]

function task7() {
    clearOutput()

    function renderProducts(title, products) {
        const block = document.createElement('div');

        block.className = 'result-block';

        const items = products.map(product => `
            <div class="card">

                <div class="name">
                    ${product.title}
                </div>

                <div class="info">
                    Цена: ${product.price}
                </div>

                <div class="info">
                    Количество: ${product.count}
                </div>

                <div class="info">
                    ${
                        product.marks
                            ? `Оценки: ${product.marks}`
                            : `Сумма оценок: ${product.marks_total}`
                    }
                </div>

            </div>`).join('');

        block.innerHTML = `
            <h2>${title}</h2>

            <div class="cards">
                ${items}
            </div>`;

        output.append(block);
    }

    renderProducts(
        'Товары > 10',
        products.filter(elem => elem.count > 10)
    );

    renderProducts(
        'Цена 800–900',
        products.filter(elem =>
            elem.price >= 800 && elem.price <= 900
        )
    );

    renderProducts(
        'Сортировка по цене',
        [...products].sort((a, b) => b.price - a.price)
    );

    renderValue(
        'Общая стоимость товаров',
        products.reduce((acc, curr) => acc + curr.price, 0) + ' ₽'
    );

   const newProd = products.map(({ marks, ...product }) => ({
    ...product,
    marks_total: marks.reduce((acc, curr) => acc + curr, 0)
    }));

    renderProducts(
        'Сортировка по оценкам',
        newProd.sort((a, b) => a.marks_total - b.marks_total)
    );
}

class Email {
    constructor(text) {
        const [login, domain] = text.split('@');
        const [mail, domen] = domain.split('.');

        this._login = login;
        this._mail = mail;
        this._domen = domen;
    }

    get email() {
        return `${this._login}@${this._mail}.${this._domen}`;
    }

    get isValid() {
        let ban = '*#$%^';

        if (this._domen.length > 3) {
            return false;
        }

        for(let elem of ban) {
            if (this._login.includes(elem)) {
                return false;
            }                
        }

        return true
    }

    set setEmail(text) {
        this._login = text[0];
        this._mail = text[1];
        this._domen = text[2];
    }

}

class Contact extends Email {
    constructor(email, number) {
        super(email);

        this._phone = number
    }

    get phoneNumber() {  
        let res;

        if (this._phone[0] != '+') {
            res = 'Неизвестный'
        } else if (this._phone.length == 12) {
            res = 'Мобильный';
        } else if (this._phone.length == 18) {
            res = 'Городской'
        } else res = 'Неизвестный формат'

        return res
    }
}

function task8() {
    clearOutput();

    let em1 = new Email('momewo@gmail.com');
    let em2 = new Email('jdls*%@koko.labubu');

    renderValue('momewo@gmail.com isValid?', em1.isValid);
    renderValue('jdls*%@koko.labubu is valid?', em2.isValid);
    em2.setEmail = ['valid', 'mail', 'ex'];
    renderValue('setEmail = ["valid", "mail", "ex"] вывод', em2.email);

}

function task9() {
    clearOutput();
    let user1 = new Contact('momewo@gmail.com','+67676767676');
    let user2 = new Contact('other@mail.ru','676767676767');

    renderValue('get +67676767676', user1.phoneNumber);
    renderValue('get 676767676767', user2.phoneNumber);
}

const tasks = {
    task1,
    task2,
    task3,
    task4,
    task5,
    task6,
    task7,
    task8,
    task9
};

for (let i = 1; i <= 9; i++) {
    const btn = document.getElementById('t' + i);

    btn.addEventListener('click', () => {
        tasks['task' + i]();
    });
}