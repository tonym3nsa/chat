import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AUTHOR } from "../../constants/constants";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    if (event.target.username.value) {
      localStorage.setItem(AUTHOR, event.target.username.value);
      navigate("/chat");
    }
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <Input name="username" placeholder="Enter your name" />
        <Button>GO!</Button>
      </form>
    </Fragment>
  );
};
