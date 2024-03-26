document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.textContent;

            switch (value) {
                case '=':
                    evaluateExpression();
                    break;
                case 'C':
                    clearInput();
                    break;
                case '<-':
                    deleteLastCharacter();
                    break;
                case '.':
                    addDecimalPoint();
                    break;
                default:
                    appendToInput(value);
                    break;
            }
        });
    });

    function appendToInput(value) {
        input.value += value;
    }

    function clearInput() {
        input.value = '';
    }

    function deleteLastCharacter() {
        input.value = input.value.slice(0, -1);
    }

    function addDecimalPoint() {
        if (!input.value.includes('.')) {
            input.value += '.';
        }
    }

    function evaluateExpression() {
        try {
            input.value = eval(input.value);
        } catch (error) {
            input.value = 'Error';
        }
    }
});

