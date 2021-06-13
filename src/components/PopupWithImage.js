import Popup from "./Popup.js"; 

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popupElement.querySelector(".image-expand__image");
        this._title = this._popupElement.querySelector(".image-expand__title");
    }

    open({link, name}) {
        this._image.src = link;
        this._title.textContent = name;
        this._image.setAttribute("alt", name);
        super.open();
    }
}