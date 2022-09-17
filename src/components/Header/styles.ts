import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  height: 3.125rem;
  border: 0;
  background: ${(props) => props.theme.colors['green-500']};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors['green-700']};
  }
`
