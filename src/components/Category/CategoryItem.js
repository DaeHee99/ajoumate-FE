import React from 'react';
import styled from 'styled-components';

const StyledCategoryItem = styled.div`
  margin: 10px;
  border: 2px solid #98A8BE;
  border-radius: 24px;
  padding: 1.5rem;
  cursor: pointer;
`;
const StyledCategoryItemTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;
const StyledCategoryItemContent = styled.div`
  font-size: 15px;
  color: grey;
`;

export default function CategoryItem(props) {
  return (
    <StyledCategoryItem onClick={()=>alert(props.item.title)}>
      <StyledCategoryItemTitle>{props.item.title}</StyledCategoryItemTitle>
      <StyledCategoryItemContent>{props.item.content}</StyledCategoryItemContent>
    </StyledCategoryItem>
  );
}