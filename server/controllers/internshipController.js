const {Internship} = require('../models/models')
const ApiError = require('../error/ApiError')

class InternshipController {
    async create(req, res, next) {
        try {
            const {title, description} = req.body
            const internship = await Internship.create({title, description})
            return res.json(internship)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const internships = await Internship.findAll()
        return res.json(internships)
    }

    async getOne(req, res) {
        const {id} = req.params
        const internship = await Internship.findOne(
            {
                where:{id}
            }
        )
        return res.json(internship)
    }
}

module.exports = new InternshipController()