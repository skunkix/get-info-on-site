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

const Button = styled.button`
  padding: 15px;
  font-size: 20px;
  width: 400px;
  margin-right: auto;
`;

const checkboxes = [
  { id: "artist.id", label: "Artist ID" },
  { id: "artist.name", label: "Artist name" },
  { id: "artist.link", label: "Artist URL" },
  { id: "id", label: "ID" },
  { id: "link", label: "URL" },
  { id: "genres", label: "Genres" },
  { id: "images.url", label: "Images" },
  { id: "label", label: "Label" },
  { id: "name", label: "Exact title" },
  { id: "popularity", label: "Popularity" },
  { id: "release_date", label: "Release date" },
  { id: "num_tracks", label: "Num. tracks" },
];

function App() {
  const [queryOutput, setQueryOutput] = useState("");
  const [userInput, setUserInput] = useState(checkboxes.reduce((acc={}, cb) => ({ ...acc, [cb.id]: true })));

  const queryApi = useCallback(() => {
    const queryFields = {};
    for (const checkboxId in userInput) {
      if (userInput[checkboxId] !== true) continue;
      const parts = checkboxId.split(".");
      if (parts.length === 1) queryFields[parts[0]] = { children: null };
      else {
        if (!queryFields[parts[0]]) queryFields[parts[0]] = { children: [] }
        queryFields[parts[0]].children.push(parts[1]);
      }
    }

    let stringFields = "";
    for (const field in queryFields) {
      stringFields += queryFields[field].children ?
        `\n${field} { ${queryFields[field].children.reduce((acc="", child) => acc + '\n' + child)} }` :
        `\n${field}`
    }

    const query = `{
          getAlbum(title: "${userInput["query-title"]}") {
              ${stringFields}
          }
    }`
    console.log(query)

    axios.post("http://localhost:4000/graphql", {
      query
    }).then(response => {
      setQueryOutput(JSON.stringify(response.data.data,undefined, 2));
    })
  }, [userInput]);

  const onTitleChange = useCallback(event => {
    setUserInput(current => ({ ...current, [event.target.id]: event.target.value }));
  }, []);

  const onCheckboxChange = useCallback(event => {
    setUserInput(current => ({ ...current, [event.target.id]: event.target.checked }));
  }, []);

  return (
    <div className="App">
      <QueryBox>
        <InputArea>
          <TextInput label="Enter Album Title:" id="query-title" onChange={onTitleChange} />
          <hr />
          {checkboxes.map(cb => <Checkbox label={`${cb.label}:`} onChange={onCheckboxChange} key={cb.id} id={cb.id}/>)}
          <Button onClick={queryApi}>Query album</Button>
        </InputArea>
        <OutputArea>
          <OutputBox value={queryOutput} />
        </OutputArea>
      </QueryBox>
    </div>
  );
}

export default App;
