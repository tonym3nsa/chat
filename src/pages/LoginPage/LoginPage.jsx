import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AUTHOR, CHAT_PAGE } from "../../constants/constants";
import "./loginPage.css";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    if (event.target.username.value) {
      sessionStorage.setItem(AUTHOR, event.target.username.value);
      navigate(CHAT_PAGE);
    }
  };
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <form onSubmit={onSubmit}>
              <div className="login-section">
                <div>
                  <Input
                    className="login"
                    name="username"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <Button className="login">GO!</Button>
                </div>
              </div>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </Fragment>
  );
};
