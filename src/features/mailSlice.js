import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    OpenSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { selectMail, OpenSendMessage, closeSendMessage } =
  mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;

export const selectsendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
