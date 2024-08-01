const chart = document.querySelector('ul.chart');
const chartBalance = document.querySelector('.chart-footer .left_balance');

const expenses = [
  {
    day: 'mon',
    amount: 17.45
  },
  {
    day: 'tue',
    amount: 34.91
  },
  {
    day: 'wed',
    amount: 52.36
  },
  {
    day: 'thu',
    amount: 31.07
  },
  {
    day: 'fri',
    amount: 23.39
  },
  {
    day: 'sat',
    amount: 43.28
  },
  {
    day: 'sun',
    amount: 25.48
  }
];

const amounts = expenses.map(function (expense) {
  return expense.amount;
});

const totalAmount = amounts.reduce(function (prev, current) {
  return prev + current;
}, 0);

const maxExpense = Math.max(...amounts);

chartBalance.textContent = `$${totalAmount}`;

expenses.forEach(function (expense, index) {
  const template = document.querySelector('template').content.cloneNode(true);
  const height = `${(expense.amount / maxExpense) * 100}`;
  const block = template.querySelector('.block');
  block.style.height = `${height}%`;
  if (expense.amount === maxExpense) block.classList.add('active');
  template.querySelector('.day_name').textContent = expense.day;
  chart.appendChild(template);
  chart
    .querySelector(`li:nth-of-type(${index + 1}) > .block`)
    .setAttribute('data-expense', `$${expense.amount}`);
});
