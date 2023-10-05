import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Faq() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    if (activeSection === index) {
      setActiveSection(null); // Close the section if it's already open
    } else {
      setActiveSection(index); // Open the clicked section
    }
  };
  return (
    <div>
      <div className="flex flex-col mx-auto max-w-[1000px] text-center items-center text-[50px] font-bold ">
        <div className="accordion-section">
          <div className="flex space-between items-center">
            <button
              onClick={() => toggleSection(0)}
              className="accordion-title"
            >
              Close for business owners
            </button>
            <MdOutlineKeyboardArrowDown />
          </div>
          {activeSection === 0 && (
            <div className="accordion-content text-[20px] ">
              <img
                src="./assets/business_owners.webp"
                className="w-[50%] mx-auto"
              />
              <p>Onboard your team in minutes.</p>
              <p>Analyze workflows and KPIs.</p>
              <p>Grow your revenue quickly.</p>
              <p>Learn More </p>
            </div>
          )}
        </div>
        <div className="accordion-section flex-col">
          <div className="flex space-between items-center">
            <button
              onClick={() => toggleSection(1)}
              className="accordion-title"
            >
              Close for sales reps
            </button>
            <MdOutlineKeyboardArrowDown />
          </div>
          {activeSection === 1 && (
            <div className="accordion-content text-[20px] ">
              <img src="./assets/sales_reps.webp" className="w-[50%] mx-auto" />
              <p>Reach more people than ever.</p>
              <p>Automate your sales workflow.</p>
              <p> Sell more in less time.</p>
              <p>Learn More </p>
            </div>
          )}
        </div>
        <div className="accordion-section">
          <div className="flex space-between items-center">
            <button
              onClick={() => toggleSection(2)}
              className="accordion-title"
            >
              Close for sales operations
            </button>
            <MdOutlineKeyboardArrowDown />
          </div>
          {activeSection === 2 && (
            <div className="accordion-content text-[20px] ">
              <img
                src="./assets/sales_operations.webp"
                className="w-[50%] mx-auto"
              />
              <p>Simplify your tech stack. </p>
              <p>Integrate with other software.</p>
              <p>Support your team.</p>
              <p>Learn More </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
