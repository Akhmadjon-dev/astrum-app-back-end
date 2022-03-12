const bcrypt = require("bcrypt");
const Attendance = require("../models/attendance");
const util = require("../utils");

exports.fetchAllAttendance = (req, res) => {
  Attendance.find()
    .then((Attendance) => res.json(Attendance))
    .catch((err) => res.send(err));
};

exports.fetchAttendanceById = (req, res) => {
  const { id } = req.params;

  Attendance.findById(id)
    .then((Attendance) => {
      res.json(Attendance);
    })
    .catch((err) => res.send(err));
};

exports.deleteAllAttendance = (req, res) => {
  Attendance.deleteMany()
    .then(() => res.json("Deleted"))
    .catch((err) => res.send(err));
};

exports.createAttendance = async (req, res) => {

  // let imgFile = null;

  // const img = file ? baseUrl + file.path.replace("public", "") : imgFile;
  const Attendance = new Attendance({
    ...req.body,
  });
  Attendance.save()
    .then((data) => {
      res.json({ data, success: true });
      // util.resizeImg(file, "Attendance");
    })
    .catch((err) => {
      res.json({ success: false, err });
      console.log(msg);
    });
};

exports.updateAttendanceById = async (req, res) => {
  const { id } = req.params;

  const updatedData = { ...req.body};

  Attendance.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
    .then((Attendance) => {
      res.json(Attendance);
      util.resizeImg(req.file, "Attendance");
    })
    .catch((err) => res.send(err));
};


exports.deleteAttendanceById = (req, res) => {
  const { id } = req.params;
  Attendance.findByIdAndRemove(id)
    .then(() => {
      res.json({ success: true, msg: "Successfully deleted" });
    })
    .catch((err) => res.send(err));
};
