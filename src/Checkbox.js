import styled from 'styled-components';

const Input = styled.input`
  margin-left: 8px;
`;

function Checkbox({ label }) {
  return (
    <div>
      <label>{label}</label>
      <Input type="checkbox"/>
    </div>
)
}

export default Checkbox;