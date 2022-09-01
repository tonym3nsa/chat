import React, { useState, useEffect, Fragment } from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { postMessage, getMessage } from "../../redux/actions/chat";
import { AUTHOR } from "../../constants/constants";
import { Bubble } from "../../components/Bubble/Bubble";
import "./chatPage.css";
import { EmptyState } from "../../components/EmptyState/EmptyState";

export const ChatPage = () => {
  const { history } = useSelector((state) => state.chatReducer);
  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessage());
  }, []);

  useEffect(() => {
    console.log(">>>", history);
  }, [history]);

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
        {history?.length > 0 ? (
          history?.map((item) => {
            return (
              <Bubble
                message={item.message}
                author={item.author}
                timestamp={item.timeStamp}
                key={item.timeStamp}
              />
            );
          })
        ) : (
          <EmptyState />
        )}
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
