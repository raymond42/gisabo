const burger = document.querySelector('.ham-burger');

burger.addEventListener('click', () => {
  document.querySelector('.nav-items').classList.toggle('show');

  window.onscroll = function () {
    window.scrollTo(0, 0);
  };
});
const showClass = document.querySelector('.show');

document.addEventListener('click', function (event) {
  const isClickInside = burger.contains(event.target);

  if (!isClickInside || !showClass) {
    document.querySelector('.nav-items').classList.remove('show');
    window.onscroll = function () {};
  }
});

window.onscroll = function () {
  myFunction();
};

const navbar = document.querySelector('.navbar');

const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

const INITIAL_RW_FEES = 9;
const INITIAL_BUR_FEES = 7;

const amountInput = document.getElementById('amount-input');
const amountEntered = document.getElementById('amount-entered');
const transferFees = document.getElementById('transfer-fees');
const amountToReceive = document.getElementById('amount-to-receive');
const fromCurrency = document.getElementById('from-currency');
const receivingCurrency = document.getElementById('receiving-currency');
const calculateButton = document.getElementById('calculate-button');
const amountValidation = document.getElementById('amount-validation');
const fromCurrencyValidation = document.getElementById(
  'from-currency-validation'
);
const receivedCurrencyValidation = document.getElementById(
  'received-currency-validation'
);

amountInput.addEventListener('keyup', inputResults);
amountEntered.addEventListener('change', inputResults);
transferFees.addEventListener('change', inputResults);
amountToReceive.addEventListener('change', inputResults);
fromCurrency.addEventListener('change', inputResults);
receivingCurrency.addEventListener('change', inputResults);
calculateButton.addEventListener('click', showResults);

let transferFeesValue;
let amountReceivedValue;

function inputResults() {
  amountEntered.value = Number(amountInput.value);
  if (receivingCurrency.value === 'buf') {
    transferFeesValue = `${INITIAL_BUR_FEES} BUF`;
  }
  if (receivingCurrency.value === 'rwf') {
    transferFeesValue = `${INITIAL_RW_FEES} RWF`;
  }
  if (receivingCurrency.value === 'cad') {
    transferFeesValue = `${INITIAL_RW_FEES} CAD`;
  }
  if (receivingCurrency.value === 'select') {
    transferFeesValue = 0;
  }
  if (fromCurrency.value === 'euro' && receivingCurrency.value === 'buf') {
    amountReceivedValue = `${
      amountInput.value * 2322.97 - INITIAL_BUR_FEES
    } BUF`;
  }
  if (fromCurrency.value === 'usd' && receivingCurrency.value === 'buf') {
    amountReceivedValue = `${
      Number(amountInput.value) * 1943.99 - INITIAL_BUR_FEES
    } BUF`;
  }
  if (fromCurrency.value === 'cad' && receivingCurrency.value === 'buf') {
    amountReceivedValue = `${
      Number(amountInput.value) * 1498.16 - INITIAL_BUR_FEES
    } BUF`;
  }

  if (fromCurrency.value === 'euro' && receivingCurrency.value === 'rwf') {
    amountReceivedValue = `${
      Number(amountInput.value) * 1186.07 - INITIAL_RW_FEES
    } RWF`;
  }
  if (fromCurrency.value === 'usd' && receivingCurrency.value === 'rwf') {
    amountReceivedValue = `${
      Number(amountInput.value) * 992.11 - INITIAL_RW_FEES
    } RWF`;
  }
  if (fromCurrency.value === 'cad' && receivingCurrency.value === 'rwf') {
    amountReceivedValue = `${
      Number(amountInput.value) * 764.58 - INITIAL_RW_FEES
    } RWF`;
  }

  if (fromCurrency.value === 'euro' && receivingCurrency.value === 'cad') {
    amountReceivedValue = `${
      Number(amountInput.value) * 1.55 - INITIAL_RW_FEES
    } CAD`;
  }
  if (fromCurrency.value === 'usd' && receivingCurrency.value === 'cad') {
    amountReceivedValue = `${
      Number(amountInput.value) * 1.3 - INITIAL_RW_FEES
    } CAD`;
  }
  if (fromCurrency.value === 'cad' && receivingCurrency.value === 'cad') {
    amountReceivedValue = `${
      Number(amountInput.value) * 1 - INITIAL_RW_FEES
    } CAD`;
  }
}

function showResults(event) {
  event.preventDefault();

  if (amountInput.value) {
    if (fromCurrency.value === 'select') {
      amountValidation.style.display = 'none';
      receivedCurrencyValidation.style.display = 'none';
      amountToReceive.style.display = 'none';
      transferFees.style.display = 'none';
      fromCurrencyValidation.style.display = 'block';
    } else if (receivingCurrency.value === 'select') {
      amountValidation.style.display = 'none';
      fromCurrencyValidation.style.display = 'none';
      amountToReceive.style.display = 'none';
      transferFees.style.display = 'none';
      receivedCurrencyValidation.style.display = 'block';
    } else {
      amountToReceive.style.display = 'block';
      transferFees.style.display = 'block';
      amountValidation.style.display = 'none';
      receivedCurrencyValidation.style.display = 'none';
      fromCurrencyValidation.style.display = 'none';
      transferFees.value = transferFeesValue;
      amountToReceive.value = amountReceivedValue;
    }
  } else {
    amountToReceive.value = amountReceivedValue;
    transferFees.value = transferFeesValue;
    amountValidation.style.display = 'block';
    fromCurrencyValidation.style.display = 'none';
    receivedCurrencyValidation.style.display = 'none';
    amountToReceive.style.display = 'none';
    transferFees.style.display = 'none';
  }
}

const coll = document.getElementsByClassName('collapsible');
const minusIcon = document.querySelector('.minus-icon');
const plusIcon = document.querySelector('.plus-icon');
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;

    if (content.style.display === 'block') {
      content.style.display = 'none';
      plusIcon.style.display = 'inline';
      minusIcon.style.display = 'none';
    } else if (content.style.display !== 'block') {
      content.style.display = 'block';
      minusIcon.style.display = 'inline';
      plusIcon.style.display = 'none';
    } else {
      content.style.display = 'block';
      minusIcon.style.display = 'inline';
      plusIcon.style.display = 'none';
    }

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}
