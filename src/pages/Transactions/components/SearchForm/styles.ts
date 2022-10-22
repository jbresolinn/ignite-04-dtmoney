import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;

  fieldset {
    flex: 1;
    border: 1px solid transparent;

    border-radius: 6px;
    background: ${(props) => props.theme.colors['gray-900']};
    transition: 0.1s border;

    &:focus-within {
      border-color: ${(props) => props.theme.colors['green-500']};
    }

    input {
      width: 100%;
      padding: 1rem;
      background: transparent;
      border: 0;
      color: ${(props) => props.theme.colors['gray-300']};
      text-overflow: ellipsis;

      &::placeholder {
        color: ${(props) => props.theme.colors['gray-500']};
      }
    }
  }
`

export const SearchButton = styled.button`
  width: 100%;
  max-width: 9.1875rem;
  height: 3.375rem;
  border: 1px solid ${(props) => props.theme.colors['green-500']};
  border-radius: 6px;
  background: transparent;
  transition: background 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  svg {
    color: ${(props) => props.theme.colors['green-500']};
    transition: color 0.2s;
  }

  span {
    font-weight: bold;
    line-height: 1.6;
    color: ${(props) => props.theme.colors['green-500']};
    transition: color 0.2s;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.colors['green-500']};

    svg,
    span {
      color: ${(props) => props.theme.colors.white};
    }
  }

  &:disabled {
    opacity: 0.6;
  }
`
