import React, { useState } from "react";
import { useEffect, useRef } from "react";

function Dropdown({id, text, link1, link2, link3, isOpen, onToggle}) {

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onToggle]);
  

  return (
    <div className="relative"  ref={dropdownRef}>
     <button
  onClick={() => onToggle(id)}
  className="text-base font-normal flex items-center gap-1"
>
  <span>{text}</span>
  <span
    className={`inline-block transform transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
  >
    ▼
  </span>
    </button>

      {isOpen && (
        <ul className="absolute text-xs font-semibold">
          <li className="my-1.5 whitespace-nowrap">
            <a href="#" >{link1}</a> 
          </li>
          <li className="mb-1.5">
            <a href="#" >{link2}</a>
          </li>
          <li className="">
            <a href="#">{link3}</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown; 