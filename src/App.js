import styled, { keyframes } from "styled-components";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Title>Hello</Title>
      <Box>
        <Emoji>🥳</Emoji>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.bakgroundColor};
`;

const Title = styled.h1`
  color: ${props => props.theme.textColor};
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  background-color: tomato;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 1s linear infinite;

  ${Emoji}:hover {
    font-size: 98px;
  }
`;



export default App;
