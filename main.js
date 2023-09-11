let randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let btnEl = document.getElementById('generate');
btnEl.addEventListener('click', () => {
    let minEl = document.getElementById('min');
    let maxEl = document.getElementById('max');

    let min = Number(minEl.value);
    let max = Number(maxEl.value);

    if(minEl.value === '' && maxEl.value === ''){
        alert('Please, enter the value of min and max numbers');
    } else if(minEl.value === ''){
        alert('Please, enter the value of min number');
    } else if(maxEl.value === '') {
        alert('Please, enter the value of max number');
    }

    if(min > max) {
        alert("The min number must be less then the max number, understand sir?");
    }
    let placeholdeerEl = document.getElementById('placeholder');
    placeholdeerEl.textContent = randomNumber(min, max);
}) 