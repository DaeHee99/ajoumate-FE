import React from 'react';
import styled from 'styled-components';
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
  position: fixed;
  bottom: 0;
`;
const StyledNavigationButton = styled.button`
  width: 25%;
  height: 100%;
  background-color: #5F95E5;
  border: 0;
  outline: 0;
  font-size: 3rem;
  padding: 0;
  cursor: pointer;
`;

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledNavigationButton>
        <HiHome onClick={()=>alert('메인')}/>
      </StyledNavigationButton>
      <StyledNavigationButton>
        <RxHamburgerMenu onClick={()=>alert('카테고리')}/>
      </StyledNavigationButton>
      <StyledNavigationButton>
        <IoChatbox onClick={()=>alert('채팅')}/>
      </StyledNavigationButton>
      <StyledNavigationButton>
        <BsFillPersonFill onClick={()=>alert('마이 페이지')}/>
      </StyledNavigationButton>
    </StyledNavigation>
  );
}