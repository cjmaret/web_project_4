import { api } from "../pages/index.js";
import {deleteCardPopup} from "../pages/index.js";

export default class Card {
    constructor({data, handleCardClick, handleDeleteClick}, template) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
        this._id = data._id;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
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

        heartButton.isLiked = false;
        heartButton.isLiked = !heartButton.isLiked;

        if (heartButton.isLiked) {
            heartButton.classList.add("image-card__heart_liked");
            api.addLike(this._id);
        } else {
            heartButton.classList.remove("image-card__heart_liked");
            api.removeLike(this._id);
        }
    };

    // Remove Image Card // 

    // deleteImage() {
    //     const trashButton = this._element.querySelector(".image-card__trash");
    //     trashButton.closest(".image-card").remove();
    //     this._handleDeleteClick(this._id);
    // };


    _setEventListeners() {
        this._element.querySelector('.image-card__heart')
            .addEventListener('click', () => this._toggleHearts());

        this._element.querySelector('.image-card__trash')
            .addEventListener('click', () => {
                this._handleDeleteClick();
                this.deleteImage();
            });
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