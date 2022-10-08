import styled from 'styled-components'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(AlertDialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: ${(props) => props.theme.colors.overlay};
`

export const Content = styled(AlertDialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme.colors['gray-800']};
  position: relative;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin: 2rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme.colors['gray-900']};
      color: ${(props) => props.theme.colors['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme.colors['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;
      border: 0;
      background: ${(props) => props.theme.colors['green-500']};
      color: ${(props) => props.theme.colors.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin: 1.5rem 0 0;
      transition: background 0.2s;

      &:hover {
        background: ${(props) => props.theme.colors['green-300']};
      }
    }
  }
`

export const CloseButton = styled(AlertDialog.Cancel)`
  background: transparent;
  border: 0;
  line-height: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  svg {
    color: ${(props) => props.theme.colors['gray-500']};
  }
`
export const TransactionType = styled(RadioGroup.Root)`
  margin: 1.5rem 0 0;

  display: flex;
  align-items: center;
  gap: 1rem;
`

interface TransactionTypeButtonProps {
  variant?: 'income' | 'outcome'
}

// eslint-disable-next-line prettier/prettier
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>` 
  border: 0;
  flex: 1;
  background: ${(props) => props.theme.colors['gray-700']};
  border-radius: 6px;
  height: 3.625rem;
  transition: background 0.2s;
  color: ${(props) => props.theme.colors['gray-300']};
  line-height: 1.6;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme.colors['green-300']
        : props.theme.colors['red-300']};
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme.colors['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme.colors['green-500']
        : props.theme.colors['red-500']};

    svg {
      color: ${(props) => props.theme.colors.white};
    }
  }
`
