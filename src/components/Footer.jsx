import React from "react";
import last from "../assets/last.png";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 text-center">
      © 2026 Future University. All rights reserved.
      <img src={last} alt="Footer"></img>
    </footer>
  );
}
