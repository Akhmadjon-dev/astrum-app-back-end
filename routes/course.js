const express = require("express");
const router = express.Router();
const controllers = require("../controllers/course");
const multer = require("../configs/multer");

/* GET home page. */
router.get("/", controllers.fetchAllCourse);
router.post("/add-course", multer.single("img"), controllers.createCourse);
router.get("/delete", controllers.deleteAllCourse);
router.get("/:id", controllers.fetchCourseById);
router.post("/:id/edit", multer.single("img"), controllers.updateCourseById);
router.get("/:id/delete", controllers.deleteCourseById);

module.exports = router;
