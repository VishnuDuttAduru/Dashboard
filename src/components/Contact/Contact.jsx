import React from "react";
import "./Contact.css";
import Craig from "../../assets/Male06.svg";
import Diggs from "../../assets/Male07.svg";
import Cano from "../../assets/Male08.svg";
import Morrison from "../../assets/Male11.svg";
import Lane from "../../assets/Female08.svg";
import Okumus from "../../assets/Female09.svg";

const Contact = () => {
  const contactList = [
    {
      avatar: Morrison,
      name: "Natali Craig",
    },
    {
      avatar: Cano,
      name: "Drew Cano",
    },
    {
      avatar: Diggs,
      name: "Orlando Diggs",
    },
    {
      avatar: Lane,
      name: "Andi Lane",
    },
    {
      avatar: Craig,
      name: "Katie Morrison",
    },
    {
      avatar: Okumus,
      name: "Karay Okumus",
    },
  ];

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contacts</h2>
      <ul className="contact-list">
        {contactList.map((contact, index) => (
          <li className="contact-item" key={index}>
            <img
              src={contact.avatar}
              alt={contact.name}
              className="contact-avatar"
            />
            <span className="contact-name">{contact.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
