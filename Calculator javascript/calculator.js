let display = document.getElementById('display');

// Get all the buttons with the class 'button' and convert them to an array
let buttons = Array.from(document.getElementsByClassName('button'));

// Loop through each button and add a click event listener
buttons.map((button) => {
  button.addEventListener('click', (e) => {
    // Check the inner text of the clicked button
    switch (e.target.innerText) {
      case 'C':
        // Clear the display if the button inner text is 'C'
        display.innerText = '';
        break;
      case '=':
        // Evaluate the expression on the display and update the display with the result
        // If there is an error, update the display with 'Error'
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = 'Error';
        }
        break;
      case '←':
        // If the display has a value, remove the last character from it
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      default:
        // Append the inner text of the button to the display
        display.innerText += e.target.innerText;
    }
  });
});
