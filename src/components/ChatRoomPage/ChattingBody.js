import { useSelector } from "react-redux";
import styled from "styled-components";
import ChatCard from "./ChatCard";

function ChattingBody() {
  const chatList = useSelector((state) => state.chatSlice.chatList);
  const userName = useSelector((state) => state.userSlice.Nickname);
  return (
    <StChattingBody>
      {chatList.map((chat) => {
        return (
          <ChatCard
            author={chat.From === userName ? "me" : "friend"}
            body={chat.Content}
            nickName={chat.From}
            key={chat.Date}
            createdAt={chat.Date}
          />
        );
      })}
    </StChattingBody>
  );
}

const StChattingBody = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export default ChattingBody;
