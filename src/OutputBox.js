import styled from 'styled-components';

const TextArea = styled.textarea`
  min-height: 300px;
  width: 100%;
  height: 100%;
  resize: none;
`;

function OutputBox() {
  return <div>
    <TextArea readOnly />
  </div>;
}

export default OutputBox;