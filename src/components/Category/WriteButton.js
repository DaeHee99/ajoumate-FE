import React from "react";
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
  return (
    <StyledButton onClick={() => alert("글 작성할거죠?")}>
      글 작성
    </StyledButton>
  );
}
