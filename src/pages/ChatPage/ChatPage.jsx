import React, { Fragment } from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import "./chatPage.css";

export const ChatPage = () => {
  return (
    <Fragment>
      <div className="chat-area"></div>
      <form>
        <div className="messaging-section ">
          <div className="grid">
            <div>
              <Input
                name="chat"
                placeholder="Enter text to send"
                className="full-width"
              />
            </div>
            <div className="text-align-right">
              <Button type="submit">Send</Button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
