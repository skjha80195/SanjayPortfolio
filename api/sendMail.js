import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,   
        pass: process.env.EMAIL_PASS,   
      },
    });

    const htmlTemplate = `
      <h2>New Contact Form Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: htmlTemplate,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("Mail error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
