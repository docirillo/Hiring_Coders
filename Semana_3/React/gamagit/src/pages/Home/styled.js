import styled from 'styled-components';

//create styled container Component
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  border: 1px solid #ddd;
  height: 2rem;
  padding: 0 0.5rem;
  border-radius: 0 0.25rem 0.25rem 0;
  background: #000;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;
