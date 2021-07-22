import styled from 'styled-components';

const Input = styled.input`
  margin-left: 8px;
`;

function Checkbox({ label }) {
  return (
    <div>
      <label for={label}>{label}</label>
      <Input type="checkbox" id={label}/>
    </div>
)
}

export default Checkbox;