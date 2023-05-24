const express = require("express");
const { sendMail } = require("./utils/mailer");
const app = express();
const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("App is up and running");
});

app.post("/mail", async (req, res) => {
  try {
    const { to, cc, data } = req.body;
    const subject = "Reg: Patient Appointment Details";
    const text = `Hi ${data.doctorName},\n\n Hope you are doing good.\n\n You have an appointment scheduled with the patient on ${data.appointmentDate}. Please find the details of the patient below:\n\nPatient Name : ${data.name}\nAge : ${data.age}\nGender : ${data.gender}\nComplaints : ${data.complaint}\n\nThank you.\n\nNote: This is an auto generated mail. Please do not reply to this.`;
    const mail = await sendMail(to, cc, subject, text);
    if (mail) {
      res.send("Message sent");
    } else {
      res.send("Message not sent");
    }
  } catch (err) {
    throw err;
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
