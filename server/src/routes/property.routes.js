import { Router } from "express";
import { getPropertyById, updatePropertyById, deletePropertyById, addProperty, getAllProperty } from "../controllers/property.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.midlleware.js"

const router = Router()

router.route("/add-property").post(
    verifyJWT,
    upload.fields([
        {
            name: "VRImage",
            maxCount: 1
        }
    ]),
    addProperty)

router.route("/getAllProperties").get(getAllProperty)

router.route("/getProperty/:id").get(getPropertyById);

router.route("/update/:id").put(updatePropertyById);

router.route("/delete").delete(deletePropertyById);

export default router;