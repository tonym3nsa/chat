import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    navigate("/chat");
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
