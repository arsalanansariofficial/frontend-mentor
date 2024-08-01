// * Card Display
const card_img_cvc = document.querySelector('.card-img-cvc');
const card_img_name = document.querySelector('.card-img-name');
const card_img_year = document.querySelector('.card-img-date > .year');
const card_img_month = document.querySelector('.card-img-date > .month');
const card_img_number = document.querySelector('.card-img-number');

// * Card Input
const card_cvc = document.querySelector('#cvc');
const exp_year = document.querySelector('#year');
const exp_month = document.querySelector('#month');
const card_number = document.querySelector('#number');
const cardholder_name = document.querySelector('#name');

// * Validation
const cvc_validation = document.querySelector('.cvc.validation');
const name_validation = document.querySelector('.name.validation');
const date_validation = document.querySelector('.date.validation');
const number_validation = document.querySelector('.number.validation');

// * Form
const form = document.querySelector('.card_form');

function update_value(element, default_value, value) {
  element.textContent = value ? value : default_value;
}

// * Formats input value like card input
// * Example 1234567891230000 -> 1234 5678 9123 0000
function formatInputValue(event) {
  let formatted_value = event.target.value
    .replace(/\s/g, '')
    .replace(/(\w{4})/g, '$1 ');
  if (formatted_value.length === 20) formatted_value = formatted_value.trim();
  return formatted_value;
}

function change_handler(max_length, element, validation, max_value, event) {
  const target = event.target;
  const value = event.target.value;
  if (value < 0) target.value = 0;
  if (value.length > max_length || value > max_value)
    target.value = target.value.slice(0, max_length);
  validation.classList.add('d-none');
  update_value(
    element,
    target.value.padStart(max_length, '0'),
    target.value.padStart(max_length, '0')
  );
}

card_cvc.addEventListener(
  'input',
  change_handler.bind(this, 3, card_img_cvc, cvc_validation, 999)
);

exp_year.addEventListener(
  'input',
  change_handler.bind(this, 2, card_img_year, date_validation, 99)
);

cardholder_name.addEventListener('input', function (event) {
  name_validation.classList.add('d-none');
  update_value(card_img_name, 'gwen tennyson', event.target.value);
});

exp_month.addEventListener('input', function (event) {
  const target = event.target;
  if (target.value > 12) target.value = '01';
  change_handler(2, card_img_month, date_validation, 12, event);
});

card_number.addEventListener('input', function (event) {
  const formatted_value = formatInputValue(event);
  card_img_number.textContent = formatted_value;
  number_validation.classList.add('d-none');
  if (formatted_value.length === 19) event.target.value = formatted_value;
  if (!event.target.value) card_img_number.textContent = '0000 0000 0000 0000';
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (!card_cvc.value || card_cvc.value <= 0 || card_cvc.value.length < 3)
    cvc_validation.classList.remove('d-none');
  if (!card_number.value || card_number.value.length < 19)
    number_validation.classList.remove('d-none');
  if (!cardholder_name.value) name_validation.classList.remove('d-none');
  if (
    !exp_month.value ||
    exp_month.value <= 0 ||
    exp_month.value.length < 2 ||
    !exp_year.value ||
    exp_year.value <= 0 ||
    exp_year.value.length < 2
  )
    date_validation.classList.remove('d-none');
});
