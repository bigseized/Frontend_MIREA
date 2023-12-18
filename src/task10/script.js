function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    let userInput = prompt("Введите число:", "");

    // Проверка, что пользователь ввел число
    if (!isNaN(parseFloat(userInput)) && isFinite(userInput)) {
      this.value += parseFloat(userInput);
    } else {
      alert("Вы ввели не число. Попробуйте ещё раз.");
    }
  };
}

// Пример использования функции truncate
const text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const truncatedText1 = truncate(text1, 8);

const text2 = "Short text";
const truncatedText2 = truncate(text2, 10);

const text3 = "This is a very long piece of text that needs to be truncated.";
const truncatedText3 = truncate(text3, 20);

// Добавляем текст на карточки
document.getElementById("card1").textContent = truncatedText1;
document.getElementById("card2").textContent = truncatedText2;
document.getElementById("card3").textContent = truncatedText3;

// Добавляем переменную для суммы аккумулятора
const startingValueElement = document.getElementById("startingValue");
const accumulator = new Accumulator(parseInt(startingValueElement.textContent)); // начальное значение 10

// Вешаем обработчик клика на кнопку
document.getElementById("readValueBtn").addEventListener("click", function () {
  accumulator.read(); // вызываем метод read при клике на кнопку
  startingValueElement.textContent = accumulator.value; // обновляем отображение начального значения
  alert("Текущее значение аккумулятора: " + accumulator.value); // выводим текущее значение
});
