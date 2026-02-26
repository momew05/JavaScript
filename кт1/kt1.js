let price = 100;
let range = "week";

const periods = {
  "month": "месяц",
  "day": "день",
  "week": "неделя"
};

const result = `${price} Р в ${periods[range]}`;
console.log(result);

let temp = 17;
let weather= "cloudy";
let activity;

if (temp >= 25 && weather == "clear") 
{
   activity = "golf";
}
else if (10 <= temp <= 24 && weather == "cloudy")
{
    activity = "bowling";
}
else 
{
    activity = "hiking";
};

console.log(activity);

let a = 15;
let b = 3;
let sign = "+";

const operation = {
  "+": a + b,
  "-": a - b,
  "*": a * b,
  "/": a / b
};

if (b == 0) 
{
    console.log("делить на ноль не по христиански");
}
else 
{
    console.log(operation[sign]);
};

let word = "prikol";

if (Number.isInteger(word.length**(1/2)))
{
    console.log("1");
}
else 
{
    console.log("0");
};

let sum = 0;
for (let i = 1; i <=10; i++)
{
    let sum = +i;
}
console.log(sum);
