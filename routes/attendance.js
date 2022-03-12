const express = require("express");
const router = express.Router();
const controllers = require("../controllers/attendance");
const multer = require("../configs/multer");

/* GET home page. */
router.get("/", controllers.fetchAllAttendance);
router.post("/add-attendance", multer.single("img"), controllers.createAttendance);
router.get("/delete", controllers.deleteAllAttendance);
router.get("/:id", controllers.fetchAttendanceById);
router.post("/:id/edit", multer.single("img"), controllers.updateAttendanceById);
router.get("/:id/delete", controllers.deleteAttendanceById);

module.exports = router;
