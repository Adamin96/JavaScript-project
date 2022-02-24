const title = "JavaScript-project";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 48;
const rollback = 58;
const fullPrice = 9000;
const adaptive = true;

console.log(typeof title, fullPrice, adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов", screenPrice, "рублей");
console.log("Стоимость разработки сайта", fullPrice, "рублей");
console.log(screens.toLowerCase());
console.log(screens.split(", "));
console.log(fullPrice * (rollback / 100), "рублей");
console.log("Hi, everybody");

alert("Welcome");