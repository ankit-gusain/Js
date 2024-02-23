let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let height = document.querySelector('#height').value;
    height = parseInt(height);

    let weight = document.querySelector('#weight').value;
    weight = parseInt(weight);

    let results = document.querySelector('#results');

    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Invalid height or weight';
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>BMI: ${bmi}</span>`;
    }
});
