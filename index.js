const passwordInput = document.querySelector('.passwordInput');
const generateBtn = document.querySelector('.generateBtn');
const rangeInput = document.querySelector('.rangeInput');
const rangeNumber = document.querySelector('.range-number');

const copyBtn = document.querySelector('.copy-icon');

const char = 'abcdefghijklmnñopqrstuvwxyz123456789.,-_{}[]()<>=+*/#$%&';

const generatePsw = () => {
  if(copyBtn.classList.contains('bi-clipboard-check')) copyBtn.classList.replace('bi-clipboard-check', 'bi-clipboard')
  let psw = '';
  let pswLength = rangeInput.value;

  for (let i = 0; i < pswLength; i++) {
    psw += char[Math.round(Math.random() * char.length)];
  }

  passwordInput.value = psw;

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordInput.value);
    console.log(`Copied: ${psw}`);
    copyBtn.classList.replace('bi-clipboard', 'bi-clipboard-check');
  });
};

generateBtn.addEventListener('click', () => {
  generatePsw();
});

rangeInput.addEventListener('change', () => {
  rangeNumber.innerHTML = rangeInput.value;
});

generatePsw();
