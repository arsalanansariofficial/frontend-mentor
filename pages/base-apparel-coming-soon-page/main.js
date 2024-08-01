const form = document.querySelector('.hero_form');
const input = document.querySelector('.form-control > input');
const errorIcon = document.querySelector('.form-control > img');
const validation = document.querySelector('.form-control > span');

input.addEventListener('input', function () {
  input.classList.remove('invalid');
  errorIcon.classList.add('d-none');
  validation.classList.add('d-none');
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailRegex =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/;

  if (!emailRegex.test(input.value)) {
    input.classList.add('invalid');
    errorIcon.classList.remove('d-none');
    return validation.classList.remove('d-none');
  }
});
