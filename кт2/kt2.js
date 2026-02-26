let word = 'Арнольд';
word = word.toLowerCase();
let sword = word.split("");
for (let i = word.length - 1; i >= 0; i--)
{
    if (sword[i] == "а" || sword[i] == "о")
    {
        sword.splice(i, 1);
    }
}
console.log(sword);

let num = 20;

for (let i = num; i > 0; i--)
{
    if (num % 3 == 0)
    {
        console.log(num);
    }
    num--;
}

let num2 = 5;
let ch = 1;
let string = "";
for (let i = num2; i > 0; i--)
{
    string = string + ch;
    ch++;
}
console.log(string);

let num3 = 5;
let res = 1;
for (let i = 1; i <= num3; i++)
{
    res *= i;
}
console.log(res);

let word2 = "поп";
let answer = "YES"
word = word2.toLowerCase();
let palindrom = true;
for (let i = 0; i < word2.length / 2; i++) 
{
    if (word[i] !== word[word.length - 1 - i]) 
    {
        palindrom = false;
        answer = "NO"
        break;

    }
}
console.log(answer);