import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import EmailList from "./components/EmailList";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import { selectsendMessageIsOpen } from "./features/mailSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectsendMessageIsOpen);
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
