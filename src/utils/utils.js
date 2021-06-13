import Card from "../components/Card.js";
import { imageCardTemplate } from "./constants.js";
import { imagePopup } from "../pages/index.js";

export default function createCard(data) {
    const card = new Card({
        data,
        handleCardClick: ({link, name}) => {
            imagePopup.open({link, name});
        }
    }, imageCardTemplate);
    return card.generateCard();
}