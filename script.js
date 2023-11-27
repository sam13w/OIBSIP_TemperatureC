function convertTemperature() {
    
    var temperatureInput = document.getElementById("temperature").value;
    var unitSelect = document.getElementById("unit");
    var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    var convertedTemperature;
    switch (selectedUnit) {
        case "celsius":
            convertedTemperature = (temperatureInput - 32) * (5/9);
            break;
        case "fahrenheit":
            convertedTemperature = (temperatureInput * 9/5) + 32;
            break;
        case "kelvin":
            convertedTemperature = parseFloat(temperatureInput) + 273.15;
            break;
    }

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${selectedUnit.toUpperCase()}`;
}
