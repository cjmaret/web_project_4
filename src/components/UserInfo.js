export default class UserInfo {
    constructor({ userName, userDescription }) {
        this._userNameElement = userName;
        this._userDescriptionElement = userDescription;
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

 