const btnSend = document.querySelector("#btnSend");
const errorInputs = document.querySelectorAll("input[data-error]");
btnSend.addEventListener("click", isValidFields);

function isValidFields(e) {
    e.preventDefault();
    const fieldFirstName = document.querySelector("#firstName");
    const fieldLastName = document.querySelector("#lastName");
    const fieldEmail = document.querySelector("#email");
    const fieldPassword = document.querySelector("#password");
    if (fieldFirstName.value.trim() == '') {
        setError('First Name cannot be empty', '#firstName');
    }else if(fieldName.dataset.erro == 'error'){
        removeError('#firstName');
    }
    if (fieldLastName.value.trim() == '') {
        setError('Last Name cannot be empty', '#lastName');
    }else if(fieldName.dataset.erro == 'error'){
        removeError('#lastName');
    }
    if (fieldEmail.value.trim() == '') {
        setError('This field is required', '#email');
    }else if(!isValidEmail(fieldEmail.value.trim())){
        setError('Invalid Email Adress', '#email');
    }else if(fieldEmail.dataset.erro == 'error'){
        removeError('#email');
    }
    if (fieldPassword.value.trim() == '') {
        setError('Password cannot be empty', '#password');
    }else if(fieldPassword.dataset.erro == 'error'){
        removeError('#password');
    }
}

function setError(error, field) {
    const errorIcon = document.querySelector(`div > ${field} + span`);
    const errorElement = document.querySelector(`div > ${field}`);
    const errorField = document.querySelector(`${errorElement.parentElement.parentElement.tagName}`);
    const p = document.createElement("p");
    p.classList.add("error");
    p.innerText = error;
    errorElement.style.borderColor = 'hsl(0, 100%, 74%)';
    errorElement.dataset.error = 'error';
    errorIcon.style.display = 'block';
    if (errorField.children.length == 2) {
        errorField.removeChild(errorField.lastChild);
        errorField.appendChild(p)
    }else{
        errorField.appendChild(p);
    }
}
function removeError(field) {
    const errorField = document.querySelector(field);
    const errorElement = document.querySelector(`${field} + input`);
    errorElement.style.borderColor = 'hsl(229, 24%, 87%)';
    if (errorField.children.length == 2) {
        errorField.removeChild(errorField.lastChild);
    }
}