
const express = require('express')
const router = express.Router()
const classes = require('../usecases/classes.usecase')
const auth = require('../middlewares/auth')

router.use(auth)

router.get('/', async (request, response) => {
    try {
        const allClasses = await classes.getAll()
        response.json({
            success: true,
            data: {
                classes: allClasses
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try {
        const dataClass = await classes.create(request.body)
        response.json({
            status: true,
            data: {
                dataClass
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            status: false,
            message: error.message
        })
    }

})

router.patch('/:id', async (request, response) => {
    try {
        const classUpdated = await classes.updateClass(request.params.id, request.body)
        response.json({
            status: true,
            data: request.body
        })
    } catch (error) {
        response.status(400)
        response.json({
            status: false,
            message: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const classDeleted = await classes.deleteClass(request.params.id)
        response.json({
            status: true,
            data: classDeleted
        })
    } catch (error) {
        response.status(400)
        response.json({
            status: false,
            message: error.message
        })
    }
})

module.exports = router