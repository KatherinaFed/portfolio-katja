'use client';
import React, { useState } from 'react';
import GithubIcon from '../../../public/github-icon.png';
import LinkedinIcon from '../../../public/linkedin-icon.png';
import TelegramIcon from '../../../public/telegram-icon.png';
import GmailIcon from '../../../public/gmail-icon.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const EmailSection = () => {
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const jsonData = JSON.stringify(data);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    };

    const response = await fetch(`${process.env.API_URL}/send`, options);
    // const resData = await response.json();
    console.log(response);

    if (response.status === 200) {
      console.log('Message sent');
      setIsEmailSubmitted(true);
    } else {
      console.log(response.statusText);
    }
  };

  return (
    <section
      id="contact"
      className="flex justify-center align-middle my-10 md:my-12 py-4 gap-4 relative"
    >
      <div className="z-10 mb-3">
        <h5 className="text-2xl text-center font-bold text-white my-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb703] to-[#219ebc]">
            Let&apos;s connect! {''}
          </span>
          <div>
            <TypeAnimation
              sequence={[
                'GitHub',
                1000,
                'LinkedIn',
                1000,
                'Telegram',
                1000,
                'Gmail',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </h5>
        <p className="text-[#8ecae6] mb-4 text-xl max-w-2xl text-center ">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a quastion or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-3 justify-center">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/KatherinaFed"
          >
            <Image src={GithubIcon} alt="github icon" width={40} height={40} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/ekaterina-fedoseeva-739514261/"
          >
            <Image
              src={LinkedinIcon}
              alt="linkedin icon"
              width={40}
              height={40}
            />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://t.me/katja_fed">
            <Image
              src={TelegramIcon}
              alt="telegram icon"
              width={40}
              height={40}
            />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="mailto:fedoseeva.ektr@gmail.com"
          >
            <Image src={GmailIcon} alt="gmail icon" width={40} height={40} />
          </motion.a>
        </div>
      </div>

      {/* <div className="">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="johndoe@gmail.com"
              className="bg-[#023047] border border-[#8ecae6] text-sm rounded-lg text-white block w-full p-2.5 focus:outline-[#ffb703]"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="subject"
              id="subject"
              required
              placeholder="Just say hi ;)"
              className="bg-[#023047] border border-[#8ecae6] text-sm rounded-lg text-white block w-full p-2.5 focus:outline-[#ffb703]"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#023047] border border-[#8ecae6] text-sm rounded-lg text-white block w-full p-2.5 focus:outline-[#ffb703]"
              placeholder={`Hi Katja, I'd like to talk about...`}
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#ffb703] to-[#219ebc] text-black font-medium py-2 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {isEmailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div> */}
    </section>
  );
};

export default EmailSection;
