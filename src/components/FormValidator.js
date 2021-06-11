
import {settings} from "../utils/constants.js";

class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
    }

    // Validation Functions //

    _showInputError = (formElement, inputElement, errorMessage) => {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.errorClass);
    };

    _hideInputError = (formElement, inputElement) => {
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.classList.remove(this._settings.errorClass);
        errorElement.textContent = "";
    };

    _isValid = (formElement, inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(formElement, inputElement);
        }
    };

    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonState = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._settings.inactiveButtonClass);
            buttonElement.disabled = true;
        } else {
            buttonElement.classList.remove(this._settings.inactiveButtonClass);
            buttonElement.disabled = false;
        }
    };

    _setEventListeners = (formElement) => {
        const inputList = Array.from(formElement.querySelectorAll(this._settings.inputSelector));
        const buttonElement = formElement.querySelector(this._settings.submitButtonSelector);

        this._toggleButtonState(inputList, buttonElement);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._isValid(formElement, inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
    };

    enableValidation = () => {
        const formList = Array.from(document.querySelectorAll(this._settings.formSelector));
        formList.forEach((formElement) => {
            formElement.addEventListener("submit", (evt) => {
                evt.preventDefault();
            });

            const fieldsetList = Array.from(formElement.querySelectorAll(this._settings.fieldsetSelector));

            fieldsetList.forEach((fieldset) => {
                this._setEventListeners(fieldset);
            });
        });
    };

}





export {settings, FormValidator};
