import React, { useState, useRef } from "react";
import { WEB_FORMS_ACCESS_KEY } from "../config/config";
import { sendMessage } from "../api/webFormsApi";

function Form() {
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const successBg = "#46f17f";
  const failedBg = "#ef4444";

  const confirmSubmission = useRef();

  const handleSubmissionConfirmation = (message, bgColor) => {
    const element = confirmSubmission.current;
    element.classList.toggle("hidden");
    element.textContent = message;
    element.style.backgroundColor = bgColor;

    setTimeout(() => {
      element.classList.toggle("hidden");
    }, 4000);
  };

  const handleChange = (e) => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // formData.append("access_key", WEB_FORMS_ACCESS_KEY);
    const object = Object.fromEntries(formData);
    // const json = JSON.stringify(object);
    try {
      const res = await sendMessage(object);
      if (res?.ok || res?.success) {
        handleSubmissionConfirmation("Message Sent ✓", successBg);
      } else {
        handleSubmissionConfirmation("Error Occured..", failedBg);
      }
    } catch (error) {
      handleSubmissionConfirmation("Error Occured..", failedBg);
    }
  };

  return (
    <div className="max-w-[480px] text-[0.85rem] font-bold">
      <form
        className="flex flex-col "
        name="contact"
        method="POST"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-6">
          <div className=" flex flex-col justify-between sm:flex-row gap-5 sm:gap-10">
            <label htmlFor="user-name">
              Name
              <br />
              <input
                id="user-name"
                type="text"
                value={userFormData.username}
                name="name"
                onChange={handleChange}
                className=" mt-1 font-normal w-full px-2 py-1  bg-bg-accent"
              />
            </label>

            <label htmlFor="email">
              Email
              <br />
              <input
                id="email"
                type="email"
                value={userFormData.email}
                name="email"
                required
                onChange={handleChange}
                className="mt-1 font-normal w-full px-2 py-1  bg-bg-accent"
              />
            </label>
          </div>

          <label htmlFor="message">
            Message
            <br />
            <textarea
              id="message"
              className=" mt-1 font-normal px-2 py-1 w-full h-32 resize-none  bg-bg-accent"
              name="message"
              value={userFormData.message}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div className="relative w-fit mt-3 self-end sm:self-center">
          <input
            type="submit"
            value="send message"
            className=" burst px-6 py-2 border duration-500
          border-accent cursor-pointer hover:bg-btn-hover"
          />
          <div
            ref={confirmSubmission}
            className={` absolute hidden inset-0 px-4 py-2 `}
          ></div>
        </div>
      </form>
    </div>
  );
}

export default Form;
