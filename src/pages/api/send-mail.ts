const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  const { firstName, lastName, email, message } = req.body;

  const messageToSend = {
    from: process.env.ZOHO_EMAIL,
    to: process.env.GMAIL_EMAIL_TO,
    subject: `Bobbielee Portfolio - ${firstName} ${lastName}`,
    text: message,
    html: `
      <p><b>Name: </b> ${firstName} ${lastName}</p>
      <p><b>Email: </b> ${email}</p>
      <p>${req.body.message}</p>
      `,
  };

  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    secure: true,
    port: 465,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
  });

  if (!email || !firstName.length || !lastName.length || !message.length) {
    return res.status(400).json({
      error: "Please fill out all required fields",
    });
  }

  if (req.method === "POST") {
    transporter.sendMail(messageToSend, (err, info) => {
      if (err) {
        return res
          .status(404)
          .json({
            error: `Connection refused at ${err}`,
          })
          .end();
      } else {
        return res
          .status(201)
          .json({
            success: `Message delivered to ${info.accepted}`,
          })
          .end();
      }
    });
  }
}
