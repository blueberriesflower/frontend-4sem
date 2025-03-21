document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const changeGreetingButton = document.getElementById('change-greeting');

    changeGreetingButton.addEventListener('click', () => {
        greetingElement.textContent = 'Hello, FEFU!';
    });
});