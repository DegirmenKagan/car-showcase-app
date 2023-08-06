"use client";
import React from "react";
import { FaGithubSquare } from "react-icons/fa";

function IconButton() {
  return (
    <FaGithubSquare
      className="mx-5"
      size={25}
      onClick={() =>
        window.open("https://github.com/DegirmenKagan/car-showcase-app")
      }
    />
  );
}

export default IconButton;
