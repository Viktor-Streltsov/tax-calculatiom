const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const userInternshipRouter = require('./userInternshipRouter')
const internshipRouter = require('./internshipRouter')
const applicationRouter = require('./applicationRouter')
const jobRouter = require('./jobRouter')

router.use('/user_internship', userInternshipRouter)
router.use('/internship', internshipRouter)
router.use('/application', applicationRouter)
router.use('/user', userRouter)
router.use('/job', jobRouter)


module.exports = router