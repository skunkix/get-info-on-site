import styled from 'styled-components';
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import OutputBox from "./OutputBox";
import {useCallback, useState} from "react";
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
  const [queryOutput, setQueryOutput] = useState("");

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
    }).then(response => {
      setQueryOutput(JSON.stringify(response.data.data,undefined, 2));
    })
  }, []);

  return (
    <div className="App">
      <QueryBox>
        <InputArea>
          <TextInput label="Enter Album Title:" />
          <hr />
          <Checkbox label="Artist ID:" />
          <Checkbox label="Artist name:" />
          <Checkbox label="Artist URL:" />
          <Checkbox label="ID:" />
          <Checkbox label="URL:" />
          <Checkbox label="Genres:" />
          <Checkbox label="Images:" />
          <Checkbox label="Label:" />
          <Checkbox label="Exact title:" />
          <Checkbox label="Popularity:" />
          <Checkbox label="Release Date:" />
          <Checkbox label="Num. Tracks:" />
          <button onClick={queryApi}>Query album</button>
        </InputArea>
        <OutputArea>
          <OutputBox value={queryOutput} />
        </OutputArea>
      </QueryBox>
    </div>
  );
}

export default App;
