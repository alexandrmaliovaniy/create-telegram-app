const {StorageAPI} = require("telegram-framework");

class SessionStorage extends StorageAPI{
    constructor() {
        super();
        this.users = [];
    }
    async Set(user) {
        this.users[user.id] = user;
    }
    async Get(id) {
        if (!this.users[id]) await this.Set({id: id, path: [], history: []})
        return this.users[id] || null;
    }
}
module.exports = SessionStorage;