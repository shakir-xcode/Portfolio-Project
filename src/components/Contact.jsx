import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <section
      id="contact-section"
      className=" flex flex-col justify-center items-center mt-24 gap-5 "
    >
      <h1 className="text-3xl font-bold ">
        <span className="text-accent text-[1.7rem] ">&lt;</span>Let's Get in
        Touch
        <span className="text-accent text-[1.7rem] ">/&gt;</span>
      </h1>
      <div className="w-[90%] sm:w-auto">
        <Form />
      </div>
    </section>
  );
}

export default Contact;
