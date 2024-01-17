import { render } from "@react-email/render";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import EmailCreate from "./EmailCreate";

const mailerSend = new MailerSend({
  apiKey: "process.env.MAILERSEND_API_KEY" || "",
});

const emailHtml = render(<EmailCreate />);

const sentFrom = new Sender("r4ktutipo@gmail.com", "Your name");
const recipients = [new Recipient("raktutipo@gmail.com", "Your Client")];

const emailParams = new EmailParams()
  .setFrom(sentFrom)
  .setTo(recipients)
  .setSubject("This is a Subject")
  .setHtml(emailHtml);

export const sendEmail = () => mailerSend.email.send(emailParams);
