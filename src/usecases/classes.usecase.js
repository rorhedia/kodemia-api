const Classes = require('../models/classes.model')

const getAll = () => Classes.find();

const create = async dataClass => {

    const { title }   = dataClass
    const classExixst = await Classes.findOne({ title })

    if (classExixst) {
        throw new Error('El curso ya está registrado')
    }

    return Classes.create(dataClass)
}

const updateClass = (id, data) => Classes.findByIdAndUpdate(id, data)

const deleteClass = id => Classes.findByIdAndRemove(id)

module.exports = {
    getAll,
    create,
    updateClass,
    deleteClass
}