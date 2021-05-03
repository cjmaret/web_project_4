const title = document.querySelector(".profile__title");

const subtitle = document.querySelector(".profile__subtitle");

const popUp = document.querySelectorAll(".modal");

const editButton = document.querySelector(".profile__button-edit");

const editPopUp = document.querySelector(".modal_type_edit");

const imageGrid = document.querySelector(".image-grid");

const saveImageForm = document.querySelector(".edit-box_type_image");

const modalImageElement = document.querySelector(".image-expand");

const editCloseButton = document.querySelector(".modal__close-icon_type_edit");

const saveProfileForm = document.querySelector(".edit-box_type_profile");

const addPopUp = document.querySelector(".modal_type_add");

const inputImageTitle = document.querySelector(".edit-box__input_type_image-title");

const inputImageLink = document.querySelector(".edit-box__input_type_image-link");

const addButton = document.querySelector(".profile__button-add");

const addCloseButton = document.querySelector(".modal__close-icon_type_add");

const imageCloseButton = modalImageElement.querySelector(".modal__close-icon_type_image");

const inputTitle = document.querySelector(".edit-box__input_type_title");

const inputDescription = document.querySelector(".edit-box__input_type_description");

const modalImageImage = modalImageElement.querySelector(".image-expand__image");

const modalImageTitle = modalImageElement.querySelector(".image-expand__title");

const editSaveButton = document.querySelector(".edit-box__button");

const createSaveButton = document.querySelector(".edit-box__button_add");



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


// Opening Modal Popups // 

function openPopUp(popUpElement) {
    popUpElement.classList.add("modal_open");
    document.addEventListener("keydown", addEscKey);
};

// Opening Picture Popup //

function openImage(cardElement) {

    const imageCardImage = cardElement.querySelector(".image-card__image");
    const imageCardText = cardElement.querySelector(".image-card__text");

    imageCardImage.addEventListener("click", function () {
        modalImageImage.src = imageCardImage.src;
        modalImageTitle.textContent = imageCardText.textContent;
        openPopUp(modalImageElement);
    });
};


// Close Popups //

function closePopUp(popUpElement) {
    popUpElement.classList.remove("modal_open");
    document.removeEventListener("keydown", addEscKey);
};


// Set Profile Name and Description //

function addProfileInfo(evt) {
    evt.preventDefault();

    title.textContent = inputTitle.value;
    subtitle.textContent = inputDescription.value;

    closePopUp(editPopUp);
}


// Toggle Hearts //

function toggleHearts(cardElement) {

    const heartButton = cardElement.querySelector(".image-card__heart");

    heartButton.addEventListener("click", function (evt) {
        evt.target.classList.toggle("image-card__heart_liked");
    })
};


// Remove Image Card // 

function deleteImage(cardElement) {

    const trashButton = cardElement.querySelector(".image-card__trash");

    trashButton.addEventListener("click", function (evt) {
        evt.target.closest(".image-card").remove();
    });
};


// Add Image Card // 

function addImageCard(titleValue, urlValue) {

    const cardTemplate = document.querySelector("#image-card-template").content;

    const cardElement = cardTemplate.querySelector(".image-card").cloneNode(true);

    const cardImage = cardElement.querySelector(".image-card__image");

    const cardTitle = cardElement.querySelector(".image-card__title");

    cardTitle.textContent = titleValue;
    cardImage.src = urlValue;
    cardImage.setAttribute("alt", titleValue);

    toggleHearts(cardElement);
    deleteImage(cardElement);
    openImage(cardElement);

    return cardElement;
};


function addEscKey(evt) {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelectorAll(".modal");
        openedPopup.forEach(popup => {
            closePopUp(popup);
        })
        
    };
};


// Event Listeners and Function Calls // 


initialCards.forEach(item => {
    const cardElement = addImageCard(item.name, item.link);
    imageGrid.append(cardElement);
});

addButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    inputImageTitle.value = "";
    inputImageLink.value = "";
    createSaveButton.disabled = true;
    createSaveButton.classList.add("edit-box__button_inactive");
    openPopUp(addPopUp);
});

editButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    inputTitle.value = title.textContent;
    inputDescription.value = subtitle.textContent;
    editSaveButton.disabled = false;
    editSaveButton.classList.remove("edit-box__button_inactive");
    openPopUp(editPopUp);
});


popUp.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('modal_open')) {
            closePopUp(popup)
        }
        if (evt.target.classList.contains('modal__close-icon')) {
          closePopUp(popup)
        }
    })
});

saveProfileForm.addEventListener("submit", addProfileInfo);


saveImageForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const cardElement = addImageCard(inputImageTitle.value, inputImageLink.value);
    imageGrid.prepend(cardElement);
    closePopUp(addPopUp);
});


