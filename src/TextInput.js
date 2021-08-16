import styled from 'styled-components';

const Input = styled.input`
  margin-left: 10px;
`;

function TextInput({ label, id, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input type="text" id={id} onChange={onChange} />
    </div>
)
}

export default TextInput;