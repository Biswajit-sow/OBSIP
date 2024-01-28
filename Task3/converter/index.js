function convertTemperature() {
    let temperatureInput = document.getElementById('temperature').value;
    let inputUnitSelect = document.getElementById('inputUnit');
    let outputUnitSelect = document.getElementById('outputUnit');
    let resultDiv = document.getElementById('result');

    // Validate input
    if (!temperatureInput || isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    // Get selected units
    let inputUnit = inputUnitSelect.options[inputUnitSelect.selectedIndex].value;
    let outputUnit = outputUnitSelect.options[outputUnitSelect.selectedIndex].value;

    // Perform conversion
    let convertedTemperature = convertTemperatureUnit(parseFloat(temperatureInput), inputUnit, outputUnit);

    // Display result with animation
    resultDiv.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${outputUnit.toUpperCase()}`;
    resultDiv.style.opacity = 0;
    setTimeout(() => {
        resultDiv.style.opacity = 1;
    }, 100);
}

function convertTemperatureUnit(temperature, inputUnit, outputUnit) {
    if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
        return convertToFahrenheit(temperature);
    } else if (inputUnit === 'celsius' && outputUnit === 'kelvin') {
        return convertToKelvin(temperature);
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
        return convertToCelsius(temperature);
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'kelvin') {
        return convertToKelvin(convertToCelsius(temperature));
    } else if (inputUnit === 'kelvin' && outputUnit === 'celsius') {
        return convertToCelsius(temperature);
    } else if (inputUnit === 'kelvin' && outputUnit === 'fahrenheit') {
        return convertToFahrenheit(convertToCelsius(temperature));
    } else {
        return temperature; // No conversion needed
    }
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}

function convertToKelvin(celsius) {
    return celsius + 273.15;
}
