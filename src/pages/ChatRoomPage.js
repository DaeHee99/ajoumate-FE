import styled from "styled-components";
import ChattingBody from "../components/ChatRoomPage/ChattingBody";
import InputGroup from "../components/ChatRoomPage/InputGroup";
import RoomHeader from "../components/ChatRoomPage/RoomHeader";
import socket from "../api/socket";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getInitChat } from "../redux/modules/chatSlice";

function ChatRoomPage() {
  const dispatch = useDispatch();
  const { users } = useParams();
  const from = users.split("+")[0];
  const to = users.split("+")[1];
  const chatList = useSelector((state) => state.chatSlice.chatList);

  useEffect(() => {
    socket.off("get room list");
    socket.off("create room");
    socket.emit("all message", from, to);
    socket.on("all message", (allmsg) => {
      dispatch(getInitChat(allmsg));
    });
    return () => {
      socket.off("message");
      socket.off("all message");
    };
  }, []);

  console.log(chatList);
  return (
    <StChatRoomBody>
      <RoomHeader />
      <ChattingBody socket={socket} />
      <InputGroup socket={socket} />
    </StChatRoomBody>
  );
}

const StChatRoomBody = styled.div`
  width: 100%;
  background-color: #eeeeee;
  display: flex;
  flex: 1;
  overflow-x: hidden;
  flex-direction: column;
`;

export default ChatRoomPage;
