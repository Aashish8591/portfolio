import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rb5svp9",
        "template_22yp0np",
        form.current,
        "lvV_X6xhaEIeqWMYZ",
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message ❌");
          console.log(error);
        },
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-4 md:px-8 py-32 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-lime-500/10 blur-[150px] rounded-full"></div>

      {/* Heading */}

      <div className="text-center mb-20">
        <p className="text-lime-400 uppercase tracking-[4px]">Contact</p>

        <h2 className="text-5xl font-bold mt-3">
          Let's Build Something Together
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Open to Full Stack Developer opportunities, internships, freelance
          projects and collaborations.
        </p>

        <div className="w-24 h-1 bg-lime-400 mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div
            className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-8
          "
          >
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-lime-400 text-xl" />
                <span>aashupatil2104@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-lime-400 text-xl" />
                <span>+91 85910 60961</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-lime-400 text-xl" />
                <span>Kalyan, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Links */}

            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/Aashish8591"
                className="
                w-14
                h-14
                rounded-2xl
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-lime-500
                hover:text-black
                transition
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aashish-patil-cs/"
                className="
                w-14
                h-14
                rounded-2xl
                bg-white/10
                flex
                items-center
                justify-center
                hover:bg-lime-500
                hover:text-black
                transition
                "
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-8
          space-y-6
          "
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="
            w-full
            p-4
            rounded-xl
            bg-black/30
            border
            border-white/10
            outline-none
            "
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="
            w-full
            p-4
            rounded-xl
            bg-black/30
            border
            border-white/10
            outline-none
            "
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            className="
            w-full
            p-4
            rounded-xl
            bg-black/30
            border
            border-white/10
            outline-none
            resize-none
            "
          />

          <button
            type="submit"
            className="
            w-full
            py-4
            rounded-xl
            bg-lime-500
            text-black
            font-semibold
            hover:shadow-[0_0_25px_rgba(74,222,128,0.5)]
            transition
            "
          >
            Send Message
          </button>
          {status && (
            <p className="text-center text-lime-400 font-medium">{status}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
