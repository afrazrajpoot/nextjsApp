"use client";
import React, { useState, useRef, useEffect } from "react";

const Otp = ({ length = 6 }) => {
  const initialOtp = new Array(5).fill("");
  const [otp, setOtp] = useState(initialOtp);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus(); // Focus on the first input field when the component mounts
  }, []);

  const handleChange = (index, value) => {
    if (!isNaN(value) && value !== "") {
      const otpCopy = [...otp];
      otpCopy[index] = value;
      setOtp(otpCopy);

      if (index < length - 1 && value !== "") {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && index > 0 && otp[index] === "") {
      setOtp((prevOtp) => {
        const otpCopy = [...prevOtp];
        otpCopy[index - 1] = "";
        return otpCopy;
      });
      inputRefs.current[index - 1].focus();
    } else if (event.key === "Backspace" && index >= 0) {
      setOtp((prevOtp) => {
        const otpCopy = [...prevOtp];
        otpCopy[index] = "";
        return otpCopy;
      });
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const paste = event.clipboardData.getData("text");
    if (paste.length === length && !isNaN(paste)) {
      setOtp(paste.split("").slice(0, length));
    }
  };

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      {otp.map((digit, index) => (
        <div key={index} className="relative">
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            className={`w-9 h-9 text-center bg-[#FAFAFA] rounded-full focus:outline-none ${
              focusedIndex === index ? "" : "bg-[#FAFAFA]"
            }`}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            onFocus={() => handleFocus(index)}
          />
          {digit === "" && focusedIndex !== index && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-black rounded-full"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Otp;
