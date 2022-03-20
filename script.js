const title = prompt("Как назвается ваш проект?");

const screens = prompt(
  "Какие типы экранов нужно разработать? Простые, Сложные, Интерактивные?"
);

const screenPrice = +prompt("Сколько будет стоить данная работа?");

const adaptive = confirm("Нужен ли адаптив на сайте?");

const service1 = prompt("Какой дополнительный тип услуги №1 нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");

const service2 = prompt("Какой дополнительный тип услуги №2 нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");

const fullPrice = screenPrice + servicePrice1 + servicePrice2;

// Скидка
let discount;

if (fullPrice >= 30000) {
  discount = "Даем скидку в 10%";
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  discount = "Даем скидку в 5%";
} else if (fullPrice < 15000 && fullPrice >= 0) {
  discount = "Скидка не предусмотрена";
} else {
  discount = "Что то пошло не так";
}

const rollback = 10;

const rollbackPrice = fullPrice * (rollback / 100);

const servicePercentPrice = fullPrice - rollbackPrice;

console.log(typeof title, title);
console.log(typeof screens, screens);
console.log(typeof screenPrice, screenPrice);
console.log(typeof adaptive, adaptive);
console.log(typeof service1, service1);
console.log(typeof servicePrice1, servicePrice1);
console.log(typeof service2, service2);
console.log(typeof servicePrice2, servicePrice2);
console.log(typeof fullPrice, "итоговая стоимость работы =", fullPrice);
console.log(typeof rollbackPrice, "откат посреднику =", rollbackPrice);
console.log(
  typeof servicePercentPrice,
  "итоговая стоимость за вычетом отката посреднику =",
  servicePercentPrice
);
console.log(discount);
alert(discount);
