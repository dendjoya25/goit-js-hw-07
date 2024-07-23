const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', () => {
  const name = inputName.value.trim();
  outputName.textContent = name.length > 0 ? name : 'Anonymous';
});
