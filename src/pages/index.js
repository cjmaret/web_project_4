import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import PopupDeleteImage from "../components/PopupDeleteImage.js";
import { profileTitle, profileDescription, profileImage, openEditFormButton, openAddFormButton, inputTitle, inputDescription, initialCards, settings, formProfile, formImage, imageCardTemplate, profileImageOverlay, formProfileImage, addCardSubmitButton, deleteCardSubmitButton, profileImageSubmitButton, editProfileSubmitButton } from "../utils/constants.js";


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
            .then(() => {
                newUser.setUserInfo({ username: data.username, userdescription: data.userdescription});
                editPopup.close();
            })
            .catch((err) => console.log(err))
    },
    submitButton: editProfileSubmitButton,
});
editPopup.setEventListeners();

export const newUser = new UserInfo({
    userName: profileTitle,
    userDescription: profileDescription,
    userAvatar: profileImage,
});

openEditFormButton.addEventListener('click', () => {
    const { userName, userDescription } = newUser.getUserInfo();
    inputTitle.value = userName;
    inputDescription.value = userDescription;
    editPopup.open();
    profileModalValidator.resetValidation();
});


export const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-12",
    headers: {
        authorization: "bf6a8c78-b245-4594-801d-fa3b505682c7",
        "Content-Type": "application/json"
    }
});

api.getUserInfo()
    .then(res => {
        newUser.setUserInfo({ username: res.name, userdescription: res.about });
        newUser.setUserAvatar(res.avatar);
        newUser.userId = res._id;
    })
    .then(() => {
        api.getCardList()
            .then(res => {
                const cardsList = new Section({
                    items: res,
                    renderer: (data) => {
                        const cardElement = createCard(data);
                        cardsList.addCards(cardElement);
                    }
                }, ".image-grid"
                );
                cardsList.renderer();

                const addCardPopup = new PopupWithForm({
                    popupSelector: '.modal_type_add',
                    handleFormSubmit: (data) => {
                        api.addCard(data)
                            .then(data => {
                                const newCardElement = createCard(data);
                                cardsList.addItem(newCardElement);
                                addCardPopup.close();
                            })
                            .catch((err) => console.log(err))
                    },
                    submitButton: addCardSubmitButton,
                });

                addCardPopup.setEventListeners();

                openAddFormButton.addEventListener('click', () => {
                    addCardPopup.open();
                    imageModalValidator.resetValidation();
                });
            })
            .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));


const profileImagePopup = new PopupWithForm({
    popupSelector: '.modal_type_profile-image',
    handleFormSubmit: (data) => {
        const { profileimage: avatar } = data;
        api.setUserAvatar(avatar)
            .then(() => {
                newUser.setUserAvatar(avatar);
                profileImagePopup.close();
            })
            .catch((err) => console.log(err))
    },
    submitButton: profileImageSubmitButton,
});
profileImagePopup.setEventListeners();



profileImageOverlay.addEventListener('click', () => {
    profileImagePopup.open();
    profileImageModalValidator.resetValidation();
})


export const deleteCardPopup = new PopupDeleteImage({
    popupSelector: '.modal_type_delete-card',
    submitButton: deleteCardSubmitButton,
});
deleteCardPopup.setEventListeners();


function createCard(data) {
    const card = new Card({
        data,
        handleCardClick: ({ link, name }) => {
            imagePopup.open({ link, name });
        },
        handleDeleteClick: ({ id }) => {
            deleteCardPopup.open();
            deleteCardPopup.setSubmitAction(() => {
                api.removeCard(id)
                    .then(() => {
                        deleteCardPopup.close();
                        card.deleteImage();
                    })
                    .catch((err) => console.log(err))
            })
        },
        handleLikeAdd: ({ id }) => {
            api.addLike(id)
                .then(res => {
                    card.updateLikes(res.likes);
                    card.addHeart();
                })
                .catch((err) => console.log(err));
        },
        handleLikeDelete: ({ id }) => {
            api.removeLike(id)
                .then(res => {
                    card.updateLikes(res.likes);
                    card.removeHeart();
                })
                .catch((err) => console.log(err));
        },
        userId: newUser.userId,
    }, imageCardTemplate);
    return card.generateCard();
}