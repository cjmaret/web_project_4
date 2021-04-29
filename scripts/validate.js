// Validation Functions //

const showInputError = (formElement, inputElement, errorMessage) => {
    console.log(formElement.querySelector(`#${inputElement.id}`));
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add("edit-box__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("edit-box__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove("edit-box__input_type_error");
    errorElement.classList.remove("edit-box__input-error_active");
    errorElement.textContent = "";
};

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add("edit-box__button_inactive");
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove("edit-box__button_inactive");
        buttonElement.disabled = false;
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".edit-box__input"));
    const buttonElement = formElement.querySelector(".edit-box__button");

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            isValid(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".edit-box"));
    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });

        const fieldsetList = Array.from(formElement.querySelectorAll(".edit-box__set"));

        fieldsetList.forEach((fieldset) => {
            setEventListeners(fieldset);
        });
    });
};

enableValidation();