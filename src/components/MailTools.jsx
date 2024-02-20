import React from 'react'
import "./MailTools.css"
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdOutlineMoveToInbox } from "react-icons/md";
import { MdReportGmailerrorred } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { MdLabelOutline } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { MdOutlineAddTask } from "react-icons/md";
import { RiFolderTransferLine } from "react-icons/ri";

const MailTools = () => {
    const navigate = useNavigate();
  return (
    <div className="mail-tools">
        <div className="mailtools-left">
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackOutlinedIcon className="custom-icon" />
          </IconButton>
          <IconButton>
            <MdOutlineMoveToInbox className="custom-icon" />
          </IconButton>
          <IconButton>
            <MdReportGmailerrorred className="custom-icon" />
          </IconButton>
          <IconButton>
            <AiOutlineDelete className="custom-icon" />
          </IconButton>
          <IconButton>
            <MdLabelOutline className="custom-icon" />
          </IconButton>
          <IconButton>
            <FiClock className="custom-icon" />
          </IconButton>
          <IconButton>
            <MdOutlineMarkEmailUnread className="custom-icon" />
          </IconButton>
          <IconButton>
            <RiFolderTransferLine className="custom-icon" />
          </IconButton>
          <IconButton>
            <MdOutlineAddTask className="custom-icon" />
          </IconButton>
        </div>
        <div className="mailtools-right">
          <IconButton>
            <MdOutlineKeyboardArrowLeft className="custom-icon" />
          </IconButton>
          <IconButton>
            <MdOutlineKeyboardArrowRight className="custom-icon" />
          </IconButton>
        </div>
      </div>
  )
}

export default MailTools
