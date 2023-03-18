import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 18px;
  border-radius: 10px;
  border: 0;
  outline: 0;
  background-color: #5f95e5;
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  position: fixed;
  top: 83%;
  right: 5%;
  z-index: 99;
`;


export default function WriteButton() {
  const navigation = useNavigate();
  const user = useSelector((state) => state.userSlice);

  const clickHandler = () => {
    if(!user.Status) {
      alert('로그인 후 이용해주세요.');
      navigation("/signin");
    }
    else navigation("/writepage");
  }
  
  return (
    <StyledButton onClick={clickHandler}>
      글 작성
    </StyledButton>
  );
}
