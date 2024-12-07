import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle, theme }) => {
  return (
    <Container theme={theme}>
      <div>
        <img src="/images/dices.png" alt="Dice" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle} theme={theme}>
          Play Now
        </Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  background-color: ${({ theme }) => (theme === "light" ? "#ffffff" : "#333")};
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  transition: background-color 0.3s, color 0.3s;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
