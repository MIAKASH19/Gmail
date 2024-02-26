import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import SidebarOption from "./SidebarOption";
import { useDispatch } from 'react-redux'
import { OpenSendMessage } from "../features/mailSlice"

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        className="compose-btn"
        startIcon={<EditRoundedIcon font-size="large" />}
        onClick={()=> dispatch(OpenSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        selected={true}
        Icon={InboxIcon}
        title="Inbox"
        number={54}
      />
      <SidebarOption
        Icon={StarBorderOutlinedIcon}
        title="Starred"
        number={89}
      />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={34} />
      <SidebarOption Icon={SendIcon} title="Sent" number={75} />
      <SidebarOption
        Icon={InsertDriveFileOutlinedIcon}
        title="Drafts"
        number={91}
      />
      <SidebarOption Icon={KeyboardArrowDownIcon} title="More" />

      <div className="sidebar-footer">
        <div className="sidebar-footericons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
