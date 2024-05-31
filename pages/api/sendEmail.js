import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, phone } = req.body;
    console.log("Request body:", req.body);
    try {
      const response = await sendgrid.send({
        to: "ninjadriveclub@gmail.com",
        from: "ppaexpert@gmail.com",
        subject: "New Inquiry",
        html: `<p>Name: ${name}</p><p>Phone: ${phone}</p>`,
      });
      console.log("SendGrid response:", response); // Log full response
      console.log("Message ID:", response[0].headers["x-message-id"]); // Log message ID
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("SendGrid error:", error.response.body); // Log detailed error
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
