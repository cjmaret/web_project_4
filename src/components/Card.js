export default class Card {
    constructor({ data, handleCardClick, handleDeleteClick, handleLikeAdd, handleLikeDelete, userId, }, template) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
        this._id = data._id;
        this._ownerId = data.owner._id;
        this._user = userId;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeAdd = handleLikeAdd;
        this._handleLikeDelete = handleLikeDelete;
        this._likesArray = data.likes;
        this._cardLikes = data.likes.length;
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

    _addHeart() {
        const heartButton = this._element.querySelector(".image-card__heart");
        const heartNumber = this._element.querySelector(".image-card__heart-number");

        heartButton.classList.add("image-card__heart_liked");
        heartNumber.textContent = (this._cardLikes += 1);
    };

    _removeHeart() {
        const heartButton = this._element.querySelector(".image-card__heart");
        const heartNumber = this._element.querySelector(".image-card__heart-number");

        heartButton.classList.remove("image-card__heart_liked");
        heartNumber.textContent = (this._cardLikes -= 1);
    };

    // Remove Image Card // 

    deleteImage() {
        const trashButton = this._element.querySelector(".image-card__trash");
        trashButton.closest(".image-card").remove();
    };


    _setEventListeners() {
        this._element.querySelector('.image-card__heart')
            .addEventListener('click', () => {
                if (this._likesArray.some(like => {
                    return like._id === this._user
                })) {
                    this._handleLikeDelete({
                        id: this._id
                    })
                } else {
                    this._handleLikeAdd({
                        id: this._id
                    })
                }
            });

        this._element.querySelector('.image-card__trash')
            .addEventListener('click', () => {
                this._handleDeleteClick({
                    id: this._id
                });
            });

        this._element.querySelector('.image-card__image')
            .addEventListener('click', () => this._handleCardClick({
                name: this._name,
                link: this._link,
            }));


        if (this._ownerId !== this._user) {
            this._element.querySelector(".image-card__trash").remove();
        }

    }


    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        const imageCardImage = this._element.querySelector(".image-card__image");
        this._element.querySelector(".image-card__title").textContent = this._name;
        imageCardImage.src = this._link;
        imageCardImage.setAttribute("alt", this._name);
        this._element.querySelector(".image-card__heart-number").textContent = this._cardLikes;

        if (this._likesArray.some(like => {
            return like._id === this._user
        })) {
            const heartButton = this._element.querySelector(".image-card__heart");
            heartButton.classList.add("image-card__heart_liked");

        } else {
            const heartButton = this._element.querySelector(".image-card__heart");
            heartButton.classList.remove("image-card__heart_liked");
        }

        return this._element;
    }

}