import { renderLoading } from "../utils/utils";
import Popup from "./Popup";

export default class PopupDeleteImage extends Popup {
    constructor(popupSelector, data, handleFormSubmit) {
        super(popupSelector);
        this._id = data._id; 
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupElement.querySelector(".edit-box");   
    }
    


    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            renderLoading(true);
            this._handleFormSubmit(this._id);
            this.close();
        })
    }

}