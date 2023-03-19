import styled from "styled-components";
import { useState } from "react";
import socket from "../../api/socket";
import { useSelector } from "react-redux";

function InputGroup(props) {
  const [userInput, setUserInput] = useState("");
  const userName = useSelector((state) => state.userSlice.Nickname);
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", {
      From: userName,
      To: props.to,
      Content: userInput,
      Date: Date.now(),
    });
    console.log("log:", userInput);
    setUserInput("");
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <StInputGroupWrapper>
      <StUserFormWrapper onSubmit={handleSubmit}>
        <input onChange={handleInputChange} value={userInput}></input>
        <button>전송</button>
      </StUserFormWrapper>
    </StInputGroupWrapper>
  );
}

const StInputGroupWrapper = styled.div`
  width: 100%;
  height: 4rem;
`;

const StUserFormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  input {
    width: 28rem;
    background-color: #ffffff;
    height: 3rem;
    border: none;
    border-radius: 1.2rem;
  }

  button {
    width: 6rem;
    height: 3rem;
    color: white;
    border: none;
    background-color: #5f95e5;
    /* :focus {
      background-color: #3d6db4;
    } */
  }
`;

export default InputGroup;
