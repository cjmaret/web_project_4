// Open Pop Up //

let editButton = document.querySelector(".profile__button-edit");

let popUp = document.querySelector(".edit-profile");

function displayPopUp() {
    popUp.setAttribute("style", "display: block");
};

editButton.addEventListener("click", displayPopUp);




//Close Pop Up//

let xButton = document.querySelector(".edit-profile__close-icon");

function closePopUp() {
    popUp.removeAttribute("style", "display: block");
}

xButton.addEventListener("click", closePopUp);


// Set Name and Description //


let title = document.querySelector(".profile__title");

let subtitle = document.querySelector(".profile__subtitle");

let newName = document.querySelector(".edit-box__input_title");

let newDescription = document.querySelector(".edit-box__input_subtitle");

let saveButton = document.querySelector(".edit-box__button");

function addInfo() {
    title.textContent = `${newName.value}`;
    subtitle.textContent = `${newDescription.value}`;

    closePopUp();

    newName.value = "";
    newDescription.value = "";
}



saveButton.addEventListener("click", addInfo);