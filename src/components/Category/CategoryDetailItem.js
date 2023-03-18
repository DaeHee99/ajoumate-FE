import React from 'react';
import styled from 'styled-components';

const StyledCategoryDetailItem = styled.div`
  margin: 10px;
  border: 2px solid #98A8BE;
  border-radius: 24px;
  padding: 1.5rem;
  cursor: pointer;
`;
const StyledCategoryItemInfo = styled.div`
  font-size: 14px;
  color: grey;
`;
const StyledCategoryItemTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 0.8rem 0;
`;
const StyledCategoryItemContent = styled.div`
  font-size: 15px;
  color: grey;
`;

export default function CategoryDetailItem(props) {
  return (
    <StyledCategoryDetailItem onClick={()=>alert(props.item.title)}>
      <StyledCategoryItemInfo>{props.item.MaximumNumberOfPeople} | {props.item.gender} | {props.item.date} | {props.item.place}</StyledCategoryItemInfo>
      <StyledCategoryItemTitle>{props.item.title}</StyledCategoryItemTitle>
      <StyledCategoryItemContent>{props.item.content}</StyledCategoryItemContent>
    </StyledCategoryDetailItem>
  );
}