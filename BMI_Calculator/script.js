const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('button');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter a Valid Height - ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please Enter a Valid Weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;
  }
});
