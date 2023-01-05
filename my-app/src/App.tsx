import React from "react";
import GLOBALSTYLE from "./global/GlobalStyle";
import { Watch } from "./components/layout/Layout";
import { HandsProvider } from "./components/dial/hands/HandsContext";
import {
  DescriptionHeader,
  DescriptionSecondTitle,
  DescriptionText,
  DescriptionWrapper,
} from "./components/description/Description.styled";

function App() {
  return (
    <HandsProvider>
      <GLOBALSTYLE />
      <DescriptionWrapper>
        <DescriptionHeader>Watch Rolex Datejust 41</DescriptionHeader>
        <Watch />
        <DescriptionText>
          <DescriptionSecondTitle>Description:</DescriptionSecondTitle>
          This is a modeled design of the Rolex Datejust 41. Watch is a project
          in react,typescript and styled components. I made this project to show
          my coding ability and doing something original. The watch was not
          created for commercial purposes.
        </DescriptionText>
      </DescriptionWrapper>
    </HandsProvider>
  );
}

export default App;
