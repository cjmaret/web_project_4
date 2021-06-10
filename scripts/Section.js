
export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderer() {
        this._renderedItems.forEach(item => this._renderer(item));
    }

    addItem(element) {
<<<<<<< HEAD
<<<<<<< Updated upstream
=======

>>>>>>> feat/popup-class-and-refactor-index-popups
        this._container.append(element);
=======
        if (element === "newCardElement") {
            this._container.prepend(element);
        } else {
            this._container.append(element);
        }
>>>>>>> Stashed changes
    }

}