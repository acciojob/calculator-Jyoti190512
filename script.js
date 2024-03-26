document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = this.textContent;
            const currentValue = input.value;

            switch (buttonText) {
                case '=':
                    evaluateExpression();
                    break;
                case 'C':
                    clearInput();
                    break;
                case '<-':
                    deleteLastCharacter();
                    break;
                default:
                    appendToInput(buttonText);
                    break;
            }
        });
    });

    function appendToInput(buttonText) {
        input.value += buttonText;
    }

    function clearInput() {
        input.value = '';
    }

    function deleteLastCharacter() {
        input.value = input.value.slice(0, -1);
    }

    function evaluateExpression() {
        try {
            input.value = eval(input.value);
        } catch (error) {
            input.value = 'Error';
        }
    }
});


