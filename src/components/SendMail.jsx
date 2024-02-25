import React from "react";
import "./SendMail.css";
import { IconButton, Button } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";

const validationSchema = yup.object().shape({

  subject: yup.string().required("Subject is required"),

  message: yup.string().required("Message is required field"),

  to: yup.string().email("email is invalid").required("Email is required"),

});

const SendMail = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaulValues: {
      to: "",
      subject: "",
      message: "",
    }
  });


  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <div className="sendMail">
      <div className="sendMail-header">
        <h3>New Message</h3>
        <IconButton>
          <IoClose className="sendMail-close" />
        </IconButton>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            name="to"
            type="email"
            placeholder="To"
            {...register("to")}
          />

          <ErrorMessage
            errors={errors}
            name="to"
            render={({ message }) => <p className="sendMail-errors">{message}</p>}
          />
        </div>

        <div>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            {...register("subject")}
          />

          <ErrorMessage
            errors={errors}
            name="subject"
            render={({ message }) => <p className="sendMail-errors">{message}</p>}
          />
        </div>

        <div className="sendMail-Message">
          <input
            name="message"
            type="text"
            placeholder="Write Message..."
            {...register("message")}
          />

          <ErrorMessage
            errors={errors}
            name="message"
            render={({ message }) => <p className="sendMail-errors">{message}</p>}
          />
        </div>

        <div className="sendMail-options">
          <Button
            className="sendMail-Button"
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
