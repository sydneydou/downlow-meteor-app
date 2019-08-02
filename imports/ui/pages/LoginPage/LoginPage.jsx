import React, { Component } from "react";
import AccountsUIWrapper from "../../components/AccountWrapper"
import "./styles.css";

LoginPage = () => {
  return (
    <div className="login-wrapper">
      <AccountsUIWrapper>
      <p>This is the LoginPage</p>
      </AccountsUIWrapper>
    </div>
  );
};

export default LoginPage;
