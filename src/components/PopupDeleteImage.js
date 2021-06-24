import { renderLoading } from "../utils/utils.js";
import Popup from "./Popup.js";

export default class PopupDeleteImage extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;   
    }
    
    setSubmitAction (action) {
        this._handleFormSubmit = action;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('click', (evt) => {
            evt.preventDefault();
            renderLoading(true);
            this._handleFormSubmit();
            this.close();
        })
    }

}