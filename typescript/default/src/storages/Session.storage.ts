import { BotTypes, StorageAPI } from "telegram-framework";


class SessionStorage extends StorageAPI {
    users: Array<BotTypes.IUser>;
    constructor() {
        super();
        this.users = [];
    }
    async Set(user:BotTypes.IUser) {
        this.users[user.id] = user;
    }
    async Get(id: string) {
        if (!this.users[id]) await this.Set({id: id, path: [], history: []})
        return this.users[id] || null;
    }
}

export default SessionStorage;