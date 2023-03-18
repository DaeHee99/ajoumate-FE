import React from 'react';
import styled from 'styled-components';
import { useState } from "react";
import Modal from '../modal/Modal';
import ModalPortals from '../modal/Portal';

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
  const [modalStatus, setModal] = useState(false);

  const handleModal = () => {
      setModal(!modalStatus);
  };

  const dateToString = (rawDate) => {
    let date = new Date(rawDate);
    return `${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  }

  const STATUS = "APPLY"
  return (
    <StyledCategoryDetailItem onClick={()=>handleModal()}>
      <StyledCategoryItemInfo>{props.item.MaximumNumberOfPeople}명 | {dateToString(props.item.Time)} | {props.item.Place}</StyledCategoryItemInfo>
      <StyledCategoryItemTitle>{props.item.Title}</StyledCategoryItemTitle>
      <StyledCategoryItemContent>{props.item.Comment}</StyledCategoryItemContent>
      <ModalPortals>
          <Modal show={modalStatus} handleModal={handleModal} status={STATUS} info={props.item}/>
        </ModalPortals>
    </StyledCategoryDetailItem>
  );
}