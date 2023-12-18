// ЗАДАНИЕ 1

document.addEventListener("DOMContentLoaded", function() {
  replaceImg();
  let task1 = document.querySelector(".task1");
  task1.addEventListener("click", function(event) {
    let coord = document.querySelector('.coord');
    coord.textContent = 'x: ' + event.clientX + ', y: ' + event.clientY;
  })
})

window.addEventListener('resize', function() {
  replaceImg();
});

function replaceImg() {
  let task1Img = document.querySelector(".task1-img");
  task1Img.style.top = ((window.innerHeight - task1Img.offsetHeight) / 2) + 'px';
  task1Img.style.left = ((window.innerWidth - task1Img.offsetWidth) / 2) + 'px';
}

// ЗАДАНИЕ 2

let notificationCounter = 0;
let notificationInterval;
let notifications = [
  "ВАШ ВЫИГРЫШ! Получите уникальный приз сегодня!",
  "ВНИМАНИЕ! Специальное предложение на следующую покупку!",
  "ЭКСКЛЮЗИВ! Только сегодня - бесплатная доставка для вас!",
  "НОВИНКА! Попробуйте удивительный вкус в нашем меню!",
  "СКИДКА 50%! Только до конца недели - не упустите!",
  "КОНКУРС! Участвуйте и выиграйте крутые призы!",
  "СПЕЦИАЛЬНОЕ МЕРОПРИЯТИЕ! Соберите свою команду прямо сейчас!",
  "БЕСПЛАТНЫЙ ТЕСТ-ДРАЙВ! Оцените новинки первым!",
  "ЭКСКЛЮЗИВНЫЙ АКСЕССУАР! Получите его при следующей покупке!"
];


function startNotifications() {
  notificationInterval = setInterval(addNotification, 1000);
}

function stopNotifications() {
  clearInterval(notificationInterval);
}

function addNotification() {
  notificationCounter++;
  const notificationsDiv = document.querySelector('.notifications');
  const notification = document.createElement('div');
  const notificationText = notifications[notificationCounter % 9];
  notification.innerHTML = `<span class="notification-emoji">${String.fromCodePoint(notificationText.codePointAt(0))}</span> <span class="notification-text">${notificationText.slice(2)}</span> <i class="fa-solid fa-circle-xmark"></i>`;
  notificationsDiv.appendChild(notification);
  notification.classList.add('notification');
  // Обновляем счетчик новых уведомлений
  updateNotificationCounter();
}

function updateNotificationCounter() {
  const counterElement = document.querySelector('.notification-counter');
  if (counterElement) {
    counterElement.innerText = `Новых уведомлений: ${notificationCounter}`;
  } else {
    const notificationsContainer = document.querySelector('.notification-container');
    const counter = document.createElement('div');
    counter.classList.add('notification-counter');
    counter.innerText = `Новых уведомлений: ${notificationCounter}`;
    notificationsContainer.append(counter);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let notifications = document.querySelector(".notifications");
  notifications.addEventListener("click", function(event) {
    let notificationDelete = event.target;
    if (notificationDelete.classList.contains('fa-circle-xmark')) {
      let notification = notificationDelete.parentNode;
      notification.remove();
      notificationCounter--;
      const counterElement = document.querySelector('.notification-counter');
      counterElement.innerText = `Новых уведомлений: ${notificationCounter}`;
    }
  })
});


