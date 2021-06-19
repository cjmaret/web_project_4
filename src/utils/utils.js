import Card from "../components/Card.js";
import { imageCardTemplate, submitButton } from "./constants.js";
import { imagePopup } from "../pages/index.js";
import {deleteCardPopup} from "../pages/index.js";


export function createCard(data) {
    const card = new Card({
        data,
        handleCardClick: ({link, name}) => {
            imagePopup.open({link, name});
        },
        handleDeleteClick: (data) => {
            deleteCardPopup.open(data);
        }
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