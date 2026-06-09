const form = document.getElementById('carForm');

form.addEventListener('submit', function(event) {
    // Prevents the page from reload on button push
    preventdefault(). 

    //1. Get the input value and convert it to a floating-point Number
    const inputElement = parseFloat(document.getElementById('no-arrows-calculation').value)
    const inputValue = parseFloat(inputElement);

    //2. Make sure the inpust is a valid number before calculating.
    if (!NaN(inputValue)) {
        //3. We will divide by the number of days in the calendar field to be safe 29
        const result = inputValue / 29;

        //4. Display the result ( rounded to 2 decimal places using .toFixed()
        document.getElementById(outputResult).textContent = result.toFixed(2);
    } else {
        alert("Please enter a valid number")
    }
});