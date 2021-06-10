import Card from "./Card.js";

import { settings, FormValidator } from "./FormValidator.js";

import Section from "./Section.js";

import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";


const profileModalValidator = new FormValidator(settings, ".edit-box_type_profile");

const imageModalValidator = new FormValidator(settings, ".edit-box_type_image");


profileModalValidator.enableValidation();

imageModalValidator.enableValidation();




const profileTitle = document.querySelector(".profile__title");

const profileDescription = document.querySelector(".profile__subtitle");

export const popUp = document.querySelectorAll(".modal");

const openEditFormButton = document.querySelector(".profile__button-edit");

const editPopUp = document.querySelector(".modal_type_edit");

const imageGrid = document.querySelector(".image-grid");

const addForm = document.querySelector(".edit-box_type_image");

const modalImageElement = document.querySelector(".image-expand");

const editForm = document.querySelector(".edit-box_type_profile");

const addPopUp = document.querySelector(".modal_type_add");

const inputImageTitle = document.querySelector(".edit-box__input_type_image-title");

const inputImageLink = document.querySelector(".edit-box__input_type_image-link");

const openAddFormButton = document.querySelector(".profile__button-add");

const inputTitle = document.querySelector(".edit-box__input_type_title");

const inputDescription = document.querySelector(".edit-box__input_type_description");

const editFormSubmitButton = document.querySelector(".edit-box__button_edit");

const addFormSubmitButton = document.querySelector(".edit-box__button_add");



// Initial Load of 6 Image Cards // 

const initialCards = [
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



export const cardsList = new Section({
    items: initialCards,
    renderer: (data) => {
        const card = new Card({
            data,
            handleCardClick: ({ link, name }) => {
                imagePopup.open({ link, name });
            }
        }, "#image-card-template");

        const cardElement = card.generateCard();
        cardsList.addItem(cardElement);
    },
}, ".image-grid"
);
cardsList.renderer();


export const imagePopup = new PopupWithImage(".image-expand");
imagePopup.setEventListeners();


const editPopup = new PopupWithForm({
    popupSelector: '.modal_type_edit',
    handleFormSubmit: (data) => {
        newUser.setUserInfo(data);
    }
});
editPopup.setEventListeners();

const newUser = new UserInfo({
    userName: ".profile__title",
    userDescription: ".profile__subtitle"
});

openEditFormButton.addEventListener('click', () => {
    const {userName, userDescription} = newUser.getUserInfo();
    inputTitle.value = userName;
    inputDescription.value = userDescription;
    editPopup.open();
});



console.log(newUser.getUserInfo());

const addCardPopup = new PopupWithForm({
    popupSelector: '.modal_type_add',
    handleFormSubmit: (data) => {
        const newCard = new Card({
            data,
            handleCardClick: ({ name, link }) => {
                imagePopup.open({ name, link });
            }
        }, "#image-card-template");
        const cardElement = newCard.generateCard();
        cardsList.addItem(cardElement);
        console.log(addCardPopup._getInputValues());
    }
});
addCardPopup.setEventListeners();

openAddFormButton.addEventListener('click', () => { addCardPopup.open() });








// initialCards.forEach(data => {
//     const card = new Card(data, "#image-card-template");

//     const cardElement = card.generateCard();

//     imageGrid.append(cardElement);
// });




// editForm.addEventListener("submit", addProfileInfo);


addForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const card = new Card({ name: inputImageTitle.value, link: inputImageLink.value }, "#image-card-template");

    const cardElement = card.generateCard();

    imageGrid.prepend(cardElement);
    closePopUp(addPopUp);
});



// openEditFormButton.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     inputTitle.value = title.textContent;
//     inputDescription.value = subtitle.textContent;
//     editFormSubmitButton.disabled = false;
//     editFormSubmitButton.classList.remove("edit-box__button_inactive");
//     openPopUp(editPopUp);
// });



// openAddFormButton.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     inputImageTitle.value = "";
//     inputImageLink.value = "";
//     addFormSubmitButton.disabled = true;
//     addFormSubmitButton.classList.add("edit-box__button_inactive");
//     openPopUp(addPopUp);
// });

// popUp.forEach((popup) => {
//     popup.addEventListener('click', (evt) => {
//         if (evt.target.classList.contains('modal_open')) {
//             closePopUp(popup)
//         }
//         if (evt.target.classList.contains('modal__close-icon')) {
//             closePopUp(popup)
//         }
//     })
// });











