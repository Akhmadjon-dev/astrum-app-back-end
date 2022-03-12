const mongoose = require("mongoose");

const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");
const mongooseHistory = require("mongoose-diff-history/diffHistory").plugin;

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

attendanceSchema.plugin(mongoosePaginate);
attendanceSchema.plugin(mongooseHistory);

const Attendance = mongoose.model("Attendance", attendanceSchema);

module.exports = Attendance;