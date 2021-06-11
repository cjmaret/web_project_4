import Popup from "./Popup.js"; 

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open({link, name}) {
        this._popupElement.querySelector(".image-expand__image").src = link;
        this._popupElement.querySelector(".image-expand__title").textContent = name;
        this._popupElement.querySelector(".image-expand__image").setAttribute("alt", name);
        super.open();
    }
}