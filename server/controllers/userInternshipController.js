const {UserInternship, Internship} = require('../models/models')
const ApiError = require('../error/ApiError')

class UserTariffController {
    async create(req, res, next) {
        try {
            const {userId, internshipId} = req.body
            const userInternship = await UserInternship.create({userId, internshipId})
            return res.json(userInternship)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const userInternship = await UserInternship.findAll()
        return res.json(userInternship)
    }

    async getUserAll(req, res) {
        const {userId} = req.params
        const userInternship = await UserInternship.findAll(
            {
                where:{userId},
                include: [
                    {
                        model: Internship,
                        attributes: ['title', 'description']
                    }
                ]
            }
        )
        return res.json(userInternship)
    }

    async getOne(req, res) {
        const {id} = req.params
        const userTariff = await UserInternship.findOne(
            {
                where:{id}
            }
        )
        return res.json(userTariff)
    }
}

module.exports = new UserTariffController()