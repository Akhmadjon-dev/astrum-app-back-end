const mongoose = require("mongoose");
const { Schema } = mongoose;


const attendanceSchema = Schema(
  {
    date: { type: Date, default: new Date() },
    student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    groupId: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: true,
      default: null,
    },
    courseId: { type: Schema.Types.ObjectId, ref: "Course", default: null },
    teacherId: {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
      default: null,
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;