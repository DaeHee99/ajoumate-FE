import styled from "styled-components";
import ChattingBody from "../components/ChatRoomPage/ChattingBody";
import InputGroup from "../components/ChatRoomPage/InputGroup";
import RoomHeader from "../components/ChatRoomPage/RoomHeader";
import { io } from "socket.io-client";

function ChatRoomPage() {
  const socket = io("uri", { transports: ["websocket"] });
  socket.on("connect", () => {
    console.log("socket.connected");
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
