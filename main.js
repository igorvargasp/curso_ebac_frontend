document.getElementById('submit-button').addEventListener('click', e => e.preventDefault())

let inputA = document.getElementById('input-a')
let inputB = document.getElementById('input-b')
let button = document.getElementById('submit-button')
let alerta = document.querySelector('.alert')

button.addEventListener('click', () => {
    if (inputA.value !== '' && inputB.value !== '') {
        if (inputA.value >= inputB.value) {
            alerta.innerHTML = 'A afirmação é falsa!'
            alerta.classList.remove('yellow-alert', 'green-alert')
            alerta.classList.add('red-alert')
        } else {
            alerta.innerHTML = 'A afirmação é verdadeira!'
            alerta.classList.remove('red-alert', 'yellow-alert')
            alerta.classList.add('green-alert')
        }
    } else {
        alerta.innerHTML = 'Preencha os dois campos de número!'
        alerta.classList.remove('green-alert', 'red-alert')
        alerta.classList.add('yellow-alert')
    }
});