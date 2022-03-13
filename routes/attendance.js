const express = require("express");
const router = express.Router();
const controllers = require("../controllers/attendance");

router.get("/", controllers.fetchAllAttendance);
router.post("/add-attendance", controllers.createAttendance);
router.get("/delete", controllers.deleteAllAttendance);
router.get("/:id", controllers.fetchAttendanceById);
router.post("/:id/edit", controllers.updateAttendanceById);
router.get("/:id/delete", controllers.deleteAttendanceById);
// router.get("/qrcheck", function (req, res) {
//     res.send("success");
// });
router.get('/qrcheck', (req, res) => {
    res.send('success');
});

module.exports = router;
