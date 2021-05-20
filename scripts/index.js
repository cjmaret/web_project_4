import Card from "./Card.js";

import {settings, FormValidator} from "./FormValidator.js";


const profileModalValidator = new FormValidator(settings, ".edit-box_type_profile");

const imageModalValidator = new FormValidator(settings, ".edit-box_type_image");


profileModalValidator.enableValidation();

imageModalValidator.enableValidation();




const title = document.querySelector(".profile__title");

const subtitle = document.querySelector(".profile__subtitle");

const popUp = document.querySelectorAll(".modal");

const editButton = document.querySelector(".profile__button-edit");

const editPopUp = document.querySelector(".modal_type_edit");

const imageGrid = document.querySelector(".image-grid");

const saveImageForm = document.querySelector(".edit-box_type_image");

const modalImageElement = document.querySelector(".image-expand");

const saveProfileForm = document.querySelector(".edit-box_type_profile");

const addPopUp = document.querySelector(".modal_type_add");

const inputImageTitle = document.querySelector(".edit-box__input_type_image-title");

const inputImageLink = document.querySelector(".edit-box__input_type_image-link");

const addButton = document.querySelector(".profile__button-add");

const inputTitle = document.querySelector(".edit-box__input_type_title");

const inputDescription = document.querySelector(".edit-box__input_type_description");

const editSaveButton = document.querySelector(".edit-box__button");

const createSaveButton = document.querySelector(".edit-box__button_add");



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


// Add Escape Key //

function addEscKey(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector(".modal_open");
        closePopUp(openedPopup);
    };
};


// Opening Modal Popups // 

function openPopUp(popUpElement) {
    popUpElement.classList.add("modal_open");
    document.addEventListener("keydown", addEscKey);
};

// Close Modal Popups //

function closePopUp(popUpElement) {
    popUpElement.classList.remove("modal_open");
    document.removeEventListener("keydown", addEscKey);
};

// Set Profile Name and Description //

function addProfileInfo(evt) {
    evt.preventDefault();

    title.textContent = inputTitle.value;
    subtitle.textContent = inputDescription.value;

    closePopUp(editPopUp);
};


// Event Listeners and Function Calls // 


initialCards.forEach(data => {
    const card = new Card(data, "#image-card-template");

    const cardElement = card.generateCard();

    imageGrid.append(cardElement);
});



addButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    inputImageTitle.value = "";
    inputImageLink.value = "";
    createSaveButton.disabled = true;
    createSaveButton.classList.add("edit-box__button_inactive");
    openPopUp(addPopUp);
});

editButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    inputTitle.value = title.textContent;
    inputDescription.value = subtitle.textContent;
    editSaveButton.disabled = false;
    editSaveButton.classList.remove("edit-box__button_inactive");
    openPopUp(editPopUp);
});


popUp.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('modal_open')) {
            closePopUp(popup)
        }
        if (evt.target.classList.contains('modal__close-icon')) {
            closePopUp(popup)
        }
    })
});

saveProfileForm.addEventListener("submit", addProfileInfo);




saveImageForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const card = new Card({ name: inputImageTitle.value, link: inputImageLink.value }, "#image-card-template");

    const cardElement = card.generateCard();

    imageGrid.prepend(cardElement);
    closePopUp(addPopUp);
});


export {openPopUp};