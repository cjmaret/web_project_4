import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {createCard} from "../utils/utils.js";
import { profileTitle, profileDescription, profileImage, openEditFormButton, openAddFormButton, inputTitle, inputDescription, initialCards, settings, formProfile, formImage, imageCardTemplate, profileImageOverlay, formProfileImage } from "../utils/constants.js";
import PopupDeleteImage from "../components/PopupDeleteImage";


const profileModalValidator = new FormValidator(settings, formProfile);

const imageModalValidator = new FormValidator(settings, formImage);

const profileImageModalValidator = new FormValidator(settings, formProfileImage)


profileModalValidator.enableValidation();

imageModalValidator.enableValidation();

profileImageModalValidator.enableValidation();




export const imagePopup = new PopupWithImage(".image-expand");
imagePopup.setEventListeners();


const editPopup = new PopupWithForm({
    popupSelector: '.modal_type_edit',
    handleFormSubmit: (data) => {
        api.setUserInfo({ name: data.username, about: data.userdescription })
            .then(newUser.setUserInfo({ username: data.username, userdescription: data.userdescription }))
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






export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-12",
    headers: {
        authorization: "bf6a8c78-b245-4594-801d-fa3b505682c7",
        "Content-Type": "application/json"
   }
});

api.getCardList()
    .then(res => {
        const cardsList = new Section({
            items: res,
            renderer: (data) => {
                const cardElement = createCard(data);
                cardsList.addItem(cardElement);
            }
        }, ".image-grid"
        );
        cardsList.renderer();

        const addCardPopup = new PopupWithForm({
            popupSelector: '.modal_type_add',
            handleFormSubmit: (data) => {
                api.addCard(data);
                const newCardElement = createCard(data);
                cardsList.addItem(newCardElement);
            }
        });
        addCardPopup.setEventListeners();

        openAddFormButton.addEventListener('click', () => {
            addCardPopup.open();
            imageModalValidator.resetValidation();
        });
    });

api.getUserInfo()
    .then(res => {
        console.log(res);
        newUser.setUserInfo({ username: res.name, userdescription: res.about });
        profileImage.src = res.avatar;
    });


const profileImagePopup = new PopupWithForm({
    popupSelector: '.modal_type_profile-image',
    handleFormSubmit: (data) => {
        const { profileimage: avatar } = data;
        console.log(avatar);
        api.setUserAvatar(avatar);
        profileImage.src = avatar;
    }
});
profileImagePopup.setEventListeners();



profileImageOverlay.addEventListener('click', () => {
    profileImagePopup.open();
    profileImageModalValidator.resetValidation();
})


export const deleteCardPopup = new PopupDeleteImage({
    popupSelector: '.modal_type_delete-card',
    data: data,
    handleFormSubmit: () => {
        api.removeCard();
    }   
})
deleteCardPopup.setEventListeners();

