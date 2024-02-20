import React from "react";
import "./Mail.css";
import MailTools from "./MailTools";
import MailHeading from "./MailHeading";
import MailBody from "./MailBody";


const Mail = () => {
  
  return (
    <div className="mail">
      <MailTools />
      <MailHeading />
      <MailBody />
    </div>
  );
};

export default Mail;
