import PopupWithForm from "./PopupWithForm.js";

export default class UserInfo {
    constructor({ userName, userDescription }) {
        this._userNameElement = document.querySelector(userName);
        this._userDescriptionElement = document.querySelector(userDescription);
    }

    getUserInfo() {
        return {
            userName: this._userNameElement.textContent,
            userDescription: this._userDescriptionElement.textContent,
        }
    }

    setUserInfo(data) {
        const {username, userdescription} = data;
        this._userNameElement.textContent = username;
        this._userDescriptionElement.textContent = userdescription;
    }

}

 