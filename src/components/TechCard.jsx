import React from "react";

function TechCard({ icon, title }) {
  return (
    <div
      className="flex flex-col items-center gap-3 border border-accent
    w-24 py-6 rounded-md bg-bg-accent"
    >
      <div className=" w-6">
        <img src={icon} alt="icon" />
      </div>
      <p className="text-[0.75rem]">{title}</p>
    </div>
  );
}

export default TechCard;
