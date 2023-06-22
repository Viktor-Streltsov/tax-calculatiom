const {Job} = require('../models/models')
const ApiError = require('../error/ApiError')

class TariffController {
    async create(req, res, next) {
        try {
            const {title, description, Requirement, responsibility, offer} = req.body
            const job = await Job.create({title, description, Requirement, responsibility, offer})
            return res.json(job)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const job = await Job.findAll()
        return res.json(job)
    }

    async getOne(req, res) {
        const {id} = req.params
        const job = await Job.findOne(
            {
                where:{id}
            }
        )
        return res.json(job)
    }
}

module.exports = new TariffController()