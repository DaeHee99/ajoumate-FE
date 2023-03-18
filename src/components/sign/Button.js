import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 4rem;
  font-size: 1.6rem;
  border: none;
  background: #5f95e5;
  color: #ffffff;
  cursor: pointer;
  margin: 0 0 1rem 0;
  &:disabled {
    background: #d7d7d7;
    cursor: default;
  }
`;

export default Button;
