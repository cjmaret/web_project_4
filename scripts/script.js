

// Open Edit Pop Up //

const title = document.querySelector(".profile__title");

const subtitle = document.querySelector(".profile__subtitle");

const inputName = document.querySelector(".edit-box__input_type_title");

const inputDescription = document.querySelector(".edit-box__input_type_subtitle");

const editButton = document.querySelector(".profile__button-edit");

const editPopUp = document.querySelector(".modal_type_edit");

const imageGrid = document.querySelector(".image-grid");



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

initialCards.forEach(card => {

    const initialCardTemplate = document.querySelector("#image-card-template").content;
    const initialCardElement = initialCardTemplate.querySelector(".image-card").cloneNode(true);

    initialCardElement.querySelector(".image-card__image").src = card.link;
    initialCardElement.querySelector(".image-card__title").textContent = card.name;
    initialCardElement.querySelector(".image-card__image").setAttribute("alt", card.name);


    imageGrid.append(initialCardElement);


    // Toggle Hearts //

    initialCardElement.querySelector(".image-card__heart").addEventListener("click", function (evt) {
        evt.target.classList.toggle("image-card__heart_liked");
    });

    // Add Trash Can //

    initialCardElement.querySelector(".image-card__trash").addEventListener("click", function (evt) {
        evt.target.closest(".image-card").remove();
    });


    // Opening Picture Popup //


    const modalImageElement = document.querySelector(".image-expand");


    initialCardElement.querySelector(".image-card__image").addEventListener("click", function () {

        modalImageElement.querySelector(".image-expand__image").src = initialCardElement.querySelector(".image-card__image").src;
        modalImageElement.querySelector(".image-expand__title").textContent = initialCardElement.querySelector(".image-card__title").textContent;

        modalImageElement.classList.add("image-expand_open");

    });


    // Closing Picture Popup //

    modalImageElement.querySelector(".image-expand__close-icon").addEventListener("click", function () {
        modalImageElement.classList.remove("image-expand_open");
    });



});






// Open Edit Pop Up //

function displayEditPopUp() {
    inputName.value = title.textContent;
    inputDescription.value = subtitle.textContent;

    editPopUp.classList.add("modal_open");
};

editButton.addEventListener("click", displayEditPopUp);


//Close Edit Pop Up//

const editCloseButton = document.querySelector(".modal__close-icon_type_edit");

function closeEditPopUp() {
    editPopUp.classList.remove("modal_open");
}

editCloseButton.addEventListener("click", closeEditPopUp);



// Set Profile Name and Description //

const saveProfileForm = document.querySelector(".edit-box_type_profile");

function addProfileInfo(evt) {
    evt.preventDefault();

    title.textContent = inputName.value;
    subtitle.textContent = inputDescription.value;

    closeEditPopUp();

}

saveProfileForm.addEventListener("submit", addProfileInfo);




// open Add Popup //

const addPopUp = document.querySelector(".modal_type_add");
const imageTitle = document.querySelector(".image-card__title");
const imageLink = document.querySelector(".image-card__link");
const inputImageTitle = document.querySelector(".edit-box__input_type_image-title");
const inputImageLink = document.querySelector(".edit-box__input_type_image-link");
const addButton = document.querySelector(".profile__button-add");

function displayAddPopUp() {
    inputImageTitle.value = "";
    inputImageLink.value = "";

    addPopUp.classList.add("modal_open");
}

addButton.addEventListener("click", displayAddPopUp);



// close Add Popup //

const addCloseButton = document.querySelector(".modal__close-icon_type_add");

function closeAddPopUp() {
    addPopUp.classList.remove("modal_open");
}

addCloseButton.addEventListener("click", closeAddPopUp);




// Add Image Card // 


const saveImageForm = document.querySelector(".edit-box_type_image");


function addImageCard(evt) {
    evt.preventDefault();

    const imageCardTemplate = document.querySelector("#image-card-template").content;
    const imageCardElement = imageCardTemplate.querySelector(".image-card").cloneNode(true);

    imageCardElement.querySelector(".image-card__image").src = inputImageLink.value;
    imageCardElement.querySelector(".image-card__title").textContent = inputImageTitle.value;
    imageCardElement.querySelector(".image-card__image").setAttribute("alt", inputImageTitle.value);

    imageGrid.prepend(imageCardElement);

    closeAddPopUp();


    // Change Heart Color //

    imageCardElement.querySelector(".image-card__heart").addEventListener("click", function (evt) {
        evt.target.classList.toggle("image-card__heart_liked");
    });


    // Remove Image Card // 

    imageCardElement.querySelector(".image-card__trash").addEventListener("click", function (evt) {
        evt.target.closest(".image-card").remove();
    });


    // Opening Picture Popup //


    const modalImageElement = document.querySelector(".image-expand");

    imageCardElement.querySelector(".image-card__image").addEventListener("click", function () {

        modalImageElement.querySelector(".image-expand__image").src = imageCardElement.querySelector(".image-card__image").src;
        modalImageElement.querySelector(".image-expand__title").textContent = imageCardElement.querySelector(".image-card__title").textContent;


        modalImageElement.classList.add("image-expand_open");

    });


    // Closing Picture Popup //

    modalImageElement.querySelector(".image-expand__close-icon").addEventListener("click", function () {
        modalImageElement.classList.remove("image-expand_open");
    });



}

saveImageForm.addEventListener("submit", addImageCard);


