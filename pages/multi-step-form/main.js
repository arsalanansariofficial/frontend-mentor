const formStepOne = document.querySelector('#step-1');
const formStepTwo = document.querySelector('#step-2');
const formStepThree = document.querySelector('#step-3');
const formStepFour = document.querySelector('#step-4');
const forms = document.querySelectorAll('form');
const formSteps = document.querySelectorAll('.form-step');
const steps = document.querySelectorAll('.step');

const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPh = document.querySelector('#ph-number');

const validationPh = document.querySelector('.ph.validation');
const validationName = document.querySelector('.name.validation');
const validationEmail = document.querySelector('.email.validation');

const btnPrimary = document.querySelector('.btn-primary');
const btnSecondary = document.querySelector('.btn-secondary');

const rental = document.querySelector('#rental');
const planRadios = document.querySelectorAll('input[name="plan"]');
const onlineService = document.querySelector('#online-service');
const largerStorage = document.querySelector('#larger-storage');
const customizableProfile = document.querySelector('#customizable-profile');

const addOnLabel = document.querySelector('.details .plan-label.add-on-label');
const addOnPrice = document.querySelector('.plan-details > .add-on-price');

const addOnList = document.querySelector('.add-ons-list');

const planTotalLabel = document.querySelector('.plan-total > .add-on-label');
const planTotalPrice = document.querySelector('.plan-total > .add-on-price');

const editButton = document.querySelector('a.plan-price.add-on-description');

const formActions = document.querySelector('.form-actions');

let stepCount = 0;
let currentStep = 1;
let planType = 'monthly';
let planName = 'arcade';
let selectedAddOns = [];

const userData = {
  userDetails: {
    name: String(),
    email: String(),
    phone: Number()
  },
  plan: {
    name: planName,
    type: planType,
    price: 9
  },
  addOns: []
};

const plans = {
  arcade: {
    monthly: {
      price: 9
    },
    yearly: {
      price: 90
    }
  },
  advanced: {
    monthly: {
      price: 12
    },
    yearly: {
      price: 120
    }
  },
  pro: {
    monthly: {
      price: 15
    },
    yearly: {
      price: 150
    }
  }
};

const addOns = {
  onlineService: {
    monthly: {
      price: 1
    },
    yearly: {
      price: 10
    }
  },
  largerStorage: {
    monthly: {
      price: 2
    },
    yearly: {
      price: 20
    }
  },
  customizableProfile: {
    monthly: {
      price: 2
    },
    yearly: {
      price: 20
    }
  }
};

rental.addEventListener('change', function (event) {
  selectedAddOns = [];
  userData.addOns = [];
  planType = rental.checked ? 'yearly' : 'monthly';
  addPlan(planName, planType, plans[planName][planType].price);
});

planRadios.forEach(function (planRadio) {
  planRadio.addEventListener('change', function () {
    selectedAddOns = [];
    userData.addOns = [];
    planName = document.querySelector('input[name="plan"]:checked').value;
    addPlan(planName, planType, plans[planName][planType].price);
  });
});

onlineService.addEventListener('change', addAddon);
largerStorage.addEventListener('change', addAddon);
customizableProfile.addEventListener('change', addAddon);

function addPlan(name, type, price) {
  userData.plan = { name, type, price };
}

function addAddon(event) {
  const checked = event.target.checked;
  const value = event.target.value;
  if (checked) {
    const price = addOns[value][planType].price;
    selectedAddOns.push({ name: value, price });
  } else {
    selectedAddOns = selectedAddOns.filter(function (addOn) {
      return addOn.name !== value;
    });
  }
  userData.addOns = selectedAddOns;
}

function removeValidation(input, label) {
  input.classList.remove('invalid');
  label.classList.add('d-none');
}

function addValidation(input, label) {
  input.classList.add('invalid');
  label.classList.remove('d-none');
}

function hideForms() {
  formSteps.forEach(function (form) {
    form.classList.add('d-none');
  });
}

