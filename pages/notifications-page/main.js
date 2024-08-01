const linkSecondary = document.querySelector('.link-secondary');
const notificationList = document.querySelectorAll('.notification');
const headerNotification = document.querySelector('.header_notification');
const notifications = document.querySelectorAll(
  '.notification > .notification_main'
);

linkSecondary.addEventListener('click', function (event) {
  event.preventDefault();
  headerNotification.classList.add('d-none');
  notificationList.forEach(function (notification) {
    notification.classList.remove('new');
  });
});

notifications.forEach(function (notification) {
  notification.addEventListener('click', function (event) {
    const messageBox = event.target.querySelector(' .message-box');
    if (messageBox) messageBox.classList.toggle('d-none');
  });
});
