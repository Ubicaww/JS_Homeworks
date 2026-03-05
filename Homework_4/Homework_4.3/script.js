const birthYear = prompt("Введіть рік народження");
if (birthYear === null || birthYear === "") {
  alert("Шкода, що Ви не захотіли ввести свою дату народження");
}

const city = prompt("В якому місті Ви живете?");
if (city === null || city === "") {
  alert("Шкода, що Ви не захотіли ввести своє місто");
}

const sport = prompt("Ваш улюблений вид спорту?");
if (sport === null || sport === "") {
  alert("Шкода, що Ви не захотіли ввести свій улюбленний вид спорту");
}

const currentYear = new Date().getFullYear();
const age = birthYear ? currentYear - +birthYear : "невідомий";

let cityMessage;
switch (city ? city.toLowerCase() : "") {
  case "київ":
    cityMessage = "Ти живеш у столиці України";
    break;
  case "вашингтон":
    cityMessage = "Ти живеш у столиці США";
    break;
  case "лондон":
    cityMessage = "Ти живеш у столиці Великобританії";
    break;
  case "":
    cityMessage = "Місто не введено";
    break;
  default:
    cityMessage = `Ти живеш у місті ${city}`;
}

let sportMessage;
switch (sport ? sport.toLowerCase() : "") {
  case "футбол":
    sportMessage = "Круто! Хочеш стати як Ліонель Мессі?";
    break;
  case "баскетбол":
    sportMessage = "Круто! Хочеш стати як Майкл Джордан?";
    break;
  case "теніс":
    sportMessage = "Круто! Хочеш стати як Новак Джокович?";
    break;
  case "":
    sportMessage = "Улюблений спорт не введено";
    break;
  default:
    sportMessage = `Твій улюблений спорт — ${sport}`;
}

alert(`Твій вік: ${age}
${cityMessage}
${sportMessage}`);