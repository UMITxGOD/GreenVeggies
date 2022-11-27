import mongoose from "mongoose";
const users = (req, res) => {
  const uri =
    "mongodb+srv://umit:Umit@111@greenvegies.60zzyxa.mongodb.net/?retryWrites=true&w=majority";
  const localDB = "mongodb://localhost/testdb";
  mongoose.connect(uri);
  saveToDB();
  async function saveToDB() {
    const Student = new mongoose.Schema({
      name: String,
      rollno: String,
      regno: Number,
    });
    const testingModel = mongoose.model("Student", Student);
    const student = await testingModel.create({
      name: "Umit",
      rollno: "CSF20016",
      regno: 20010195,
    });
    await student.save();
    console.log(student);
  }
};
export default users;
