export const profileTitle = document.querySelector(".profile__title");

export const profileDescription = document.querySelector(".profile__subtitle");

export const openEditFormButton = document.querySelector(".profile__button-edit");

export const openAddFormButton = document.querySelector(".profile__button-add");

export const inputTitle = document.querySelector(".edit-box__input_type_title");

export const inputDescription = document.querySelector(".edit-box__input_type_description");

export const formProfile = document.querySelector(".edit-box_type_profile");

export const formImage = document.querySelector(".edit-box_type_image");

export const imageCardTemplate = "#image-card-template";

export const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];

export const settings = {
    formSelector: ".edit-box",
    fieldsetSelector: ".edit-box__set",
    inputSelector: ".edit-box__input",
    submitButtonSelector: ".edit-box__button",
    inactiveButtonClass: "edit-box__button_inactive",
    inputErrorClass: "edit-box__input_type_error",
    errorClass: "edit-box__input-error_active",
}