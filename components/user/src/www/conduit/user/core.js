const userStore = require('./store')

const login = async ({ username, password }) => {
    const user = await userStore.getByCredentials({ username, password })
    return user[0]
}

exports.login = login