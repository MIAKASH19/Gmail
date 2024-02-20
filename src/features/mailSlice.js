import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        sendMessageIsOpen: false,
    },
    reducers: {
        OpenSendMessage: state=>{
            state.sendMessageIsOpen = true;
        },
        closeSendMessage: state=>{
            state.sendMessageIsOpen = false;
        },
    },
});

export const { OpenSendMessage, closeSendMessage } = 
mailSlice.actions

export const incrementAsync = amount => dispatch => {
    setTimeout(()=>{
        dispatch(incrementByAmount(amount));
    },1000)
}

export const selecsendMessageIsOpen = state => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;