import Popup from "./Popup.js";

export default class PopupDeleteImage extends Popup {
    constructor({popupSelector, handleFormSubmit, submitButton}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit; 
        this._submitButton = submitButton;  
    }

    close() {
        super.close();
        this.renderLoading(false);
    }
    
    setSubmitAction (action) {
        this._handleFormSubmit = action;
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = "Deleting...";
        } else {
            this._submitButton.textContent = this._submitButton.dataset.textcontent;
    
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.querySelector(".edit-box__button").addEventListener('click', (evt) => {
            evt.preventDefault();
            this.renderLoading(true);
            this._handleFormSubmit();
        })
    }

}