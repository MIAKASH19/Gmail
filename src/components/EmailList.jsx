import React from "react";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import { GoPeople } from "react-icons/go";
import { PiTagBold } from "react-icons/pi";
import { FaRedo } from "react-icons/fa";
import "./EmailList.css";
import Section from "./Section";
import Emailrow from "./Emailrow";

const EmailList = () => {
  return (
    <div className="emaillist">
      <div className="emaillist-settings">
        <div className="email-settingsleft">
          <IconButton>
            <Checkbox />
          </IconButton>
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <FaRedo className="customize-icon" />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
        <div className="email-settingsright">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emaillist-section">
        <Section Icon={InboxIcon} title="Primary" color="#0C56CC" selected />
        <Section Icon={PiTagBold} title="Promotion" color="blue" />
        <Section Icon={GoPeople} title="Social" color="green" />
      </div>
      <div className="emaillist-list">
        <Emailrow
          title="LinkedIn job offer"
          subject="Hey I'm akash"
          description="jsafdkhfkjashdfkjahfkjadhfkjashdfkjahsdfjkhfkjshfkjshdkjhfklasjdhfkjsahdfkljsahdkljhfkljashdkfjhskjdfhksjdhkfjhdsklfhsdj"
          time="10pm"
        />
      </div>
      <div className="emaillist-list">
        <Emailrow
          title="LinkedIn job offer"
          subject="Hey I'm akash"
          description="jsafdkhfkjashdfkjahfkjadhfkjashdfkjahsdfjkhfkjshfkjshdkjhfklasjdhfkjsahdfkljsahdkljhfkljashdkfjhskjdfhksjdhkfjhdsklfhsdj"
          time="10pm"
        />
      </div>
      <div className="emaillist-list">
        <Emailrow
          title="LinkedIn job offer"
          subject="Hey I'm akash"
          description="jsafdkhfkjashdfkjahfkjadhfkjashdfkjahsdfjkhfkjshfkjshdkjhfklasjdhfkjsahdfkljsahdkljhfkljashdkfjhskjdfhksjdhkfjhdsklfhsdj"
          time="10pm"
        />
      </div>
      <div className="emaillist-list">
        <Emailrow
          title="LinkedIn job offer"
          subject="Hey I'm akash"
          description="jsafdkhfkjashdfkjahfkjadhfkjashdfkjahsdfjkhfkjshfkjshdkjhfklasjdhfkjsahdfkljsahdkljhfkljashdkfjhskjdfhksjdhkfjhdsklfhsdj"
          time="10pm"
        />
      </div>
      <div className="emaillist-list">
        <Emailrow
          title="LinkedIn job offer"
          subject="Hey I'm akash"
          description="jsafdkhfkjashdfkjahfkjadhfkjashdfkjahsdfjkhfkjshfkjshdkjhfklasjdhfkjsahdfkljsahdkljhfkljashdkfjhskjdfhksjdhkfjhdsklfhsdj"
          time="10pm"
        />
      </div>
    </div>
  );
};

export default EmailList;
