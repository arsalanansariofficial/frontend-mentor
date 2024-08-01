let hoverIndex = -1,
  selectedIndex = -1;
const rating = document.querySelector('.rating');
const points = document.querySelectorAll('.point');
const feedback = document.querySelector('.feedback');
const submitBtn = document.querySelector('.rating > button');
const feedbackRating = document.querySelector('.feedback_rating > span');

function justify(point, index) {
  points.forEach(function (point) {
    point.classList.remove('selected');
    point.classList.remove('preceeding');
  });
  point.classList.add('selected');
  if (index > 0) points[index - 1].classList.add('preceeding');
}

function rate(point, index) {
  index === selectedIndex ? (selectedIndex = -1) : (selectedIndex = index);
  justify(point, index);
}

function hover(point, index) {
  hoverIndex = index;
  justify(point, index);
}

function leave(point, index) {
  if (selectedIndex > -1) points[selectedIndex].classList.add('selected');
  if (selectedIndex > 0) points[selectedIndex - 1].classList.add('preceeding');
  if (selectedIndex !== hoverIndex) {
    point.classList.remove('selected');
    if (index > 0) points[index - 1].classList.remove('preceeding');
  }
}

submitBtn.addEventListener('click', function () {
  rating.classList.add('d-none');
  feedback.classList.remove('d-none');
  feedbackRating.textContent = selectedIndex + 1;

  setTimeout(function () {
    rating.classList.remove('d-none');
    feedback.classList.add('d-none');
  }, 1000);
});

points.forEach(function (point, index) {
  point.addEventListener('click', rate.bind(null, point, index));
  point.addEventListener('mouseover', hover.bind(null, point, index));
  point.addEventListener('mouseleave', leave.bind(null, point, index));
});
