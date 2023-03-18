import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../images/Logo.png';

const StyledHeader = styled.div`
  background-color: #5F95E5;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 30px;
  padding: 10px 0;
  position: fixed;
  top: 0;
`;

export default function Header() {
  const navigation = useNavigate();

  return (
    <StyledHeader onClick={()=>navigation('/')}>
      <img src={Logo} alt='Logo' width={50} style={{borderRadius: '50%', marginRight: 15}}/>
      아주 메이트
    </StyledHeader>
  );
}