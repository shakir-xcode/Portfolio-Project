import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-[480px] text-[0.85rem] font-bold">
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <div className="flex flex-col gap-6">
          <div className=" flex flex-col justify-between sm:flex-row gap-5 sm:gap-10">
            <label>
              Name
              <br />
              <input
                type="text"
                value={formData.username}
                name="username"
                onChange={handleChange}
                className=" mt-1 font-normal w-full px-2 py-1  bg-bg-accent"
              />
            </label>

            <label>
              Email
              <br />
              <input
                type="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
                className="mt-1 font-normal w-full px-2 py-1  bg-bg-accent"
              />
            </label>
          </div>

          <label>
            Message
            <br />
            <textarea className=" mt-1 font-normal px-2 py-1 w-full h-32 resize-none  bg-bg-accent"></textarea>
          </label>
        </div>
        <input
          type="submit"
          value="send message"
          className="px-6 py-2 mt-3 self-end sm:self-center border border-accent cursor-pointer hover:bg-btn-hover"
        />
      </form>
    </div>
  );
}

export default Form;
