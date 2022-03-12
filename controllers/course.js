const bcrypt = require("bcrypt");
const Course = require("../models/courses");
const util = require("../utils");

exports.fetchAllCourse = (req, res) => {
  Course.find()
    .then((course) => res.json(course))
    .catch((err) => res.send(err));
};

exports.fetchCourseById = (req, res) => {
  const { id } = req.params;

  Course.findById(id)
    .then((course) => {
      res.json(course);
    })
    .catch((err) => res.send(err));
};

exports.deleteAllCourse = (req, res) => {
  Course.deleteMany()
    .then(() => res.json("Deleted"))
    .catch((err) => res.send(err));
};

exports.createCourse = async (req, res) => {

  // let imgFile = null;

  // const img = file ? baseUrl + file.path.replace("public", "") : imgFile;
  const Course = new Course({
    ...req.body,
  });
  Course.save()
    .then((data) => {
      res.json({ data, success: true });
      // util.resizeImg(file, "Course");
    })
    .catch((err) => {
      res.json({ success: false, err });
      console.log(msg);
    });
};

exports.updateCourseById = async (req, res) => {
  const { id } = req.params;
  const { oldImg } = req.body;

  let imgFile = null;

  const img = req.file
    ? baseUrl + req.file.path.replace("public", "")
    : imgFile || oldImg;

  const updatedData = { ...req.body, img };

  Course.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
    .then((course) => {
      res.json(course);
      util.resizeImg(req.file, "course");
    })
    .catch((err) => res.send(err));
};


exports.deleteCourseById = (req, res) => {
  const { id } = req.params;
  Course.findByIdAndRemove(id)
    .then(() => {
      res.json({ success: true, msg: "Successfully deleted" });
    })
    .catch((err) => res.send(err));
};
