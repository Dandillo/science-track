import $api from "../../../http/api";

export default class WaitingService {
    static createGame() {
        return $api.post('/Game/CreateGame')
    }

    static addUser(gameId, userId) {
        return $api.post(`/Game/AddUser?gameId=${gameId}&userId=${userId}`)
    }
}