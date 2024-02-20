import React from 'react'
import "./MailHeading.css"
import { LuPrinter } from "react-icons/lu";
import { IconButton } from "@mui/material";
import { RxOpenInNewWindow } from "react-icons/rx";

const MailHeading = () => {
  return (
    <div className="mail-heading">
        <h1>
          Transform Your Flyer Design & Dive Into Gaming's Latest - Inside!
        </h1>
        <div className="mainheading-icon">
          <IconButton>
            <LuPrinter className="custom-icon2" />
          </IconButton>
          <IconButton>
            <RxOpenInNewWindow className="custom-icon2" />
          </IconButton>
        </div>
      </div>
  )
}

export default MailHeading
