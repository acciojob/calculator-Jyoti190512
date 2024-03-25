document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('input');
  const clearButton = document.getElementById('clr');
  const equalsButton = document.getElementById('ans');

  // Function to clear the input field
  clearButton.addEventListener('click', function () {
    input.value = '';
  });

  // Function to evaluate the expression when equals button is clicked
  equalsButton.addEventListener('click', function () {
    const expression = input.value;
    const result = evaluateExpression(expression);
    if (result !== null) {
      input.value = result;
    } else {
      input.value = 'Error';
    }
  });

  // Function to handle button clicks and update input value
  document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', function () {
      const buttonText = this.textContent;
      input.value += buttonText;
    });
  });

  // Function to evaluate the expression and return the result
  function evaluateExpression(expression) {
    try {
      return eval(expression);
    } catch (error) {
      return null;
    }
  }
});
