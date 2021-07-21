import styled from 'styled-components';

const Input = styled.input`
  margin-left: 10px;
`;

function TextInput({ label }) {
  return (
    <div>
      <label>{label}</label>
      <Input type="text"/>
    </div>
)
}

export default TextInput;