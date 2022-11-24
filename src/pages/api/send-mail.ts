const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      secure: true,
      port: 465,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify((error) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Ready to Send");
          resolve();
        }
      });
    });

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

    await new Promise((resolve, reject) => {
      transporter.sendMail(messageToSend, function (error, info) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log(`Email sent: ${info.response}`);
          resolve(info);
        }
      });
    });

    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        status: "success",
      })
    );
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
}
