import React from "react";
import "./Emailrow.css";
import { Checkbox, IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";

const Emailrow = ({ id, title, subject, description, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const OpenMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    navigate("/mail")
  };

  return (
    <div onClick={OpenMail} className="emailrow">
      <div className="emailrow-options">
        <MoreVertIcon className="moreicon" />
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
      </div>
      <h4 className="emailrow-title">{title}</h4>
      <div className="emailrow-message">
        <h5>
          {subject} <span className="emailrow-description">-{description}</span>
        </h5>
      </div>
      <h5 className="emailrow-time">{time}</h5>
    </div>
  );
};

export default Emailrow;
