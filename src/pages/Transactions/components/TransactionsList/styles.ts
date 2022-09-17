import styled from 'styled-components'

export const TransactionsListContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  /* margin: 1.5rem 0 0; */

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme.colors['gray-700']};

    &:first-child {
      width: 40%;
      border-radius: 6px 0 0 6px;
    }

    &:last-child {
      border-radius: 0 6px 6px 0;
    }
  }
`
interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme.colors['green-300']
      : props.theme.colors['red-300']};
`
