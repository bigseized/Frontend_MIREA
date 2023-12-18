//ЗАДАНИЕ 4
let pics = ['monkey1.jpg', 'monkey2.jpg', 'monkey3.jpg', 'monkey4.jpg', 'monkey5.jpg']
let info = ["Закупаем продукты в столовую МИРЭА","Завтрак при гастрите","Студенческий досуг", "Пришёл на экзамен по фронту",
"В муте клоун"]
let iterator = 0;
function loadMoreContent() {
    // Создаем новый элемент картинки
    const newImage = document.createElement('img');
    newImage.src = pics[iterator % pics.length]; // Укажите путь к новой картинке

    // Создаем новый элемент с текстом
    const newText = document.createElement('p');
    newText.textContent = info[iterator % pics.length]; // Вставьте новый текст
    
    const newSpan = document.createElement('span');

    // Находим элемент с классом infoCard внутри элемента с классом infoBlock
    const infoCard = document.querySelector('.infoBlock .infoCard');
    iterator++;
    // Добавляем созданные элементы в infoCard
    infoCard.appendChild(newImage);
    infoCard.appendChild(newText);
    infoCard.appendChild(newSpan);
}

function checkPosition() {
    // Нам потребуется знать высоту документа и высоту экрана:
    const height = document.body.offsetHeight
    const screenHeight = window.innerHeight
  
    // Они могут отличаться: если на странице много контента,
    // высота документа будет больше высоты экрана (отсюда и скролл).
  
    // Записываем, сколько пикселей пользователь уже проскроллил:
    const scrolled = window.scrollY
  
    // Обозначим порог, по приближении к которому
    // будем вызывать какое-то действие.
    // В нашем случае — четверть экрана до конца страницы:
    const threshold = height - screenHeight / 4
  
    // Отслеживаем, где находится низ экрана относительно страницы:
    const position = scrolled + screenHeight
  
    if (position >= threshold) {
      loadMoreContent();
    }
}

function throttle(callee, timeout) {
    let timer = null
  
    return function perform(...args) {
      if (timer) return
  
      timer = setTimeout(() => {
        callee(...args)
  
        clearTimeout(timer)
        timer = null
      }, timeout)
    }
}

// Функция для выполнения кода после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Функция-обработчик события прокрутки страницы
    

    // Добавляем слушателя события прокрутки к объекту window
    window.addEventListener('scroll', throttle(checkPosition, 250));
    window.addEventListener('resize', throttle(checkPosition, 250))
});