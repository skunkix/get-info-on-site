import styled from 'styled-components';

const Input = styled.input`
  margin-left: 10px;
`;

function TextInput({ label }) {
  return (
    <div>
      <label for={label}>{label}</label>
      <Input type="text" id={label}/>
    </div>
)
}

export default TextInput;