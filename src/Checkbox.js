import styled from 'styled-components';

const Input = styled.input`
  margin-left: 8px;
`;

const Label = styled.label`
  min-width: 120px;
  display: inline-block;
`;

function Checkbox({label, id, onChange}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input type="checkbox" id={id} onChange={onChange} defaultChecked/>
    </div>
  )
}

export default Checkbox;