import {openPopUp} from "./index.js";


class Card {
    constructor(data, template) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._template)
            .content
            .querySelector(".image-card")
            .cloneNode(true);

        return cardElement;
    }


    // Toggle Hearts //

    _toggleHearts() {

        const heartButton = this._element.querySelector(".image-card__heart");

        heartButton.classList.toggle("image-card__heart_liked");
    };

    // Remove Image Card // 

    _deleteImage() {

        const trashButton = this._element.querySelector(".image-card__trash");

        trashButton.closest(".image-card").remove();
    };

    // Open Image Popup //

    _openImage() {

        
        const modalImageElement = document.querySelector(".image-expand");
        const modalImageImage = modalImageElement.querySelector(".image-expand__image");
        const modalImageTitle = modalImageElement.querySelector(".image-expand__title");

        modalImageImage.src = this._link;
        modalImageTitle.textContent = this._name;
        modalImageImage.setAttribute("alt", this._name);
        openPopUp(modalImageElement);

    };


    _setEventListeners() {
        this._element.querySelector('.image-card__heart')
            .addEventListener('click', () => this._toggleHearts());

        this._element.querySelector('.image-card__trash')
            .addEventListener('click', () => this._deleteImage());

        this._element.querySelector('.image-card__image')
            .addEventListener('click', () => this._openImage());
    }


    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector(".image-card__title").textContent = this._name;
        this._element.querySelector(".image-card__image").src = this._link;
        this._element.querySelector(".image-card__image").setAttribute("alt", this._name);


        return this._element;
    }

}

export default Card;