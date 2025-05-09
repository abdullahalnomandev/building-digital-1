import React from "react";

const ServiceCard = ({ id, icon, title, description }) => {
  return (
    <div key={id}>
      <svg
        className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {icon}
      </svg>
      <h3 className="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
      <p className="font-light text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