function changeActiveStep(decrease = false) {
  steps.forEach(function (step) {
    step.classList.remove('active');
  });
  if (decrease && stepCount > 0) stepCount--;
  if (!decrease && stepCount < 4) stepCount++;
  if (stepCount > 0) {
    btnSecondary.classList.remove('d-none');
  } else btnSecondary.classList.add('d-none');
  if (stepCount > 3) {
    formActions.classList.add('d-none');
  } else formActions.classList.remove('d-none');
  if (stepCount <= 3) steps[stepCount].classList.add('active');
}

function increaseStep() {
  changeActiveStep();
  hideForms();
  formSteps[currentStep].classList.remove('d-none');
}

function decreaseStep() {
  hideForms();
  if (currentStep === 3) {
    userData.addOns = [];
    selectedAddOns = [];
  }
  if (currentStep > 1) currentStep--;
  changeActiveStep(true);
  forms[currentStep].reset();
  formSteps[currentStep - 1].classList.remove('d-none');
  btnPrimary.setAttribute('form', `step-${currentStep}`);
}

inputName.addEventListener(
  'input',
  removeValidation.bind(this, inputName, validationName)
);

inputEmail.addEventListener(
  'input',
  removeValidation.bind(this, inputEmail, validationEmail)
);

inputPh.addEventListener(
  'input',
  removeValidation.bind(this, inputPh, validationPh)
);

btnSecondary.addEventListener('click', decreaseStep);

editButton.addEventListener('click', function (event) {
  event.preventDefault();
  hideForms();
  currentStep = 2;
  stepCount = 1;
  selectedAddOns = [];
  userData.addOns = [];
  forms[2].reset();
  formSteps[currentStep - 1].classList.remove('d-none');
  btnPrimary.setAttribute('form', `step-${currentStep}`);
});

formStepOne.addEventListener('submit', function (event) {
  event.preventDefault();
  let isValid = true;

  if (!inputName.value) {
    isValid = false;
    addValidation(inputName, validationName);
  }

  if (!inputEmail.value) {
    isValid = false;
    addValidation(inputEmail, validationEmail);
  }

  if (!inputPh.value) {
    isValid = false;
    addValidation(inputPh, validationPh);
  }

  if (!isValid) return;

  const name = inputName.value;
  const email = inputEmail.value;
  const phone = inputPh.value;

  userData.userDetails = { name, email, phone };
  increaseStep();
  currentStep++;
  btnPrimary.setAttribute('form', `step-${currentStep}`);
});

formStepTwo.addEventListener('submit', function (event) {
  event.preventDefault();
  increaseStep();
  currentStep++;
  btnPrimary.setAttribute('form', `step-${currentStep}`);
});

formStepThree.addEventListener('submit', function (event) {
  event.preventDefault();
  addOnLabel.textContent = `${userData.plan.name} (${userData.plan.type})`;
  addOnPrice.textContent = `$${userData.plan.price}/${
    planType === 'yearly' ? 'yr' : 'mo'
  }`;

  const totalPrice =
    userData.plan.price +
    userData.addOns.reduce(function (prev, current) {
      return prev + current.price;
    }, 0);

  planTotalLabel.textContent = `Total (${userData.plan.type})`;
  planTotalPrice.textContent = `$${totalPrice}/${
    planType === 'yearly' ? 'yr' : 'mo'
  }`;

  addOnList.innerHTML = String();
  userData.addOns.forEach(function (addon) {
    const addOn = document.querySelector('template').content.cloneNode(true);
    addOn.querySelector('.plan-label.add-on-label').textContent = addon.name;
    addOn.querySelector('.add-on-price').textContent = `$${addon.price}`;
    addOnList.appendChild(addOn);
  });

  increaseStep();
  currentStep++;
  btnPrimary.setAttribute('form', `step-${currentStep}`);
});

formStepFour.addEventListener('submit', function (event) {
  event.preventDefault();
  increaseStep();
});
