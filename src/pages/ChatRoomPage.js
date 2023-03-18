import styled from "styled-components";
import ChattingBody from "../components/ChatRoomPage/ChattingBody";
import InputGroup from "../components/ChatRoomPage/InputGroup";
import RoomHeader from "../components/ChatRoomPage/RoomHeader";
import socket from "../api/socket";
import { useDispatch, useSelector } from "react-redux";

function ChatRoomPage() {
  const dispatch = useDispatch();
  const chatList = useSelector((state) => state.chatSlice.chatList);
  socket.emit("all message", () => {});

  socket.on("all message", (allmsg) => {
    console.log(allmsg);
  });
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
