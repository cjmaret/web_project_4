import "./styles/index.css";
import Card from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import Section from "./components/Section.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import { profileTitle, profileDescription, openEditFormButton, openAddFormButton, inputTitle, inputDescription, initialCards, settings } from "./utils/constants.js";


const profileModalValidator = new FormValidator(settings, ".edit-box_type_profile");

const imageModalValidator = new FormValidator(settings, ".edit-box_type_image");


profileModalValidator.enableValidation();

imageModalValidator.enableValidation();





const cardsList = new Section({
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


const imagePopup = new PopupWithImage(".image-expand");
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
        const newCard = new Card({
            data,
            handleCardClick: ({ name, link }) => {
                imagePopup.open({ name, link });
            }
        }, "#image-card-template");
        const newCardElement = newCard.generateCard();
        cardsList.addItem(newCardElement);
    }
});
addCardPopup.setEventListeners();

openAddFormButton.addEventListener('click', () => { addCardPopup.open() });
