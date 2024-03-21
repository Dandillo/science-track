import $api from "../../../http/api";

const RemoveUser = (username) =>
    $api.post('/Import/RemoveUser?' + new URLSearchParams({username}))

export const adminApi = {
    RemoveUser
}