// 1. Select the form and the input field
const form = document.getElementById('numberForm');
const numberInput = document.getElementById('userNumber');

// 2. Add an event listener to wait for the user to click submit
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from reloading

    // 3. Get the value from the input and convert it to a real number
    const inputValue = Number(numberInput.value);

    // 4. Log the number to the developer console
    console.log("The number entered is:", inputValue);
});
