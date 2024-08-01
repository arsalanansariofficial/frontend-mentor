const feedback = document.querySelector('.feedback');
const form = document.querySelector('.notification-form');
const btn = document.querySelector('.notification-form > button');
const input = document.querySelector('.notification-form > input');
const feedback_desktop = document.querySelector('.feedback-desktop');

function hide() {
  input.classList.remove('invalid');
  feedback.classList.add('d-none');
  feedback_desktop.classList.add('d-none');
}

function validate() {
  const emailRegex =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/;
  if (!emailRegex.test(input.value)) {
    input.classList.add('invalid');
    feedback.classList.remove('d-none');
    return feedback_desktop.classList.remove('d-none');
  }
}

input.addEventListener('input', hide);
btn.addEventListener('mouseover', validate);

form.addEventListener('submit', function (event) {
  event.preventDefault();
  validate();
});
