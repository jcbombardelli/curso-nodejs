const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const fs = require("fs");

const setup = async () => {
  
  let account = null
  if (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development")
    account = await nodemailer.createTestAccount();

  const host = process.env.MAIL_HOST | 'smtp.ethereal.mail' ;
  const port = process.env.MAIL_PORT | 587;

  const transporter = nodemailer.createTransport({
    host: host,
    port: port,
    secure: false,
    auth: {
      user: account ? account.user : process.env.MAIL_USER,
      pass: account ? account.pass : process.env.MAIL_PASS,
    },
  });

  return transporter;
};

const sendmail = async (from, to, subject, text, htmlTemplate) => {
  const transporter = await setup();
  const emailSended = await transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    text: text,
    html: htmlTemplate,
  });

  return emailSended;
};

const htmlTemplate = String(fs.readFileSync("deposito.html"));
sendmail(
  "jc.bombardelli@gama.academy",
  "jc.bombardelli@gama.academy",
  "TITULO DO EMAIL",
  "blablabal",
  htmlTemplate
).then((emailSended) => {
  console.log(emailSended);
  console.log(nodemailer.getTestMessageUrl(emailSended));
});
