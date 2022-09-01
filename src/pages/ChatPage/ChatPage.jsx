import React, { useState, useEffect, useRef, Fragment } from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { postMessage, getMessage } from "../../redux/actions/chat";
import { AUTHOR, INTERVAL } from "../../constants/constants";
import { Bubble } from "../../components/Bubble/Bubble";
import "./chatPage.css";
import { EmptyState } from "../../components/EmptyState/EmptyState";

export const ChatPage = () => {
  const { history } = useSelector((state) => state.chatReducer);
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessage());
    setInterval(() => dispatch(getMessage()), INTERVAL); // fetch history at intervals of INTERVAL constant
  }, []);

  useEffect(() => {
    if (history?.length > 0) {
      scrollToBottom();
    }
  }, [history]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const message = event.target.chat.value;
    let cloneMessages = [...messages];
    const author = localStorage.getItem(AUTHOR);
    cloneMessages.push({ timeStamp: new Date(), author, message });
    setMessages(cloneMessages);
    dispatch(postMessage({ timeStamp: new Date(), author, message }));
    event.target.reset();
  };
  return (
    <Fragment>
      <div className="chat-area">
        {history?.length > 0 ? (
          history.map((item) => {
            return (
              <Bubble
                message={item.message}
                author={item.author}
                timeStamp={item.timeStamp}
                key={item.timeStamp}
              />
            );
          })
        ) : (
          <EmptyState />
        )}
      </div>
      <div ref={messagesEndRef} />
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
