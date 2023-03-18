import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChatbox } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";

const StyledNavigation = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 30px;
  bottom: 0;
`;
const StyledNavigationButton = styled.button`
  width: 25%;
  height: 100%;
  background-color: #5f95e5;
  border: 0;
  outline: 0;
  font-size: 3rem;
  padding: 0;
  cursor: pointer;
`;

export default function Navigation() {
  const navigation = useNavigate();

  return (
    <StyledNavigation>
      <StyledNavigationButton>
        <HiHome onClick={() => navigation("/")} />
      </StyledNavigationButton>
      <StyledNavigationButton>
        <RxHamburgerMenu onClick={() => navigation("/category")} />
      </StyledNavigationButton>
      <StyledNavigationButton>
        <IoChatbox onClick={() => navigation("/chatlist")} />
      </StyledNavigationButton>
      <StyledNavigationButton>
        <BsFillPersonFill onClick={() => navigation("/mypage")} />
      </StyledNavigationButton>
    </StyledNavigation>
  );
}
