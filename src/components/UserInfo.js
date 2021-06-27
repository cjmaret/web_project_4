
export default class UserInfo {
    constructor({ userName, userDescription, userAvatar, userId }) {
        this._userNameElement = userName;
        this._userDescriptionElement = userDescription;
        this._userId = userId;
        this._userAvatar = userAvatar;
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

    setUserAvatar(avatar) {
        this._userAvatar.src = avatar;
    }


}

 