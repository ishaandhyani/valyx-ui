import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="pointer-events-auto bg-black p-10 text-center">
      <div className="border-t border-white opacity-50 mb-10" />
      {/* To be added in future for the navigation to different pages */}
      {/* <div className="flex justify-center space-x-8 mb-6">
        <Link href="/">
          <span className="text-2xl text-gray-400 hover:text-white transition duration-200">Home</span>
        </Link>
        <Link href="/AboutUs">
          <span className="text-2xl text-gray-400 hover:text-white transition duration-200">About</span>
        </Link>
        <Link href="/contact">
          <span className="text-2xl text-gray-400 hover:text-white transition duration-200">Contact Us</span>
        </Link>
        <Link href="/AboutUs#faq-section">
          <span className="text-2xl text-gray-400 hover:text-white transition duration-200">FAQ</span>
        </Link>
      </div> */}
      <div className="flex justify-center space-x-5 mb-6">
        <a
          href="#"
          className="text-gray-400 hover:text-white transition duration-200"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition duration-200"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition duration-200"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-white transition duration-200"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
      <div className="text-s text-gray-400 mb-5">
        <p>&copy; 2023 Valyx Banking Solutions</p>
      </div>

      <div className="border-t border-white opacity-50" />
    </div>
  );
};

export default Footer;
