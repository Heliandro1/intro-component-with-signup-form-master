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
    }else if(fieldFirstName.dataset.error == 'error'){
        removeError('#firstName');
    }
    if (fieldLastName.value.trim() == '') {
        setError('Last Name cannot be empty', '#lastName');
    }else if(fieldLastName.dataset.error == 'error'){
        removeError('#lastName');
    }
    if (fieldEmail.value.trim() == '') {
        setError('Looks like this is not an email', '#email');
    }else if(!isValidEmail(fieldEmail.value.trim())){
        setError('Looks like this is not an email', '#email');
    }else if(fieldEmail.dataset.error == 'error'){
        removeError('#email');
    }
    if (fieldPassword.value.trim() == '') {
        setError('Password cannot be empty', '#password');
    }else if(fieldPassword.dataset.error == 'error'){
        removeError('#password');
    }
}

function setError(error, field) {
    const errorIcon = document.querySelector(`div > ${field} + span`);
    const errorElement = document.querySelector(`div > ${field}`);
    const p = document.createElement("p");
    p.classList.add("error");
    p.innerText = error;
    errorElement.style.borderColor = 'hsl(0, 100%, 74%)';
    errorElement.dataset.error = 'error';
    errorIcon.style.display = 'block';
    if (errorElement.parentElement.parentElement.children.length == 2) {
        errorElement.parentElement.parentElement.removeChild(errorElement.parentElement.parentElement.lastChild);
        errorElement.parentElement.parentElement.appendChild(p)
    }else{
        errorElement.parentElement.parentElement.appendChild(p);
    }
}
function removeError(field) {
    const errorElement = document.querySelector(field);
    const errorIcon = document.querySelector(`${field} + span`);
    errorElement.style.borderColor = 'hsl(246, 25%, 77%)';
    if (errorElement.parentElement.parentElement.children.length == 2) {
        errorElement.parentElement.parentElement.removeChild(errorElement.parentElement.parentElement.lastChild);
        errorIcon.style.display = 'none';
    }
}
function isValidEmail(email) {
    let regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/gi
    if (regex.test(email)) {
        return true;
    }
    return false;
}