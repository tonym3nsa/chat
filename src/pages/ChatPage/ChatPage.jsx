import React, { useState, useEffect, Fragment } from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postMessage, getMessage } from "../../redux/actions/chat";
import { AUTHOR, INTERVAL, LOGIN_PAGE } from "../../constants/constants";
import { Bubble } from "../../components/Bubble/Bubble";
import { EmptyState } from "../../components/EmptyState/EmptyState";
import { paginate } from "../../utils/utils";
import "./chatPage.css";

export const ChatPage = () => {
  const { history } = useSelector((state) => state.chatReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [msg, setMsg] = useState([]);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    if (!sessionStorage.getItem(AUTHOR)) {
      navigate(LOGIN_PAGE);
    }
  }, []);

  useEffect(() => {
    dispatch(getMessage());
    setInterval(() => dispatch(getMessage()), INTERVAL); // fetch history at intervals of INTERVAL constant
  }, []);

  useEffect(() => {
    if (history?.length > 0) {
      setMsg(paginate(history, pageSize, 1));
    }
  }, [history]);

  const expand = () => {
    setMsg(paginate(history, pageSize + 5, 1));
    setPageSize(pageSize + 5);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const message = event.target.chat.value;
    if (message?.length > 0) {
      const author = sessionStorage.getItem(AUTHOR);
      dispatch(postMessage({ timeStamp: new Date(), author, message }));
      event.target.reset();
    }
  };
  return (
    <Fragment>
      <div
        className="chat-area"
        style={{ overflowY: "scroll", height: "100vh" }}
      >
        {msg?.length > 0 ? (
          msg.map((item) => {
            return (
              <Bubble
                message={item.message}
                author={item.author}
                timeStamp={item.timeStamp.toString()}
                key={item.timeStamp.toString()}
              />
            );
          })
        ) : (
          <EmptyState />
        )}
        {history?.length > msg?.length ? (
          <Button className="link py-5" onClick={expand}>
            Load More
          </Button>
        ) : (
          ""
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
