const mongoose = require("mongoose");
const { Schema } = mongoose;


const coursesSchema = Schema(
    {
      name: {
        required: true,
        type: String,
        trim: true,
      },
      durationType: {
        default: "month",
        type: String,
      },
      duration: {
        default: 1,
        type: Number,
      },
      priceFrom: String,
      priceTo: String,
      img: { type: Schema.Types.ObjectId, ref: "File" },
      description: String,
      student: [
        {
          ref: "Group",
          type: Schema.Types.ObjectId,
        },
      ],
      isActive: {
        default: true,
        type: Boolean,
      },
      deletedAt: { type: String, default: "" },
      isDeleted: {
        default: false,
        type: Boolean,
      },
    },
    { timestamps: true }
  );

  coursesSchema.index({ name: 1 });
const Course = mongoose.model("Course", coursesSchema);

module.exports = Course;