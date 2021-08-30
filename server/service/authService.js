const authRepository = require("../repository/authRepository");

class AuthCheck {
    constructor(userId) {
        this.userId = userId;
    }

    async checkIdDuplication() {
        const result = await authRepository.selectSpecificID(this.userId)
        return new Promise((resolve, reject) => {
            resolve(result)
        });
    }
}

module.exports.AuthCheck = AuthCheck;