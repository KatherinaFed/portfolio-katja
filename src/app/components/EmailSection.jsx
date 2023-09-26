'use client';
import React, { useState } from 'react';
import GithubIcon from '../../../public/github-icon.png';
import LinkedinIcon from '../../../public/linkedin-icon.png';
import TelegramIcon from '../../../public/telegram-icon.png';

import Link from 'next/link';
import Image from 'next/image';

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
    const endpoint = '/api/send';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: jsonData,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);

    if (response.status === 200) {
      console.log('Message sent');
      setIsEmailSubmitted(true);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8ecae6] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's connect!</h5>
        <p className="text-[#8ecae6] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a quastion or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-3">
          <Link href="https://github.com/KatherinaFed">
            <Image src={GithubIcon} alt="github icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/ekaterina-fedoseeva-739514261/">
            <Image src={LinkedinIcon} alt="linkedin icon" />
          </Link>
          <Link href="https://t.me/katja_fed">
            <Image src={TelegramIcon} alt="telegram icon" />
          </Link>
        </div>
      </div>

      <div>
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
              className="bg-[#264653] border border-[#8ecae6] text-sm rounded-lg text-white block w-full p-2.5 focus:outline-[#ffb703]"
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
              className="bg-[#264653] border border-[#8ecae6] text-sm rounded-lg text-white block w-full p-2.5 focus:outline-[#ffb703]"
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
              className="bg-[#264653] border border-[#8ecae6] text-sm rounded-lg text-white block w-full p-2.5 focus:outline-[#ffb703]"
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
      </div>
    </section>
  );
};

export default EmailSection;
