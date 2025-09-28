import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv"
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config()

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sjha74111@gmail.com",      
        pass: "mzogtlwqvklplzjc",        
      },
    });


   const ui = `
  <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f4f6f8" style="font-family: Arial, sans-serif; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="border:1px solid #d1d5db; border-radius:10px; overflow:hidden;">
          <!-- Header -->
          <tr>
            <td bgcolor="#2563eb" style="padding: 20px; color: #ffffff; font-size: 20px; font-weight: bold; text-align:center;">
              New Contact Form Message
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding: 25px; color: #1f2937; line-height:1.6;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <div style="background-color: #f3f4f6; padding: 15px; border-left: 4px solid #2563eb; border-radius: 5px;">
                ${message}
              </div>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding: 15px; font-size: 12px; color: #6b7280; text-align: center; background-color: #f9fafb;">
              This message was sent from your website contact form.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
`;



    const mailOptions = {
      from: "sjha74111@gmail.com",
      to: "sjha74111@gmail.com",
      subject: `New message from ${name}`,
      html: ui,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 5000}`);
});
