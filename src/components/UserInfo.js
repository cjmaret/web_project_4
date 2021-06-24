import { data } from "autoprefixer";
import { api } from "../pages/index.js";

export default class UserInfo {
    constructor({ userName, userDescription, userId }) {
        this._userNameElement = userName;
        this._userDescriptionElement = userDescription;
        this._userId = userId;
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

    // getUserId() {
    //      api.getUserInfo().then(res => {return res._id});
    // }

}

 