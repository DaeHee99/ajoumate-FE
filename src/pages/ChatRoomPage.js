import styled from "styled-components";
import ChattingBody from "../components/ChatRoomPage/ChattingBody";
import InputGroup from "../components/ChatRoomPage/InputGroup";
import RoomHeader from "../components/ChatRoomPage/RoomHeader";
import { io } from "socket.io-client";

function ChatRoomPage({ socket }) {
  socket.emit("all message", () => {});
  socket.on("message", (msg) => {
    console.log(msg);
  });

  socket.on("all message", (allmsg) => {
    console.log(allmsg);
  });
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
