import styled from 'styled-components'

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 6px;
`

const Checkbox = styled.input`
  display: none;
`

const Label = styled.label<{ isActive: boolean }>`
  align-items: center;
  background-color: ${(props) => props.isActive ? 'var(--grey)' : 'var(--purple)'};
  border-radius: 12px;
  color: var(--white);
  display: flex;
  gap: 8px;
  max-width: 300px;
  padding: 16px;
`

const CheckmarkWrapper = styled.div``

const Checkmark = styled.img``

const InputText = styled.input`
  background-color: transparent;
  flex-grow: 1;
  border: 0;
  outline: 0;
  color: inherit;
`

const RemoveButton = styled.button``

export default {
  ListItem,
  Checkbox,
  Label,
  CheckmarkWrapper,
  Checkmark,
  InputText,
  RemoveButton
}
