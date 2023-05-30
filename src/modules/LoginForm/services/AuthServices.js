import $api from "../../../http/api";

export default class AuthServices {
    static login(userName, password) {
        let formData = new FormData();
        formData.append('userName', userName);
        formData.append('password', password);
        return $api.post('/Authorization/Authorize', formData);
    }
}