import React, { useState, useEffect, Fragment } from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { postMessage, getMessage } from "../../redux/actions/chat";
import { AUTHOR } from "../../constants/constants";
import "./chatPage.css";

export const ChatPage = () => {
  const { history } = useSelector((state) => state.chatReducer);
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessage());
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    const message = event.target.chat.value;
    let cloneMessages = [...messages];
    const author = localStorage.getItem(AUTHOR);
    cloneMessages.push({ timestamp: new Date(), author, message });
    setMessages(cloneMessages);
    dispatch(postMessage({ timeStamp: new Date(), author, message }));
    event.target.reset();
  };
  return (
    <Fragment>
      <div className="chat-area">
        {history?.map((item) => {
          return <div key={item.timeStamp}>{item.message}</div>;
        })}
      </div>
      <form onSubmit={onSubmit}>
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
