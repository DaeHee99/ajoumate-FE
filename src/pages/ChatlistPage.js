import styled from "styled-components";
import ChatRoomCard from "../components/ChatlistPage/ChatRoomCard";
import { useNavigate } from "react-router-dom";
import socket from "../api/socket";
import { useDispatch, useSelector } from "react-redux";
import { postChat } from "../redux/modules/chatSlice";
import { useState, useEffect } from "react";

const StyledTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 0 10px 15px 10px;
`;

function ChatListPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.userSlice.Nickname);
  const [chatAlert, setChatAlert] = useState([]);
  const [findName, setFindName] = useState("");
  const [myRooms, setMyRooms] = useState([]);
  console.log(chatAlert);

  useEffect(() => {
    socket.emit("get room list", userName);
    socket.on("get room list", (res) => {
      console.log(res);
      setMyRooms([...myRooms, ...res]);
    });
    socket.on("message", (msg) => {
      console.log(msg);
      setChatAlert([...chatAlert, msg.From]);
      dispatch(postChat(msg));
    });
    socket.on("create room", (rooms) => {
      setMyRooms([...myRooms, ...rooms]);
    });
  }, []);
  const handleClickCard = (to) => {
    setChatAlert([...chatAlert.filter((el) => el !== to)]);
    navigate(`/chatroom/${userName}+${to}`);
  };
  return (
    <StChatListPage>
      <h2>채팅목록</h2>
      <div className="chat-add-form">
        <input onChange={(e) => setFindName(e.target.value)}></input>
        <button
          onClick={() => {
            socket.emit("create room", userName, findName);
          }}
        >
          채팅시작
        </button>
      </div>
      <StChatListWrapper>
        {myRooms?.map((room) => {
          return (
            <ChatRoomCard
              onClick={handleClickCard}
              chatAlert={chatAlert.includes(room) ? true : false}
              to={room}
              userName={userName}
              key={room}
            />
          );
        })}
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
