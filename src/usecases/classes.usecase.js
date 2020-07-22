const Classes = require('../models/classes.model')

const getAll = () => Classes.find();

const create = dataClass => Classes.create(dataClass)

const updateClass = (id, data) => Classes.findByIdAndUpdate(id, data)

const deleteClass = id => Classes.findByIdAndRemove(id)

module.exports = {
    getAll,
    create,
    updateClass,
    deleteClass
}