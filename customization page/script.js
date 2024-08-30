document.getElementById('customizeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Optionally calculate and display BMI if needed
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    document.getElementById('bmi').value = bmi; // Optionally populate the BMI field

    alert('Your fitness plan has been submitted successfully!\nYour BMI is: ' + bmi);
});