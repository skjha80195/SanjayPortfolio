import { useState } from "react";
import { Forward, Mail, Phone, User } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(data.message || "✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "❌ Failed to send message");
      }
    } catch (err) {
      setStatus("⚠ Error sending message");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">

      <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl overflow-hidden border border-white/20">
        
        <div className="md:w-2/5 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white p-8 flex flex-col items-center justify-center space-y-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5356/5356190.png"
            alt="Profile"
            className="w-24 h-24 drop-shadow-lg"
          />
          <h2 className="text-2xl font-bold text-center">Get in Touch</h2>

          <div className="w-full max-w-xs space-y-3">
            <p className="flex items-center gap-3 text-lg">
              <User className="w-5 h-5" /> Sanjay Kumar Jha
            </p>
            <p className="flex items-center gap-3 text-lg">
              <Mail className="w-5 h-5" /> sjha74111@gmail.com
            </p>
            <p className="flex items-center gap-3 text-lg">
              <Phone className="w-5 h-5" /> +91 9876543210
            </p>
          </div>

          <p className="mt-4 text-sm text-white/80 text-center">
            I usually respond within 24 hours.
          </p>
        </div>

        <div className="md:w-3/5 p-8 flex flex-col justify-center bg-white/5">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            Contact Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 border border-white/20 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="flex justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg"
            >
              Send Message <Forward />
              
            </button>
          </form>
          {status && (
            <p className="mt-4 text-center text-gray-200 font-medium">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
