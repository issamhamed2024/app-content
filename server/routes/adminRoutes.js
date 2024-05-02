const express = require("express")
const router = express.Router()
const adminController = require("../controllers/adminController")
const multer = require("multer")

const upload = multer({ storage: multer.memoryStorage() }) // Créez une instance de multer

router.post(
  "/uploadPhoto",
  upload.single("imageData"),
  adminController.uploadPhoto
)
// Routes
router.post("/login", adminController.login)
router.get("/requests", adminController.getOrder)
router.post("/update-send-date/:idOrder/", adminController.updateSendDate)
router.get("/picture/:pictureId/:fileName", adminController.getUserPictures)


router.post(
    "/saveData",
    upload.single("imageData"),
    adminController.saveData
)
router.post(
    "/updateData",
    upload.single("imageData"),
    adminController.updateData
)
router.post(
    "/setDataAttachements",
    upload.array("files"),
    adminController.setDataAttachements
)
router.get("/getData", adminController.getData)
router.post("/setDataStatus", adminController.setDataStatus)
router.post("/setDataNotes", adminController.setDataNotes)
router.post("/setDataActions", adminController.setDataActions)
router.post("/deleteData", adminController.deleteData)

module.exports = router
