import { renderLoading } from "../utils/utils";

export default class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getCardList() {
        return fetch(this._baseUrl + '/cards', {
            method: "GET",
            headers: this._headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            })
            .catch((err) => console.log(err));
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
            method: "GET",
            headers: this._headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            })
            .catch((err) => console.log(err));
    }

    setUserInfo({ name, about }) {
        return fetch(this._baseUrl + '/users/me', {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name,
                about
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            })
            .catch((err) => console.log(err))
            .finally(() => {
                renderLoading(false);
            });
    }

    addCard({ name, link }) {
        return fetch(this._baseUrl + '/cards', {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name,
                link
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            })
            .catch((err) => console.log(err))
            .finally(() => {
                renderLoading(false);
            });
    }

    removeCard(cardId) {
        return fetch(this._baseUrl + '/cards/' + cardId, {
            method: "DELETE",
            headers: this._headers,
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            })
            .catch((err) => console.log(err))
            .finally(() => {
                renderLoading(false);
            });
    }

    setUserAvatar(avatar) {
        return fetch(this._baseUrl + '/users/me/avatar', {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar,
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            })
            .catch((err) => console.log(err))
            .finally(() => {
                renderLoading(false);
            });
    }





    addLike(cardId) {
        return fetch(this._baseUrl + '/cards/likes/' + cardId, {
            method: "PUT",
            headers: this._headers,
            body: JSON.stringify({
                likes: Array.length + 1
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            })
            .catch((err) => console.log(err));
    }

    removeLike(cardId) {
        return fetch(this._baseUrl + '/cards/likes/' + cardId, {
            method: "DELETE",
            headers: this._headers,
            body: JSON.stringify({
                likes: Array.length + 1
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Error: ${res.status}`);
                }
            })
            .catch((err) => console.log(err));
    }



}