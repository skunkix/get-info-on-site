import styled from 'styled-components';
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import OutputBox from "./OutputBox";
import {useCallback} from "react";
import axios from "axios";

const QueryBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 10px;
  margin: 30px;
  padding: 30px;
  background: lightyellow;
`;

const InputArea = styled.div`
  display: grid;
  grid-row-gap: 20px;
  height: min-content;
  flex-direction: column;
`;

const OutputArea = styled.div`
  background: white;
`;

function App() {
  const queryApi = useCallback(() => {
    const query = `{
      getAlbum(title: "Prequelle") {
        artist {
          name
        }      
      }
    }`;
    axios.post("http://localhost:4000/graphql", {
      query
    });
  }, []);

  return (
    <div className="App">
      <QueryBox>
        <InputArea>
          <TextInput label="Enter URL:" />
          <Checkbox label="IP Address:" />
          <Checkbox label="Something:" />
          <Checkbox label="Else:" />
          <Checkbox label="Somtingelse:" />
          <button onClick={queryApi}>Query album</button>
        </InputArea>
        <OutputArea>
          <OutputBox />
        </OutputArea>
      </QueryBox>
    </div>
  );
}

export default App;
