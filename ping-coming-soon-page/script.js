const form = document.querySelector('.subscribe');
const input = document.querySelector('#email');
const submit = document.querySelector('#submit');
const errorMsg = document.querySelector('.error-msg');

const emailValidation = (event) => {
    event.preventDefault();

    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (validEmail.test(input.value)) {
        form.submit();
    }
    else {
        form.classList.add('invalid');
        errorMsg.innerHTML = "Please provide a valid email address";
        input.style.border = '1px solid #ff0000';
    }
};

submit.addEventListener('click', emailValidation);
