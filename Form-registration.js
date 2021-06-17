//form and inputs
const formRegistration = document.querySelector('form');
const inputFirstName = document.querySelector('#firstName');
const inputSecondName = document.querySelector('#secondName');
const inputNumber = document.querySelector('#number');
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password');

const correctInputCheckMark = document.querySelectorAll('.correct_input'); //("✓")
const blockPromptQuestionMark = document.querySelectorAll('.block_prompt'); //("?")



//errors
const errorFirstName = document.querySelector('#errorFirstName');
const errorSecondName = document.querySelector('#errorSecondName');
const errorNumber = document.querySelector('#errorNumber');
const errorEmail = document.querySelector('#errorEmail');
const errorPassword = document.querySelector('#errorPassword');

const errorBorder = '2px solid red'
const correctInputBorder = '2px solid rgb(72, 139, 53)';

//show password
const showPassword = document.querySelector('#show_password');

showPassword.addEventListener('click', () => {

    if (showPassword.classList.contains('fa-eye') === true) {
        showPassword.classList.remove('fa-eye');
        showPassword.classList.add('fa-eye-slash');
        inputPassword.type = "text";
    } else {
        showPassword.classList.remove('fa-eye-slash');
        showPassword.classList.add('fa-eye');
        inputPassword.type = "password";
    }
})



