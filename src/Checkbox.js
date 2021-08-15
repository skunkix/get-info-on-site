import styled from 'styled-components';

const Input = styled.input`
  margin-left: 8px;
`;

const Label = styled.label`
  min-width: 120px;
  display: inline-block;
`;

function Checkbox({ label }) {
  return (
    <div>
      <Label for={label}>{label}</Label>
      <Input type="checkbox" id={label}/>
    </div>
)
}

export default Checkbox;