import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';

const passwordInput = document.querySelector('.passwordInput');
const generateBtn = document.querySelector('.generateBtn');
const rangeInput = document.querySelector('.rangeInput');
const rangeNumber = document.querySelector('.range-number');

const copyBtn = document.querySelector('.copy-icon');

const char = 'abcdefghijklmnñopqrstuvwxyz123456789.,-_{}[]()<>=+*/#$%&';

const generatePsw = () => {
  let psw = '';
  let pswLength = rangeInput.value;

  console.log(pswLength);
  for (let i = 0; i < pswLength; i++) {
    psw += char[Math.round(Math.random() * char.length)];
  }

  console.log(psw);

  passwordInput.value = psw;
};

generateBtn.addEventListener('click', () => {
  generatePsw();

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordInput.value);
    console.log(`Copied: ${psw}`);
    copyBtn.classList.replace('bi-clipboard', 'bi-clipboard-check');
  });
});

rangeInput.addEventListener('change', () => {
  rangeNumber.innerHTML = rangeInput.value;
});

generatePsw();
