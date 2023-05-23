const nodemailer = require("nodemailer");
const keys = require("./keys");

module.exports = {
  sendMail: async (to, cc, subject, text) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: keys.mailId,
        //BEFORE ADDING PASS YOU NEEDE TO ALLOW ACCESS FOR LESS SECURE APPS IN MAIL
        pass: keys.mailPassword, //PASS FOR EMAIL ID COMES HERE
      },
    });
    let info = await transporter.sendMail({
      from: keys.mailId,
      to: to,
      cc: cc,
      subject,
      text,
      //   html: "<b>Hello world?</b>"
    });

    if (info.accepted.length) {
      console.log("Message sent");
      return true;
    } else {
      return false;
    }
  },
};
