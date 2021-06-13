import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import createCard from "../utils/utils.js";
import { profileTitle, profileDescription, openEditFormButton, openAddFormButton, inputTitle, inputDescription, initialCards, settings, formProfile, formImage, imageCardTemplate } from "../utils/constants.js";


const profileModalValidator = new FormValidator(settings, formProfile);

const imageModalValidator = new FormValidator(settings, formImage);


profileModalValidator.enableValidation();

imageModalValidator.enableValidation();


const cardsList = new Section({
    items: initialCards,
    renderer: (data) => {
        const cardElement = createCard(data);
        cardsList.addItem(cardElement);
    }
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
    userName: profileTitle,
    userDescription: profileDescription
});

openEditFormButton.addEventListener('click', () => {
    const { userName, userDescription } = newUser.getUserInfo();
    inputTitle.value = userName;
    inputDescription.value = userDescription;
    editPopup.open();
});


const addCardPopup = new PopupWithForm({
    popupSelector: '.modal_type_add',
    handleFormSubmit: (data) => {
        const newCardElement = createCard(data);
        cardsList.addItem(newCardElement);
    }
});
addCardPopup.setEventListeners();

openAddFormButton.addEventListener('click', () => { 
    addCardPopup.open();
    imageModalValidator.resetValidation();
});
