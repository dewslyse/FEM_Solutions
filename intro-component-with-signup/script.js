function isFormValid() {
    const fName = document.querySelector('#first-name');
    const lName = document.querySelector('#last-name');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    if (fName.value.trim() === "") {
        fName.classList.add('show-error-icon');
        fName.nextElementSibling.classList.add('display-error-text');
    }

    if (lName.value.trim() === "") {
        lName.classList.add('show-error-icon');
        lName.nextElementSibling.classList.add('display-error-text');
    }

    if (email.value.trim() === "" || !validEmail(email.value)) {
        email.classList.add('show-error-icon');
        email.nextElementSibling.classList.add('display-error-text');
    }

    if (password.value.trim() === "") {
        password.classList.add('show-error-icon');
        password.nextElementSibling.classList.add('display-error-text');
    }
}

// Check validity of email
function validEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

// Remove error message and icon when user starts typing
const input = document.querySelectorAll('input');

input.forEach(element => {
    element.addEventListener('input', () => {
        element.classList.remove('show-error-icon');
        element.nextElementSibling.classList.remove('display-error-text');
    })
});
