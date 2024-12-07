import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  padding: 10px 18px;
  background: ${({ theme }) => (theme === "light" ? "white" : "black")};
  border-radius: 5px;
  min-width: 220px;
  border: 1px solid ${({ theme }) => (theme === "light" ? "black" : "transparent")};
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: ${({ theme }) => (theme === "light" ? "black" : "white")};
    border: 1px solid ${({ theme }) => (theme === "light" ? "transparent" : "black")};
    color: ${({ theme }) => (theme === "light" ? "white" : "black")};
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  border: 1px solid ${({ theme }) => (theme === "light" ? "transparent" : "black")};
  color: ${({ theme }) => (theme === "light" ? "white" : "black")};

  &:hover {
    background-color: ${({ theme }) => (theme === "light" ? "white" : "black")};
    border: 1px solid ${({ theme }) => (theme === "light" ? "black" : "transparent")};
    color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  }
`;
