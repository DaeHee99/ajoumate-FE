import styled from "styled-components";
import ChatRoomCard from "../components/ChatlistPage/ChatRoomCard";
import { useNavigate } from "react-router-dom";
import socket from "../api/socket";
import { useDispatch } from "react-redux";
import { postChat } from "../redux/modules/chatSlice";
import { useState } from "react";

const StyledTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 0 10px 15px 10px;
`;

function ChatListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [chatAlert, setChatAlert] = useState(false);
  console.log("재렌더링되나?");
  socket.on("message", (msg) => {
    console.log(msg);
    setChatAlert(true);
    dispatch(postChat(msg));
  });
  const handleClickCard = () => {
    navigate("/chatroom/1");
  };
  return (
    <StChatListPage>
      <StyledTitle>채팅목록</StyledTitle>
      <StChatListWrapper>
        <ChatRoomCard onClick={handleClickCard} chatAlert={chatAlert} />
      </StChatListWrapper>
    </StChatListPage>
  );
}

const StChatListPage = styled.div`
  width: 36rem;
  padding-top: 1.5rem;
  margin: 0 auto;
  flex: 1;
  overflow-y: scroll;
  > h2 {
    margin-left: 1rem;
  }
`;

const StChatListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1.5rem;
`;

export default ChatListPage;
