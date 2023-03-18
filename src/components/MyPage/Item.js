import styled from "styled-components";
import Modal from "../modal/Modal";
import ModalPortals from "../modal/Portal";
import { useState } from "react";

const Align = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 0.2rem solid #98a8be;
  cursor: pointer;
  &:last-child {
    border: none;
  }
`;

const Category = styled.p`
  width: 12rem;
  font-size: 1.6rem;
  margin: 0 1.6rem 0 0;
`;

const Title = styled.p`
  width: 17rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.6rem;
  margin: 0 1.6rem 0 0;
`;

export default function Item({ category, title, ...rest }) {
  const [modalStatus, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modalStatus);
};
  const STATUS = "MYMATE"
  return (
    <Align {...rest} >
      <Category>{category}</Category>
      <Title>{title}</Title>
      <ModalPortals>
          <Modal show={modalStatus} handleModal={handleModal} status={STATUS} info={props.item}/>
        </ModalPortals>
    </Align>
  );
}
