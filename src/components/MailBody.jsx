import React from "react";
import "./MailBody.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { HiReply } from "react-icons/hi";
import { IconButton } from "@mui/material";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { useSelector } from "react-redux"
import { selectOpenMail } from "../features/mailSlice"

const MailBody = () => {
  const selectedMail = useSelector(selectOpenMail);
  return (
    <div className="mail-body">
      <div className="mailbody-header">
        <div className="mailheader-left">
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
          <h4>{selectedMail?.title}</h4>
          
        </div>
        <div className="mailheader-right">
          <p className="mail-time">{selectedMail?.time}</p>
          <IconButton>
            <StarBorderOutlinedIcon className="custom-icon2" />
          </IconButton>
          <IconButton>
            <HiReply className="custom-icon2" />
          </IconButton>

          <IconButton>
            <MdOutlineEmojiEmotions />
          </IconButton>

          <IconButton>
            <MoreVertIcon className="custom-icon2" />
          </IconButton>
        </div>
      </div>
      <div className="mail-subject">
        <p>Subject - {selectedMail?.subject}</p>
      </div>
        <div className = "mail-description">
          <p>{selectedMail?.description}</p>
        </div>
    </div>
  );
};

export default MailBody;
