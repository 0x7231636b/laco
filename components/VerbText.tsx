import { useState } from "react";
import styled from "styled-components";

// TODO: View the solution after tapping the "show solution" button
export default function VerbText() {
  const [verb, setVerb] = useState("estár");
  return <MyText>{verb}</MyText>;
}

// TODO: Fix typescript errors
const MyText = styled.Text`
  font-size: 30px;
`;
