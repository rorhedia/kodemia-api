/**
 * Funciones
 * Acciones que el usuario puede ejercer en el sitema
 */

const { response } = require('express')
const Koders       = require('../models/koders.model')
const bcrypt       = require('../lib/bcrypt')
const jwt          = require('../lib/jwt')

function getAll() {
    return Koders.find()
}

async function create(koder) {

    const { email, password } = koder
    const koderExist          = await Koders.findOne({ email })

    if (koderExist) {
        throw new Error('Usuario ya registrado')
    }

    // Encriptar la contraseña
    const passdwEncripted = await bcrypt.hash(password)

    return Koders.create({
        ...koder,
        password: passdwEncripted
    })

    // return Koders.create(koder)
}

function deleteKoder(id) {
    return Koders.findOneAndDelete({ _id: id })
}

function updateKoder(id, data) {
    return Koders.findByIdAndUpdate(id, data)
}

async function signup(koderData) {

    const { email }  = koderData
    const koderExist = await Koders.findOne({ email })

    if (koderExist) {
        throw new Error('Usuario ya registrado')
    }

    const { password } = koderData

    // Encriptar la contraseña
    const passdwEncripted = await bcrypt.hash(password)

    return Koders.create({
        ...koderData,
        password: passdwEncripted
    })
}

async function login(email, password) {

    // Buscar Ususario en la BD
    const koderByEmail = await Koders.findOne({ email })
    if (!koderByEmail) {
        throw new Error('Usuario o contraseña incorrectos')
    }

    // Verificar el password
    const isValid = await bcrypt.compare(password, koderByEmail.password)
    if (!isValid) {
        throw new Error('Usuario o contraseña incorrectos')
    }

    // crear token
    return jwt.sign({ id: koderByEmail._id })
}

module.exports = {
    getAll,
    create,
    deleteKoder,
    updateKoder,
    signup,
    login
}