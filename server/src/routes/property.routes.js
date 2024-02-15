import { Router } from "express";
import { createProperty, getProperties, getPropertyById, updatePropertyById, deletePropertyById } from "../controllers/property.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.use(verifyJWT);

router.route("/create").post(
    upload.fields([
        {
            name: "VRImage",
            maxCount: 1
        },
        {
            name: "images",
            maxCount: 1
        }
    ]),
    createProperty)

router.route("/getProperties").get(getProperties)

router.route("/getProperty").get(getPropertyById);

router.route("/update").get(updatePropertyById);

router.route("/delete").delete(deletePropertyById);

export default router;