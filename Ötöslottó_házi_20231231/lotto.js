function otoslotto() {
    let numbers = [];

    while (numbers.length < 5) {
        let randomNum = Math.floor(Math.random() * 90) + 1;

        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    return numbers.sort((a, b) => a - b);
}

document.getElementById('generateNumbers').addEventListener('click', function () {
    const resultElement = document.getElementById('result');
    
    const generatedNumbers = otoslotto();

    // eredmény
    resultElement.textContent = `Ezeket játszd meg: ${generatedNumbers.join(', ')}`;
});