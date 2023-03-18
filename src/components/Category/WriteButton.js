import React from "react";
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

  return (
    <StyledButton onClick={() => navigation("/writepage")}>
      글 작성
    </StyledButton>
  );
}
