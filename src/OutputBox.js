import styled from 'styled-components';

const TextArea = styled.textarea`
  min-height: 300px;
  width: 100%;
  height: 100%;
  resize: none;
`;

function OutputBox({ value }) {
  return <div>
    <TextArea readOnly value={value} />
  </div>;
}

export default OutputBox;