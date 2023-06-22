const {Application} = require('../models/models')
const ApiError = require('../error/ApiError')

class InternshipController {
    async create(req, res, next) {
        try {
            const {name, email, description} = req.body
            const application = await Application.create({name, email, description})
            return res.json(application)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const application = await Application.findAll()
        return res.json(application)
    }

    async getOne(req, res) {
        const {id} = req.params
        const application = await Application.findOne(
            {
                where:{id}
            }
        )
        return res.json(application)
    }
}

module.exports = new InternshipController()