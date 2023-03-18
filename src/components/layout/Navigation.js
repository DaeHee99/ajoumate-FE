import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";
import { IoChatbox } from "react-icons/io5";
import { IoChatboxOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
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
  console.log(window.location.pathname)
  return (
    <StyledNavigation>
      <StyledNavigationButton>
        {
          window.location.pathname === '/home' ?
          <HiHome onClick={() => navigation("/home")} /> :
          <HiOutlineHome onClick={() => navigation("/home")} />
        }
      </StyledNavigationButton>
      <StyledNavigationButton>
        {
          window.location.pathname === '/category' ?
          <HiMenu onClick={() => navigation("/category")} /> :
          <HiOutlineMenu onClick={() => navigation("/category")} />
        }
      </StyledNavigationButton>
      <StyledNavigationButton>
        {
          window.location.pathname === '/chatlist' ?
          <IoChatbox onClick={() => navigation("/chatlist")} /> :
          <IoChatboxOutline onClick={() => navigation("/chatlist")} />
        }
      </StyledNavigationButton>
      <StyledNavigationButton>
        {
          window.location.pathname === '/mypage' ?
          <BsFillPersonFill onClick={() => navigation("/mypage")} /> :
          <BsPerson onClick={() => navigation("/mypage")} />
        }
      </StyledNavigationButton>
    </StyledNavigation>
  );
}
