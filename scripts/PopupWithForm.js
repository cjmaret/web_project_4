import Popup from "./Popup.js";

import Card from "./Card.js";

import { imagePopup, cardsList } from "./index.js";



export default class PopupWithForm extends Popup {

    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    
    close() {
        super.close();
        this._popupElement.querySelectorAll("edit-box__input").forEach(input => input.reset());
    }


    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll(".edit-box__input");
        this._formValues = {};

        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.querySelector('.edit-box__button').addEventListener('click', (evt) => {
            evt.preventDefault();          
            this._handleFormSubmit(this._getInputValues());
            this.close();
        })

    }


} /* PopupWithform class */





