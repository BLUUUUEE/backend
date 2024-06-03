import {Router} from "express"
import { registerUser } from "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js"
<<<<<<< HEAD
const router= Router()

router.route("/register").post(
=======
const userRouter= Router()

userRouter.route("/register").post(
>>>>>>> acd7c916e1bd98c3bb010c990d1f7cc761f910ef
    upload.fields([
        {
            name: "avtar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1

        }
    ]),
    registerUser
)

<<<<<<< HEAD
export default router
=======
export default userRouter
>>>>>>> acd7c916e1bd98c3bb010c990d1f7cc761f910ef
