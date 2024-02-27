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
          <p>hkhkjhkj{selectedMail?.subject}jhkjhkkj</p>
          <p>hkhkjhkj{selectedMail?.subject}jhkjhkkj</p>
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
      <div className="mail-message">
        <p>This is a text messge</p>
      </div>
      <h1>mail</h1>
    </div>
  );
};

export default MailBody;
