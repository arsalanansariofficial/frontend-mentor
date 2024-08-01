const body = document.querySelector('body');
const tooltip = document.querySelector('.tooltip');
const share_btn = document.querySelector('.share-btn');

body.addEventListener('click', function () {
  tooltip.classList.remove('translate-0');
});

share_btn.addEventListener('click', function (event) {
  event.stopPropagation();
  tooltip.classList.add('translate-0');
});
