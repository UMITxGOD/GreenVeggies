import mongoose from "mongoose";
const testingSchema = mongoose.Schema({
  testingTime: Number,
  testingResult: Boolean,
  testingData: String,
});
function Testing() {
  mongoose.model("Testing", testingSchema);
}
export default Testing;
