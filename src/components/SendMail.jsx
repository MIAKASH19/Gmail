import React from "react";
import "./SendMail.css";
import { IconButton, Button } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";

const SendMail = () => {
  const { register, watch, handleSubmit, errors } = useForm();
  return (
    <div className="sendMail">
      <div className="sendMail-header">
        <h3>New Message</h3>
        <IconButton>
          <IoClose className="sendMail-close" />
        </IconButton>
      </div>
      <form>
        <input
          name="to"
          type="text"
          placeholder="Recipents"
          {...register("to", { required: true })}
        />

        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register("to", { required: true })}
        />

        <input
          name="message"
          type="text"
          placeholder="Write Message..."
          className="sendMail-Message"
          {...register("to", { required: true })}
        />

        <div className="sendMail-options">
          <Button
            className="sendMail-Button"
            color="primary"
            variant="contained"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
