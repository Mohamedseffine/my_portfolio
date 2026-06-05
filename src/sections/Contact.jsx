import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await emailjs.send("service_7otw2le", "template_apm8d2k", {
        name: form.name,
        email: form.email,
        message: form.message,
      }, 'Pg4tXSgWUcOajNgGx');
      setLoading(false)
      setForm({ name: "", email: "", message: "" })
      alert("your message has been sent")
    } catch (e) {
        setLoading(false);
        console.log(e)
        alert("something went wrong")
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>
          <p className=" text-lg text-neutral-400 mt-3">
            Wheter you are trying to build a new website, run a security check
            on an existing platform, or have a question, I'm here to help
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label"> Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label"> Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@example.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label "> Your Message</span>
              <textarea
              
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input max-h-40 min-h-40"
                placeholder="Hi, I want to..."
              />
            </label>
            <button className=" field-btn cursor-pointer" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
