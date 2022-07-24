const User = require('../models/User')
const usersMock = require('../mock/users.json')

module.exports = async () => {
    // const users = await User.find()
    // if (users.length !== usersMock.length) {
    //     await createInitialEntity(User, usersMock)
    // }
}

async function createInitialEntity(Model, data) {
    await Model.collection.drop()
    return Promise.all(
        data.map(async (item) => {
            try {
                delete item._id
                const newItem = new Model(item)
                await newItem.save()
                return newItem
            } catch (e) {
                return e
            }
        })
    )
}
