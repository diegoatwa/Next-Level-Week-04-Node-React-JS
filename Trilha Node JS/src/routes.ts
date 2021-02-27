import { Router } from "express"
import { SendMailController } from "./controllers/SendMailController"
import { SurveyController } from "./controllers/SurveysController"
import { UserController } from "./controllers/UserController"

const router = Router()

const userController = new UserController()
router.post("/users", userController.create)

const surveysController = new SurveyController()
router.post('/surveys', surveysController.create)

const sendMailController = new SendMailController
router.post('/sendMail', sendMailController.execute)

router.get('/surveys', surveysController.show)


export { router }
