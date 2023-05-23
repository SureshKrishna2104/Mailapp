require("dotenv").config();

const keys = {
  mailId: process.env.MAIL_ID,
  mailPassword: process.env.MAIL_PASSWORD,
};

module.exports = keys;
