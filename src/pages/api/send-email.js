const nodemailer = require("nodemailer");
// const fs = require("fs").promises;
// const path = require("path");
// const handlebars = require("handlebars");

// const relativeTemplatePath = "../view/email.html";
const emailer = process.env.EMAILER;
const gmailPass = process.env.GMAILPASS;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;
      // console.log(req.body);
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailer,
          pass: gmailPass,
        },
        from: emailer,
      });

      // const email = user.dataValues.email;
      const options = {
        from: `Bagus Nurhuda's Web <${emailer}>`,
        to: email,
        subject: `${name} - ${email}`,
        text: message,
        // html: <div>{message}</div>,
        // html: finalHtml,
      };

      const result = await transporter.sendMail(options);
      // console.log({ result });

      res
        .status(200)
        .json({ message: "Email sent successfully", data: result });
    } catch (err) {
      console.log({ err });
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