formRegistration.addEventListener('submit', checkInputForm);
function checkInputForm(e) {
    e.preventDefault();
    const errorForm = {
        thereIsFirstNameError: false,
        thereIsSecondNameError: false,
        thereIsNumberError: false,
        thereIsEmailError: false,
        thereIsPasswordError: false,
    }



    //check Input First Name
    const regexCheckValidityName = /^[^-!#%&*:<>=`~?$@/+{|}]+$/;

    if (inputFirstName.value.trim() === "") {
        inputFirstName.style.border = errorBorder;
        errorFirstName.textContent = 'Enter your first name';
        errorForm.thereIsFirstNameError = true;

    } else if (inputFirstName.value.trim().length < 3) {
        inputFirstName.style.border = errorBorder;
        errorFirstName.textContent = 'The first name must be more than three characters';
        errorForm.thereIsFirstNameError = true;
    } else if (!regexCheckValidityName.test(inputFirstName.value)) {
        inputFirstName.style.border = errorBorder;
        errorFirstName.textContent = 'Name contains invalid characters';
        errorForm.thereIsFirstNameError = true;
    } else {
        inputFirstName.style.border = correctInputBorder;
        errorFirstName.textContent = '';
        blockPromptQuestionMark[0].style.display = 'none';
        correctInputCheckMark[0].style.display = 'inline';
        errorForm.thereIsFirstNameError = false;

    }




    //check Input Second Name
    if (inputSecondName.value.trim() === "") {
        inputSecondName.style.border = errorBorder;
        errorSecondName.textContent = 'Enter your second name';
        errorForm.thereIsSecondNameError = true;
    } else if (inputSecondName.value.trim().length < 3) {
        inputSecondName.style.border = errorBorder;
        errorSecondName.textContent = 'The second name must be more than three characters';
        errorForm.thereIsSecondNameError = true;
    } else if (!regexCheckValidityName.test(inputSecondName.value)) {
        inputSecondName.style.border = errorBorder;
        errorSecondName.textContent = 'Second name contains invalid characters';
        errorForm.thereIsSecondNameError = true;
    } else {
        inputSecondName.style.border = correctInputBorder;
        errorSecondName.textContent = '';
        blockPromptQuestionMark[1].style.display = 'none';
        correctInputCheckMark[1].style.display = 'inline';
        errorForm.thereIsSecondNameError = false;
    }





    //check Input number

    // const regexCheckValidityNumber = /^[+][0-9]{3}[0-9]{2}[0-9]{3}[0-9]{4}$/;
    let maskNumberOptions = {
        mask: '+{380} (00) 000-00-00'
    };
    let maskNumber = IMask(inputNumber, maskNumberOptions);

    if (inputNumber.value.trim() === "") {
        inputNumber.style.border = errorBorder;
        errorNumber.textContent = 'Enter your Number';
        errorForm.thereIsNumberError = true;

    } else if (inputNumber.value.trim().length < 19) {
        inputNumber.style.border = errorBorder;
        errorNumber.textContent = 'Enter the number in Ukrainian format';
        errorForm.thereIsNumberError = true;

    } else if (inputNumber.value.trim().indexOf('+') === -1) {
        inputNumber.style.border = errorBorder;
        errorNumber.textContent = 'The email must contain "+380"';
        errorForm.thereIsNumberError = true;
    } else {
        inputNumber.style.border = correctInputBorder;
        errorNumber.textContent = '';
        blockPromptQuestionMark[2].style.display = 'none';
        correctInputCheckMark[2].style.display = 'inline';
        errorForm.thereIsNumberError = false;
    }





    //check Input Email

    const regexCheckValidityEmail = /\w+@\w+\.\w+/; //format "user@email.com"

    if (inputEmail.value.trim() === "") {
        inputEmail.style.border = errorBorder;
        errorEmail.textContent = 'Enter your Email';
        errorForm.thereIsEmailError = true;
    } else if (!regexCheckValidityEmail.test(inputEmail.value)) {
        inputEmail.style.border = errorBorder;
        errorEmail.textContent = 'Email address is incorrect';
        errorForm.thereIsEmailError = true;
    } else {
        inputEmail.style.border = correctInputBorder;
        errorEmail.textContent = '';
        blockPromptQuestionMark[3].style.display = 'none';
        correctInputCheckMark[3].style.display = 'inline';
        errorForm.thereIsEmailError = false;
    }





    //check Input Password
    const regexCheckValidityPassword = /(?=^.{6,}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/

    if (inputPassword.value.trim() === "") {
        inputPassword.style.border = errorBorder;
        errorPassword.textContent = 'Enter your Password';
        errorForm.thereIsPasswordError = true;

    } else if (!regexCheckValidityPassword.test(inputPassword.value)) {
        inputPassword.style.border = errorBorder;
        errorPassword.textContent = 'Password must contain at least one uppercase letter and number';
        errorForm.thereIsPasswordError = true;

    } else if (inputPassword.value.trim().length < 6) {
        inputPassword.style.border = errorBorder;
        errorPassword.textContent = 'Password must be more than 6 characters';
        errorForm.thereIsPasswordError = true;
    } else {
        inputPassword.style.border = correctInputBorder;
        errorPassword.textContent = '';
        blockPromptQuestionMark[4].style.display = 'none';
        correctInputCheckMark[4].style.display = 'inline';
        errorForm.thereIsPasswordError = false;
    }

    // if (errorForm.thereIsFirstNameError === true) {
    //     blockPromptQuestionMark[0].style.display = 'inline';
    //     correctInputCheckMark[0].style.display = 'none';
    // }

    // if (errorForm.thereIsSecondNameError === true) {
    //     blockPromptQuestionMark[1].style.display = 'inline';
    //     correctInputCheckMark[1].style.display = 'none';
    // }
    // if (errorForm.thereIsNumberError === true) {
    //     blockPromptQuestionMark[2].style.display = 'inline';
    //     correctInputCheckMark[2].style.display = 'none';
    // }
    // if (errorForm.thereIsEmailError === true) {
    //     blockPromptQuestionMark[3].style.display = 'inline';
    //     correctInputCheckMark[3].style.display = 'none';
    // }

    // if (errorForm.thereIsPasswordError === true) {
    //     blockPromptQuestionMark[4].style.display = 'inline';
    //     correctInputCheckMark[4].style.display = 'none';
    // }

    checkCorrectInputMark();
    function checkCorrectInputMark() {
        if (errorForm.thereIsFirstNameError === true) {
            blockPromptQuestionMark[0].style.display = 'inline';
            correctInputCheckMark[0].style.display = 'none';
        }
        if (errorForm.thereIsSecondNameError === true) {
            blockPromptQuestionMark[1].style.display = 'inline';
            correctInputCheckMark[1].style.display = 'none';
        }
        if (errorForm.thereIsNumberError === true) {
            blockPromptQuestionMark[2].style.display = 'inline';
            correctInputCheckMark[2].style.display = 'none';
        }
        if (errorForm.thereIsEmailError === true) {
            blockPromptQuestionMark[3].style.display = 'inline';
            correctInputCheckMark[3].style.display = 'none';
        }
        if (errorForm.thereIsPasswordError === true) {
            blockPromptQuestionMark[4].style.display = 'inline';
            correctInputCheckMark[4].style.display = 'none';
        }
    }



    /*check the entire input registration form for errors and display the object data*/
    const modalBgFormReistration = document.querySelector('#modal-background-form-reistration');
    const modalMessageFormReistration = document.querySelector('#modal-message_form-reistration');
    const modalButtonOk = document.querySelector('#modal-button-for-close-message');

    //condition successful shipment
    if (errorForm.thereIsFirstNameError === false &&
        errorForm.thereIsSecondNameError === false &&
        errorForm.thereIsNumberError === false &&
        errorForm.thereIsEmailError === false &&
        errorForm.thereIsPasswordError === false) {
        let registrationFormData = {
            firstName: inputFirstName.value,
            secondName: inputSecondName.value,
            number: inputNumber.value,
            email: inputEmail.value,
            password: inputPassword.value,
        }
        console.log(registrationFormData); // retrieving user data

        //successful shipment message
        modalBgFormReistration.style.display = 'block';
        modalMessageFormReistration.style.display = 'block';
        modalButtonOk.addEventListener('click', () => {
            modalBgFormReistration.style.display = 'none'
            modalMessageFormReistration.style.display = 'none'
            clearInputs();
        });
    }

}

/*clear Inputs form and return Default Input */
document.querySelector('#reset').addEventListener('click', clearInputs);
function clearInputs() {
    returnDefaultInput('.input_form_registration', '2px solid rebeccapurple', 'style', 'border');
    returnDefaultInput('.correct_input', 'none', 'style', 'display');
    returnDefaultInput('.error_validation', '', 'innerHTML', '');
    returnDefaultInput('.input_form_registration', '', 'value', '');
    returnDefaultInput('.block_prompt', 'inline', 'style', 'display');
    returnDefaultInput('.block_prompt', '1px solid rgba(107, 53, 139, 0.562)', 'style', 'border');


}

function returnDefaultInput(selector, value, firstProperty, secondProperty) {
    const getSelector = document.querySelectorAll(selector);

    getSelector.forEach(item => {
        secondProperty ? item[firstProperty][secondProperty] = value : item[firstProperty] = value;
    })

}





