import Card from "../components/Card.js";
import { imageCardTemplate, submitButton, } from "./constants.js";
import { api, imagePopup } from "../pages/index.js";
import { deleteCardPopup } from "../pages/index.js";
import {newUser} from "../pages/index.js"


export function createCard(data) {
    const card = new Card({
        data,
        handleCardClick: ({link, name}) => {
            imagePopup.open({link, name});
        },
        handleDeleteClick: ({id}) => {
            deleteCardPopup.open();
            deleteCardPopup.setSubmitAction(() => {
                api.removeCard(id)
                .then(() => {
                    card.deleteImage();
                })
            })
        },
        handleLikeAdd: ({id}) => {
            api.addLike(id)
            .then(res => {
                card._likesArray = res.likes;
                card._addHeart();
            })
        }, 
        handleLikeDelete: ({id}) => {
            api.removeLike(id)
            .then(res => {
                card._likesArray = res.likes;
                card._removeHeart();
            })
        },
        userId: newUser.userId,
    }, imageCardTemplate);
    return card.generateCard();
}


export function renderLoading(isLoading) {
    if (isLoading) {
        submitButton.textContent = "Saving...";
    } else {
        submitButton.textContent = submitButton.dataset.textcontent;
    }
}

