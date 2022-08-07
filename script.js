/* Variables */
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btnForm = document.querySelector('#btn-form');
const trialForm = document.querySelector('#trial-form');

trialForm.addEventListener('submit', e =>{
    e.preventDefault();

    const firstValue = firstName.value;
    const lastValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if(firstValue === "") {
        agregarError('first-name', 'First Name cannot be empty');
    } else {
        eliminarError('first-name');
    }

    if(lastValue === "") {
        agregarError('last-name', 'Last Name cannot be empty');
    } else {
        eliminarError('last-name');
    }

    if(emailValue === "") {
        agregarError('email', 'Email cannot be empty');
    } else {
        eliminarError('email')
    }

    if(passwordValue === "") {
        agregarError("password", 'Password cannot be empty');
    } else {
        eliminarError('password');
    }

    function agregarError(campo, mensaje) {
        const inputContainer = trialForm[campo].parentNode;
        inputContainer.classList.add('error');

        const small = trialForm[campo].parentNode.querySelector('small');
        small.innerText = mensaje;
        small.style.opacity = "1";
    }
    
    function eliminarError(campo) {
        const inputContainer = trialForm[campo].parentNode;
        inputContainer.classList.remove('error');
        
        const small = inputContainer.querySelector('small');
        small.style.opacity = "0";
    }
    
})