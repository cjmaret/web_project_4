// Open Pop Up //

let title = document.querySelector(".profile__title");

let subtitle = document.querySelector(".profile__subtitle");

let inputName = document.querySelector(".edit-box__input_type_title");

let inputDescription = document.querySelector(".edit-box__input_type_subtitle");

let editButton = document.querySelector(".profile__button-edit");

let popUp = document.querySelector(".modal");


function displayPopUp() {
    inputName.value = title.textContent;
    inputDescription.value = subtitle.textContent;

    popUp.classList.add("modal_open");
};

editButton.addEventListener("click", displayPopUp);


//Close Pop Up//

let xButton = document.querySelector(".modal__close-icon");

function closePopUp() {
    popUp.classList.remove("modal_open");
}

xButton.addEventListener("click", closePopUp);


// Set Name and Description //

let saveForm = document.querySelector(".edit-box");

function addInfo(evt) {
    evt.preventDefault();

    title.textContent = inputName.value;
    subtitle.textContent = inputDescription.value;

    closePopUp();

}

saveForm.addEventListener("submit", addInfo);


