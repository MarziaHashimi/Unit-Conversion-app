function convertUnits() {
    const inputNumber = document.getElementById("inputNumber").value;

    const lengthMeters = inputNumber;
    const lengthFeet = inputNumber * 3.28084;


    const volumeLiters = inputNumber;
    const volumeGallons = inputNumber * 0.264172;


    const massKilograms = inputNumber;
    const massPounds = inputNumber * 2.20462;


    document.getElementById("length-result").innerHTML = `${inputNumber} meters = ${lengthFeet.toFixed(3)} feet / ${inputNumber} feet = ${(lengthMeters / 3.28084).toFixed(3)} meters`;
    document.getElementById("volume-result").innerHTML = `${inputNumber} liters = ${volumeGallons.toFixed(3)} gallons / ${inputNumber} gallons = ${(volumeLiters / 0.264172).toFixed(3)} liters`;
    document.getElementById("mass-result").innerHTML = `${inputNumber} kilograms = ${massPounds.toFixed(3)} pounds / ${inputNumber} pounds = ${(massKilograms / 2.20462).toFixed(3)} kilograms`;
}