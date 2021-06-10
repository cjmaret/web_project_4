

import PopupWithImage from "./PopupWithImage.js";


export default class Card {
    constructor({data, handleCardClick}, template) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
        this._handleCardClick = handleCardClick;
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


    _setEventListeners() {
        this._element.querySelector('.image-card__heart')
            .addEventListener('click', () => this._toggleHearts());

        this._element.querySelector('.image-card__trash')
            .addEventListener('click', () => this._deleteImage());

        this._element.querySelector('.image-card__image')
            .addEventListener('click', () => this._handleCardClick({
                name: this._name,
                link: this._link,
            }));
    }


    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        const imageCardImage = this._element.querySelector(".image-card__image");

        this._element.querySelector(".image-card__title").textContent = this._name;
        imageCardImage.src = this._link;
        imageCardImage.setAttribute("alt", this._name);


        return this._element;
    }

}