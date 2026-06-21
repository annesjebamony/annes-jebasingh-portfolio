"use client";

import { useState } from "react";

export default function Contact() {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);
const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");

const handleSubmit = async (
e: React.FormEvent<HTMLFormElement>
) => {
e.preventDefault();
setSuccessMessage("");
setErrorMessage("");

// Empty field validation
if (
  !firstName.trim() ||
  !lastName.trim() ||
  !email.trim() ||
  !subject.trim() ||
  !message.trim()
) {
  setErrorMessage(
    "Please fill in all required fields."
  );
  return;
}

// Email validation
const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  setErrorMessage(
    "Please enter a valid email address."
  );
  return;
}
 
setLoading(true);

try {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      subject,
      message,
    }),
  });

  const data = await response.json();

  if (data.success) {
    setSuccessMessage("Thank you for your submission! I will get back to you soon!.");  
     setErrorMessage("");

    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setMessage("");
  } else {
    setErrorMessage(
  "Failed to send your message. Please try again."
);

setSuccessMessage("");
  }
} catch (error) {
  setErrorMessage(
  "Something went wrong. Please try again."
);

setSuccessMessage("");
}

setLoading(false);


};

return ( <section
   id="contact"
   className="bg-[#ffffff] py-20 text-black"
 > <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-16">


    <div className="grid gap-16 lg:grid-cols-2">

      {/* Left Side */}
      <div className="flex flex-col justify-center">

        <h2
          className="
            text-[28px]
            font-bold
            md:text-[40px]
          "
        >
          CONTACT ME
        </h2>

        <div className="mt-14 space-y-5">

          <div className="flex items-center gap-5">
            <img
              src="/images/phone.png"
              alt="Phone"
              className="h-10 w-10 object-contain"
            />

            <p className="text-[20px] md:text-[24px]">
              +1 (708) 600-0169
            </p>
          </div>

          <div className="flex items-center gap-5">
            <img
              src="/images/gmail.png"
              alt="Email"
              className="h-10 w-10 object-contain"
            />

            <p className="break-all text-[20px] md:text-[24px]">
              annesjebasingh@gmail.com
            </p>
          </div>

        </div>

        <div className="mt-8 border-t border-gray-300 pt-5">

          <div className="flex gap-5">

            <a
              href="https://www.facebook.com/annes.jenu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/facebook.png"
                alt="Facebook"
                className="h-12 w-12 object-contain transition duration-300 hover:scale-110"
              />
            </a>

            <a
              href="https://www.instagram.com/annes_jebasingh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/instagram.png"
                alt="Instagram"
                className="h-12 w-12 object-contain transition duration-300 hover:scale-110"
              />
            </a>

          </div>

        </div>

      </div>

      {/* Right Side */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <div className="grid gap-5 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-[16px]">
              First Name
            </label>

            <input
              type="text"
              value={firstName}
              onChange={(e) =>
                setFirstName(e.target.value)
              }
              
              className="
                h-[55px]
                w-full
                rounded-md
                border
                border-gray-300
                bg-transparent
                px-4
                outline-none
                focus:border-black
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-[16px]">
              Last Name
            </label>

            <input
              type="text"
              value={lastName}
              onChange={(e) =>
                setLastName(e.target.value)
              }
              
              className="
                h-[55px]
                w-full
                rounded-md
                border
                border-gray-300
                bg-transparent
                px-4
                outline-none
                focus:border-black
              "
            />
          </div>

        </div>

        <div>
          <label className="mb-2 block text-[16px]">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            
            className="
              h-[55px]
              w-full
              rounded-md
              border
              border-gray-300
              bg-transparent
              px-4
              outline-none
              focus:border-black
            "
          />
        </div>

        <div>
          <label className="mb-2 block text-[16px]">
            Subject
          </label>

          <input
            type="text"
            value={subject}
            onChange={(e) =>
              setSubject(e.target.value)
            }
            
            className="
              h-[55px]
              w-full
              rounded-md
              border
              border-gray-300
              bg-transparent
              px-4
              outline-none
              focus:border-black
            "
          />
        </div>

        <div>
          <label className="mb-2 block text-[16px]">
            Message
          </label>

          <textarea
            rows={6}
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            required
            className="
              w-full
              rounded-md
              border
              border-gray-300
              bg-transparent
              p-4
              outline-none
              focus:border-black
            "
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
            h-[55px]
            w-full
            rounded-md
            bg-black
            text-[18px]
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-gray-800
          "
        >
          {loading ? "Sending..." : "Submit"}
        </button>
        {successMessage && (
  <div className="mt-6 rounded-md border border-green-300 bg-green-50 p-4 text-center text-green-700">
    {successMessage}
  </div>
)}

{errorMessage && (
  <div className="mt-6 rounded-md border border-red-300 bg-red-50 p-4 text-center text-red-700">
    {errorMessage}
  </div>
)}
      </form>

    </div>

  </div>
</section>


);
}
